import i18n from 'i18next'; // 确保你已经初始化了i18n
import { useEffect } from 'react';

import { isDev } from '@/constant';
import { defaultNs } from '@/i18n';
import { useAppDispatch } from '@/store/hooks';
import { changeEditorState } from '@/store/reducer/editor';
import { SectionConfigDataStruct, SectionConfigSchema, SectionSchemaStruct } from '@/types/editor';

import iframeCommunicator from '../IFrameCommunicator';
import { useUpdateConfigData } from './useUpdateConfigDataAndNotify';

export const useListenerMsgFromIframe = () => {
  const dispatch = useAppDispatch();
  const {
    updateSectionConfigOrder,
    updateSectionConfigSections,
    updateSectionConfigSectionBySectionId,
    updateAllSectionConfigData,
  } = useUpdateConfigData();
  useEffect(() => {
    // 监听section schema配置项协议改变的信息
    const offAllSectionSchemaChange = iframeCommunicator.onAllSectionSchemaChange(
      (data: Record<string, SectionSchemaStruct>) => {
        dispatch(
          changeEditorState({
            allSectionSchema: data,
          }),
        );
      },
    );
    // 监听整个section config data改变
    const offSectionConfigData = iframeCommunicator.onSectionConfigData((data: SectionConfigDataStruct) => {
      updateAllSectionConfigData(data, false);
    });

    // 监听sectionConfigData的order发生的改变
    const offSectionConfigOrderChange = iframeCommunicator.onSectionConfigOrderChange((order: string[]) => {
      updateSectionConfigOrder(order, false);
    });

    // 监听sectionConfigData的某个section发生了改变
    const offSectionConfigSectionChange = iframeCommunicator.onSectionConfigSectionChange(
      ({ sectionId, section }: { sectionId: string; section: SectionConfigSchema }) => {
        updateSectionConfigSectionBySectionId(sectionId, section, false);
      },
    );

    // 监听sectionConfigData的sections发生的改变
    const offSectionConfigSectionsChange = iframeCommunicator.onSectionConfigSectionsChange(
      (data: Record<string, SectionConfigSchema | undefined>) => {
        updateSectionConfigSections(data, false);
      },
    );
    // 监听section schema多语言语料改变的消息
    const offSectionSchemaLanguage = iframeCommunicator.onSectionSchemaLanguage(
      (data: { i18nKey: string; locales: any }) => {
        i18n.addResourceBundle(data.i18nKey, defaultNs, data.locales, true, true);
        if (!isDev()) {
          // 线上多语言貌似没更新
          i18n.changeLanguage('en');
          setTimeout(() => {
            i18n.changeLanguage(data.i18nKey);
          }, 10);
        }
      },
    );
    return () => {
      offAllSectionSchemaChange();
      offSectionConfigData();
      offSectionConfigOrderChange();
      offSectionConfigSectionChange();
      offSectionConfigSectionsChange();
      offSectionSchemaLanguage();
    };
  }, [
    dispatch,
    updateAllSectionConfigData,
    updateSectionConfigOrder,
    updateSectionConfigSectionBySectionId,
    updateSectionConfigSections,
  ]);
};
