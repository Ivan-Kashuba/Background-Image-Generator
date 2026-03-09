import { AvatarBackgroundCard } from "@/features/avatar-background/ui/AvatarBackgroundCard";
import { useAvatarGenerator } from "@/features/avatar-background/hooks";
import type { BackgroundItemType } from "@/features/avatar-background/types";

export const AvatarBackgroundGrid = () => {
  const {
    backgrounds,
    selectedBackgroundId,
    handleSelectBackground,
    isGenerating,
    generationProgress,
  } = useAvatarGenerator();

  const getEstimatedTime = (): string => {
    if (!isGenerating) return "";
    return generationProgress < 50 ? "1 minute left" : "30 seconds left";
  };

  const createLoadingCard = (): BackgroundItemType | null => {
    if (!isGenerating) return null;

    return {
      id: "loading",
      thumbnailUrl: "",
      isGenerating: true,
      progress: Math.round(generationProgress),
      estimatedTime: getEstimatedTime(),
    };
  };

  const loadingCard = createLoadingCard();
  const displayBackgrounds = loadingCard
    ? [loadingCard, ...backgrounds]
    : backgrounds;

  return (
    <section aria-label="Your backgrounds">
      <h3 className="mb-3 text-[14px] font-semibold leading-[1.2] text-black">
        Your backgrounds
      </h3>

      <div className="grid grid-cols-3 gap-3 pb-5">
        {displayBackgrounds.map((background) => (
          <AvatarBackgroundCard
            key={background.id}
            background={background}
            isSelected={selectedBackgroundId === background.id}
            onSelect={handleSelectBackground}
          />
        ))}
      </div>
    </section>
  );
};
