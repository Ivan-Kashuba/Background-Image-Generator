import { Button } from "@/shared/ui";
import type { BackgroundItemType } from "@/features/avatar-background/types";
import { cn } from "@/shared/utils/cn";
import { AvatarBackgroundGeneratingCard } from "./AvatarBackgroundGeneratingCard";
import { Chip } from "@/shared/ui/Chip";

type BackgroundCardPropsType = {
  readonly background: BackgroundItemType;
  readonly isSelected: boolean;
  readonly onSelect: (id: string) => void;
};

export const AvatarBackgroundCard = ({
  background,
  isSelected,
  onSelect,
}: BackgroundCardPropsType) => {
  const { id, thumbnailUrl, isDefault, isGenerating, progress, estimatedTime } =
    background;

  const handleSelect = () => {
    onSelect(id);
  };

  if (isGenerating) {
    return (
      <AvatarBackgroundGeneratingCard
        progress={progress}
        estimatedTime={estimatedTime}
      />
    );
  }

  const cardClasses = cn(
    "p-0 hover:bg-transparent focus-visible:outline-none",
    "relative aspect-[112/198] h-auto w-full overflow-hidden rounded-[12px] border-2 border-transparent",
    isSelected && "border-2 border-black rounded-[16px]"
  );

  return (
    <Button
      onClick={handleSelect}
      variant="ghost"
      className={cardClasses}
    >
      <img
        src={thumbnailUrl}
        alt="Background option"
        className="size-full object-cover"
      />

      {isDefault && (
        <Chip>default</Chip>
      )}
    </Button>
  );
};
