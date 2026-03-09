import { Sidebar, SidebarContent, SidebarDescription } from "@/shared/ui";
import { AvatarBackgroundGenerateButton } from "@/features/avatar-background/ui/AvatarBackgroundGenerateButton";
import { AvatarBackgroundGrid } from "@/features/avatar-background/ui/AvatarBackgroundGrid";
import { AvatarBackgroundHeader } from "@/features/avatar-background/ui/AvatarBackgroundHeader";
import { AvatarBackgroundPrompt } from "@/features/avatar-background/ui/AvatarBackgroundPrompt";
import { useAvatarGenerator } from "@/features/avatar-background/hooks";

export const AvatarBackgroundSidebar = () => {
  const {
    isOpen,
    isGenerateDisabled,
    handleCloseSidebar,
    handleGenerate,
  } = useAvatarGenerator();

  return (
    <Sidebar open={isOpen} onOpenChange={(open) => !open && handleCloseSidebar()}>
      <SidebarContent className="flex w-full flex-col overflow-hidden p-0 sm:w-[400px]">
        <div className="px-5 pb-6 pt-8">
          <AvatarBackgroundHeader
            title="Change background"
            onClose={handleCloseSidebar}
          />
        </div>
        <SidebarDescription className="sr-only">
          Generate and select avatar backgrounds
        </SidebarDescription>

        <div className="flex flex-1 flex-col overflow-y-auto px-5">
          <AvatarBackgroundPrompt
            isGenerateDisabled={isGenerateDisabled}
            onGenerate={handleGenerate}
          />
          <div className="pt-6">
            <AvatarBackgroundGenerateButton
              isDisabled={isGenerateDisabled}
              onGenerate={handleGenerate}
            />
          </div>
          <div className="pt-[40px]">
            <AvatarBackgroundGrid />
          </div>
        </div>
      </SidebarContent>
    </Sidebar>
  );
};
