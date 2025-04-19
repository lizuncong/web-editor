import { useCallback, useRef } from 'react';

import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { changeEditorState, updateSectionConfigData } from '@/store/reducer/editor';
import {
  BlockId,
  CurrentEditingFormType,
  SectionBlockConfigSchema,
  SectionConfigDataStruct,
  SectionConfigSchema,
  SectionId,
  ThemePresetType,
} from '@/types/section';

import iframeCommunicator from '../IFrameCommunicator';

// 更新配置项的信息
export const useUpdateConfigData = () => {
  const dispatch = useAppDispatch();
  const sectionConfigData = useAppSelector((state) => state.editor.sectionConfigData);
  const sectionConfigDataRef = useRef(sectionConfigData);
  sectionConfigDataRef.current = sectionConfigData;

  const updateThemeConfig = useCallback(
    (themeConfig: ThemePresetType | undefined, shouldNotifyIframe = true) => {
      dispatch(
        changeEditorState({
          themeConfig,
        }),
      );
      if (shouldNotifyIframe) {
        iframeCommunicator.notifyThemeConfigChange(themeConfig);
      }
    },
    [dispatch],
  );
  const updateCurrentEditingForm = useCallback(
    (currentEditingForm: CurrentEditingFormType | undefined, shouldNotifyIframe = true) => {
      dispatch(
        changeEditorState({
          currentEditingForm,
        }),
      );
      if (shouldNotifyIframe) {
        iframeCommunicator.notifyCurrentEditingFormChange(currentEditingForm);
      }
    },
    [dispatch],
  );

  const updateSectionConfigOrder = useCallback(
    (newOrder: SectionId[], shouldNotifyIframe = true) => {
      dispatch(
        updateSectionConfigData({
          ...sectionConfigDataRef.current,
          order: newOrder,
        }),
      );
      if (shouldNotifyIframe) {
        iframeCommunicator.notifySectionConfigOrderChange(newOrder);
      }
    },
    [dispatch],
  );

  const updateAllSectionConfigData = useCallback(
    (configData: SectionConfigDataStruct, shouldNotifyIframe = true) => {
      dispatch(updateSectionConfigData(configData));
      if (shouldNotifyIframe) {
        iframeCommunicator.notifySectionConfigDataChange(configData);
      }
    },
    [dispatch],
  );

  const updateSectionConfigSections = useCallback(
    (sections: Record<SectionId, SectionConfigSchema | undefined>, shouldNotifyIframe = true) => {
      dispatch(
        updateSectionConfigData({
          ...sectionConfigDataRef.current,
          sections: sections,
        }),
      );
      if (shouldNotifyIframe) {
        iframeCommunicator.notifySectionConfigSectionsChange(sections);
      }
    },
    [dispatch],
  );

  const updateSectionConfigSectionBySectionId = useCallback(
    (sectionId: SectionId, section: SectionConfigSchema | undefined, shouldNotifyIframe = true) => {
      const newV = {
        ...sectionConfigDataRef.current,
        sections: {
          ...sectionConfigDataRef.current.sections,
          [sectionId]: section,
        },
      };
      dispatch(updateSectionConfigData(newV));
      if (shouldNotifyIframe) {
        iframeCommunicator.notifySectionConfigSectionChange(sectionId, section);
      }
    },
    [dispatch],
  );
  const updateBlockOrderData = useCallback(
    (sectionId: SectionId, newOrder: BlockId[]) => {
      const allSectionConfigData = sectionConfigDataRef.current;
      const currentSectionConfigData = allSectionConfigData.sections[sectionId]!;
      const newSectionConfigData: SectionConfigSchema = {
        ...currentSectionConfigData,
        settingsData: {
          ...currentSectionConfigData.settingsData,
          block_order: newOrder,
        },
      };
      updateSectionConfigSectionBySectionId(sectionId, newSectionConfigData);
    },
    [updateSectionConfigSectionBySectionId],
  );
  const updateBlockConfigData = useCallback(
    (sectionId: SectionId, blockId: BlockId, newBlock: SectionBlockConfigSchema | undefined) => {
      const allSectionConfigData = sectionConfigDataRef.current;
      const currentSectionConfigData = allSectionConfigData.sections[sectionId]!;
      const newSectionConfigData: SectionConfigSchema = {
        ...currentSectionConfigData,
        settingsData: {
          ...currentSectionConfigData.settingsData,
          blocks: {
            ...currentSectionConfigData.settingsData.blocks,
          },
        },
      };
      if (!newBlock) {
        newSectionConfigData.settingsData.block_order = newSectionConfigData.settingsData.block_order.filter(
          (blockid) => blockid !== blockId,
        );
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        newSectionConfigData.settingsData.blocks[blockId] = undefined;
      } else {
        newSectionConfigData.settingsData.blocks[blockId] = newBlock;
      }

      updateSectionConfigSectionBySectionId(sectionId, newSectionConfigData);
    },
    [updateSectionConfigSectionBySectionId],
  );

  return {
    updateSectionConfigOrder,
    updateSectionConfigSections,
    updateSectionConfigSectionBySectionId,
    updateAllSectionConfigData,
    updateCurrentEditingForm,
    updateBlockConfigData,
    updateBlockOrderData,
    updateThemeConfig,
  };
};
