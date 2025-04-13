import { useCallback, useRef } from 'react';

import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { updateSectionConfigData } from '@/store/reducer/editor';
import { SectionConfigDataStruct, SectionConfigSchema } from '@/types/editor';

import iframeCommunicator from '../IFrameCommunicator';

// 更新配置项的信息
export const useUpdateConfigData = () => {
  const dispatch = useAppDispatch();
  const sectionConfigData = useAppSelector((state) => state.editor.sectionConfigData);
  const sectionConfigDataRef = useRef(sectionConfigData);
  sectionConfigDataRef.current = sectionConfigData;

  const updateSectionConfigOrder = useCallback(
    (newOrder: string[], shouldNotifyIframe = true) => {
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
    (sections: Record<string, SectionConfigSchema | undefined>, shouldNotifyIframe = true) => {
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
    (sectionId: string, section: SectionConfigSchema | undefined, shouldNotifyIframe = true) => {
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

  return {
    updateSectionConfigOrder,
    updateSectionConfigSections,
    updateSectionConfigSectionBySectionId,
    updateAllSectionConfigData,
  };
};
