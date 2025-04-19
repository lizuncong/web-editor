import { getThemeOrigin } from '@/constant';
import { LanguageEnum } from '@/types/enum';
import {
  CurrentEditingFormType,
  SectionConfigDataStruct,
  SectionConfigSchema,
  SectionId,
  SectionSchemaStruct,
  SectionTypeEnum,
} from '@/types/section';
import { resolvablePromise } from '@/utils/resolve';

import { CommunicateListenerType, CommunicateType } from './type';
class FrameCommunicator {
  private origin: string;
  private iframeWindowPromise: any;
  private eventListeners = new Map<string, ((data: any) => void)[]>();
  constructor() {
    this.origin = getThemeOrigin();
    this.iframeWindowPromise = resolvablePromise();
  }
  public initFrameWindow(iframeWindow: any) {
    this.iframeWindowPromise.resolve(iframeWindow);
    // 初始化监听iframe的消息
    const listener = (event: { origin: string; data: any }) => {
      console.log('Editor: 监听iframe发送的消息：', event.origin, this.origin, event.origin !== this.origin);

      if (this.origin && event.origin !== this.origin) {
        console.warn(`Message from unknown origin: ${event.origin}`);
        return;
      }
      // 解析消息
      const { type, data } = event.data;

      // 触发对应的监听器
      if (this.eventListeners.has(type)) {
        const handlers = this.eventListeners.get(type);
        handlers?.forEach((handler) => {
          handler(data);
        });
      }
    };
    window.addEventListener('message', listener);
    return () => {
      this.iframeWindowPromise = resolvablePromise();
      window.removeEventListener('message', listener);
    };
  }

  private async sendMessage(type: CommunicateType, data: any): Promise<void> {
    const iframeWindow = await this.iframeWindowPromise;

    const message = {
      type,
      data,
    };
    console.log('Editor: 给Iframe发送的消息：', message);

    iframeWindow.contentWindow.postMessage(message, this.origin);
  }
  // lanuage发生了改变
  public notifyLanguageChange(language: LanguageEnum) {
    this.sendMessage(CommunicateType.language, language);
  }
  // currentEditingForm发生了改变
  public notifyCurrentEditingFormChange(currentEditingForm: CurrentEditingFormType | undefined) {
    this.sendMessage(CommunicateType.currentEditingForm, currentEditingForm);
  }
  // sectionConfigData的order发生了改变
  public notifySectionConfigOrderChange(order: SectionId[]) {
    this.sendMessage(CommunicateType.order, order);
  }
  // sectionConfigData的sections发生了改变
  public notifySectionConfigSectionsChange(sections: Record<SectionId, SectionConfigSchema | undefined>) {
    this.sendMessage(CommunicateType.sections, sections);
  }

  // sectionConfigData的某个section发生了改变
  public notifySectionConfigSectionChange(sectionId: SectionId, section: SectionConfigSchema | undefined) {
    this.sendMessage(CommunicateType.section, { sectionId, section });
  }

  // sectionConfigData整个发生了改变
  public notifySectionConfigDataChange(configData: SectionConfigDataStruct) {
    this.sendMessage(CommunicateType.sectionConfigData, configData);
  }
  private onMessage(type: string, handler: (data: any) => void): () => void {
    if (!this.eventListeners.has(type)) {
      this.eventListeners.set(type, []);
    }
    this.eventListeners.get(type)?.push(handler);

    return () => {
      this.offMessage(type, handler);
    };
  }

  // 监听sectionConfigData的order发生的改变
  public onSectionConfigOrderChange(handler: (order: SectionId[]) => void) {
    return this.onMessage(CommunicateType.order, handler);
  }
  // 监听sectionConfigData的sections发生的改变
  public onSectionConfigSectionsChange(handler: (data: Record<SectionId, SectionConfigSchema | undefined>) => void) {
    return this.onMessage(CommunicateType.sections, handler);
  }

  // 监听sectionConfigData的某个section发生了改变
  public onSectionConfigSectionChange(handler: (data: { sectionId: SectionId; section: SectionConfigSchema }) => void) {
    return this.onMessage(CommunicateType.section, handler);
  }

  // 监听currentEditingForm改变的信息
  public onCurrentEditingFormChange(handler: (currentEditingForm: CurrentEditingFormType | undefined) => void) {
    return this.onMessage(CommunicateType.currentEditingForm, handler);
  }
  // 监听section schema配置项改变的信息
  public onAllSectionSchemaChange(handler: (data: Record<SectionTypeEnum, SectionSchemaStruct>) => void) {
    return this.onMessage(CommunicateListenerType.onAllSectionSchemaChange, handler);
  }
  // 监听整个section config data改变
  public onSectionConfigData(handler: (data: SectionConfigDataStruct) => void) {
    return this.onMessage(CommunicateType.sectionConfigData, handler);
  }
  // 监听section schema多语言语料改变的消息
  public onSectionSchemaLanguage(handler: (data: { i18nKey: LanguageEnum; locales: any }) => void) {
    return this.onMessage(CommunicateListenerType.onSectionSchemaLanguage, handler);
  }
  private offMessage(type: string, handler: (data: any) => void): void {
    if (!this.eventListeners.has(type)) return;

    const handlers = this.eventListeners.get(type);
    if (handlers) {
      const index = handlers.indexOf(handler);
      if (index !== -1) {
        handlers.splice(index, 1);
      }
    }
  }
}

const iframeCommunicator = new FrameCommunicator();

export default iframeCommunicator;
