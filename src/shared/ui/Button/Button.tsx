import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "@/shared/utils/cn";
import { BUTTON_VARIANT_STYLES, BUTTON_SIZE_STYLES } from "./constants";
import type { ButtonVariantType, ButtonSizeType } from "./types";

type ButtonPropsType = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariantType;
  size?: ButtonSizeType;
};

export const Button = forwardRef<HTMLButtonElement, ButtonPropsType>(
  (
    { className, variant = "primary", size = "md", disabled, ...props },
    ref
  ) => {
    return (
      <button
        ref={ref}
        disabled={disabled}
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-colors",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
          "disabled:pointer-events-none disabled:opacity-50",
          BUTTON_VARIANT_STYLES[variant],
          BUTTON_SIZE_STYLES[size],
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
