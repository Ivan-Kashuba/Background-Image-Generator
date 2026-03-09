import type { ReactNode } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { cn } from "@/shared/utils/cn";

type SidebarPropsType = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: ReactNode;
};

export const Sidebar = ({ open, onOpenChange, children }: SidebarPropsType) => {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      {children}
    </Dialog.Root>
  );
};

type SidebarTriggerPropsType = {
  children: ReactNode;
  asChild?: boolean;
};

export const SidebarTrigger = ({ children, asChild }: SidebarTriggerPropsType) => {
  return <Dialog.Trigger asChild={asChild}>{children}</Dialog.Trigger>;
};

type SidebarContentPropsType = {
  children: ReactNode;
  className?: string;
};

export const SidebarContent = ({ children, className }: SidebarContentPropsType) => {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 z-50 bg-black/40 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 duration-200" />
      <Dialog.Content
        className={cn(
          "fixed right-0 top-0 z-50 h-full w-full bg-white shadow-sidebar sm:w-[400px]",
          "data-[state=open]:animate-in data-[state=closed]:animate-out",
          "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right",
          "duration-300 ease-out",
          className
        )}
      >
        {children}
      </Dialog.Content>
    </Dialog.Portal>
  );
};

export const SidebarTitle = Dialog.Title;
export const SidebarDescription = Dialog.Description;
