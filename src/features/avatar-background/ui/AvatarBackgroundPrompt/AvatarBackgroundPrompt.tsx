import { Icon } from "@/shared/ui";
import { cn } from "@/shared/utils/cn";

type AvatarBackgroundPromptPropsType = {
  readonly isGenerateDisabled: boolean;
  readonly onGenerate: () => void;
};

export const AvatarBackgroundPrompt = ({
  isGenerateDisabled,
  onGenerate,
}: AvatarBackgroundPromptPropsType) => {
  const textareaClasses = "h-full w-full resize-none border-0 bg-transparent text-[14px] font-medium leading-[1.4] text-black placeholder:text-gray-mid focus:outline-none";

  const buttonBaseClasses = "flex items-center justify-center overflow-hidden rounded-[10px] bg-white p-[7px]";

  const regenerateButtonClasses = cn(
    "inline-flex h-[34px] items-center gap-1 rounded-[10px] py-[7px] pl-[7px] pr-3 text-[12px] font-semibold text-black transition-colors",
    isGenerateDisabled
      ? "cursor-not-allowed opacity-50"
      : "hover:bg-gray-light"
  );

  return (
    <section className="flex flex-col gap-3">
      <h3 className="text-[14px] font-semibold leading-[1.2] text-black">
        Background idea
      </h3>

      <div className="overflow-hidden rounded-[12px] border border-gray-light bg-white">
        <div className="h-[116px] px-4 pt-4">
          <textarea
            placeholder="Describe your background idea..."
            aria-label="Background idea"
            className={textareaClasses}
          />
        </div>

        <div className="flex h-[63px] items-center justify-between bg-gradient-to-t from-white from-[70%] to-transparent pb-[9px] pl-[9px] pr-4 pt-5">
          <button
            type="button"
            aria-label="Regenerate prompt"
            className={regenerateButtonClasses}
            onClick={onGenerate}
            disabled={isGenerateDisabled}
          >
            <Icon name="ai" className="h-[18px] w-[18px]" />
            <span>Regenerate</span>
          </button>

          <div className="flex items-center gap-2 pl-2">
            <button
              type="button"
              aria-label="Undo"
              className={buttonBaseClasses}
            >
              <Icon name="action-back" className="size-5" />
            </button>
            <button
              type="button"
              aria-label="Redo"
              className={buttonBaseClasses}
            >
              <Icon name="action-next" className="size-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
