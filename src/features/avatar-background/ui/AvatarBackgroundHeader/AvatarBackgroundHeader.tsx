import { X } from "lucide-react";
import { SidebarTitle, IconButton } from "@/shared/ui";

type SidebarHeaderPropsType = {
  readonly title: string;
  readonly onClose: () => void;
};

export const AvatarBackgroundHeader = ({ title, onClose }: SidebarHeaderPropsType) => {
  return (
    <header className="flex items-center justify-between">
      <SidebarTitle className="font-italian text-[22px] font-bold leading-[1.2] text-black">
        {title}
      </SidebarTitle>
      <IconButton
        onClick={onClose}
        aria-label="Close sidebar"
        className="flex size-6 items-center justify-center transition-opacity hover:opacity-70"
      >
        <X className="size-6 text-black" strokeWidth={1.5} />
      </IconButton>
    </header>
  );
};
