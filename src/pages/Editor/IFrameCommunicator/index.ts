import { SectionConfigDataStruct, SectionConfigSchema, SectionSchemaStruct } from '@/types/editor';
import { resolvablePromise } from '@/utils/resolve';

import { CommunicateListenerType, CommunicateType } from './type';

class FrameCommunicator {
  private origin: string;
  private iframeWindowPromise: any;
  private eventListeners = new Map<string, ((data: any) => void)[]>();
  constructor() {
    this.origin = location.host.includes('localhost') ? '' : 'https://lizuncong.github.io"';
    this.iframeWindowPromise = resolvablePromise();
  }
  public initFrameWindow(iframeWindow: Window | null = null) {
    this.iframeWindowPromise.resolve(iframeWindow);
    // 初始化监听iframe的消息
    const listener = (event: { origin: string; data: any }) => {
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

    iframeWindow.postMessage(message, this.origin);
  }

  // sectionConfigData的order发生了改变
  public notifySectionConfigOrderChange(order: string[]) {
    this.sendMessage(CommunicateType.order, order);
  }
  // sectionConfigData的sections发生了改变
  public notifySectionConfigSectionsChange(sections: Record<string, SectionConfigSchema | undefined>) {
    this.sendMessage(CommunicateType.sections, sections);
  }

  // sectionConfigData的某个section发生了改变
  public notifySectionConfigSectionChange(sectionId: string, section: SectionConfigSchema | undefined) {
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
  public onSectionConfigOrderChange(handler: (order: string[]) => void) {
    return this.onMessage(CommunicateType.order, handler);
  }
  // 监听sectionConfigData的sections发生的改变
  public onSectionConfigSectionsChange(handler: (data: Record<string, SectionConfigSchema | undefined>) => void) {
    return this.onMessage(CommunicateType.sections, handler);
  }

  // 监听sectionConfigData的某个section发生了改变
  public onSectionConfigSectionChange(handler: (data: { sectionId: string; section: SectionConfigSchema }) => void) {
    return this.onMessage(CommunicateType.section, handler);
  }

  // 监听section schema配置项改变的信息
  public onAllSectionSchemaChange(handler: (data: Record<string, SectionSchemaStruct>) => void) {
    return this.onMessage(CommunicateListenerType.onAllSectionSchemaChange, handler);
  }
  // 监听整个section config data改变
  public onSectionConfigData(handler: (data: SectionConfigDataStruct) => void) {
    return this.onMessage(CommunicateType.sectionConfigData, handler);
  }
  // 监听section schema多语言语料改变的消息
  public onSectionSchemaLanguage(handler: (data: { i18nKey: string; locales: any }) => void) {
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
