import { useCallback, useMemo } from "react";
import { useBackground } from "@/features/avatar-background/context";

export const useAvatarGenerator = () => {
  const context = useBackground();

  const {
    backgrounds,
    selectedBackgroundId,
    isOpen,
    isGenerating,
    generationProgress,
    toggleSidebar,
    selectBackground,
    generateBackground,
  } = context;

  const isGenerateDisabled = useMemo(
    () => isGenerating,
    [isGenerating]
  );

  const handleOpenSidebar = useCallback(() => {
    toggleSidebar(true);
  }, [toggleSidebar]);

  const handleCloseSidebar = useCallback(() => {
    toggleSidebar(false);
  }, [toggleSidebar]);

  const handleSelectBackground = useCallback(
    (id: string) => {
      selectBackground(id);
    },
    [selectBackground]
  );

  const handleGenerate = useCallback(() => {
    if (isGenerateDisabled) return;
    generateBackground();
  }, [generateBackground, isGenerateDisabled]);

  return {
    backgrounds,
    selectedBackgroundId,
    isOpen,
    isGenerating,
    generationProgress,
    isGenerateDisabled,
    handleOpenSidebar,
    handleCloseSidebar,
    handleSelectBackground,
    handleGenerate,
  } as const;
};

export type UseAvatarGeneratorReturnType = ReturnType<typeof useAvatarGenerator>;
