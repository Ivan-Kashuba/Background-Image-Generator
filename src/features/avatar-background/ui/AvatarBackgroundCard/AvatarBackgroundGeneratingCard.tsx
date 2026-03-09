type AvatarBackgroundGeneratingCardPropsType = {
  readonly progress?: number;
  readonly estimatedTime?: string;
};

export const AvatarBackgroundGeneratingCard = ({
  progress,
  estimatedTime,
}: AvatarBackgroundGeneratingCardPropsType) => {
  const displayProgress = progress || 0;
  const progressCircumference = (displayProgress * 1.005).toFixed(2);

  return (
    <div className="relative aspect-[112/198] w-full overflow-hidden rounded-[12px] bg-black">
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <div className="relative size-[65px]">
          <svg className="size-full -rotate-90" viewBox="0 0 36 36">
            <circle
              cx="18"
              cy="18"
              r="16"
              className="opacity-20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
            <circle
              cx="18"
              cy="18"
              r="16"
              fill="none"
              stroke="#10B981"
              strokeWidth="2"
              strokeDasharray={`${progressCircumference} 100`}
              strokeLinecap="round"
            />
          </svg>
          <span className="absolute inset-0 flex items-center justify-center text-[14px] font-medium">
            {displayProgress}%
          </span>
        </div>
      </div>
      {estimatedTime && (
        <span className="absolute bottom-4 left-0 right-0 text-center text-[12px] font-semibold text-white">
          {estimatedTime}
        </span>
      )}
    </div>
  );
};
