import { Icon, Button } from "@/shared/ui";

type GenerateButtonPropsType = {
  readonly isDisabled: boolean;
  readonly onGenerate: () => void;
};

export const AvatarBackgroundGenerateButton = ({
  isDisabled,
  onGenerate,
}: GenerateButtonPropsType) => {
  return (
    <Button
      onClick={onGenerate}
      disabled={isDisabled}
      aria-label="Generate background"
      variant="primary"
      className="h-[48px] w-full rounded-[100px] text-[14px] font-semibold leading-[0.8]"
    >
      <Icon name="ai-small" className="h-[13px] w-[12px]" />
      <span>Generate background</span>
    </Button>
  );
};
