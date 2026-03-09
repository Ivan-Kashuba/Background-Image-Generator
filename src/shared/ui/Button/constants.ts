import type { ButtonVariantType, ButtonSizeType } from "./types";

export const BUTTON_VARIANT_STYLES: Record<ButtonVariantType, string> = {
  primary: "bg-primary text-primary-foreground hover:bg-primary/90",
  secondary: "bg-muted text-foreground hover:bg-muted/80",
  ghost: "hover:bg-muted",
};

export const BUTTON_SIZE_STYLES: Record<ButtonSizeType, string> = {
  sm: "h-8 px-3 text-sm",
  md: "h-10 px-4",
  lg: "h-12 px-6 text-lg",
};
