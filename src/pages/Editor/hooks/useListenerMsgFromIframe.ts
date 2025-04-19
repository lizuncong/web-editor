import i18n from 'i18next'; // 确保你已经初始化了i18n
import { useEffect } from 'react';

import { defaultNs } from '@/i18n';
import { useAppDispatch } from '@/store/hooks';
import { changeEditorState } from '@/store/reducer/editor';

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
    // 监听currentEditingForm改变的信息
    const offCurrentEditingFormChange = iframeCommunicator.onCurrentEditingFormChange((data) => {
      dispatch(
        changeEditorState({
          currentEditingForm: data,
        }),
      );
    });
    // 监听section schema配置项协议改变的信息
    const offAllSectionSchemaChange = iframeCommunicator.onAllSectionSchemaChange((data) => {
      dispatch(
        changeEditorState({
          allSectionSchema: data,
        }),
      );
    });
    // 监听整个section config data改变
    const offSectionConfigData = iframeCommunicator.onSectionConfigData((data) => {
      updateAllSectionConfigData(data, false);
    });

    // 监听sectionConfigData的order发生的改变
    const offSectionConfigOrderChange = iframeCommunicator.onSectionConfigOrderChange((order) => {
      updateSectionConfigOrder(order, false);
    });

    // 监听sectionConfigData的某个section发生了改变
    const offSectionConfigSectionChange = iframeCommunicator.onSectionConfigSectionChange(({ sectionId, section }) => {
      updateSectionConfigSectionBySectionId(sectionId, section, false);
    });

    // 监听sectionConfigData的sections发生的改变
    const offSectionConfigSectionsChange = iframeCommunicator.onSectionConfigSectionsChange((data) => {
      updateSectionConfigSections(data, false);
    });
    // 监听section schema多语言语料改变的消息
    const offSectionSchemaLanguage = iframeCommunicator.onSectionSchemaLanguage((data) => {
      i18n.addResourceBundle(data.i18nKey, defaultNs, data.locales, true, true);
      i18n.changeLanguage(data.i18nKey);
      // setTimeout(() => {
      //   i18n.changeLanguage(data.i18nKey);
      // }, 10);
    });
    return () => {
      offAllSectionSchemaChange();
      offSectionConfigData();
      offSectionConfigOrderChange();
      offSectionConfigSectionChange();
      offSectionConfigSectionsChange();
      offSectionSchemaLanguage();
      offCurrentEditingFormChange();
    };
  }, [
    dispatch,
    updateAllSectionConfigData,
    updateSectionConfigOrder,
    updateSectionConfigSectionBySectionId,
    updateSectionConfigSections,
  ]);
};
