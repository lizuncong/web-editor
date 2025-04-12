import { memo } from 'react';

import { useAppSelector } from '@/store/hooks';

interface CompBlockProps {
  sectionId: string;
}
const CompBlock = memo((props: CompBlockProps) => {
  const { sectionId } = props;
  const allSectionConfigData = useAppSelector((state) => state.editor.sectionConfigData);
  const allSectionSchema = useAppSelector((state) => state.editor.allSectionSchema);
  const currentSectionConfigData = allSectionConfigData.sections[sectionId];
  const currentSectionSchema = allSectionSchema[currentSectionConfigData.type];
  return <div>{currentSectionSchema.name}</div>;
});

export default CompBlock;
