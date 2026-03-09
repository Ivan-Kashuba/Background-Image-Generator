import { type SVGProps } from "react";
import { ICON_NAMES } from "./constants";
import { AiIcon, AiSmallIcon, ActionBackIcon, ActionNextIcon } from "./icons";
import type { IconNameType } from "./types";

type IconPropsType = SVGProps<SVGSVGElement> & {
  name: IconNameType;
  className?: string;
};

const icons: Record<IconNameType, (props: SVGProps<SVGSVGElement>) => JSX.Element> = {
  [ICON_NAMES.AI]: AiIcon,
  [ICON_NAMES.AI_SMALL]: AiSmallIcon,
  [ICON_NAMES.ACTION_BACK]: ActionBackIcon,
  [ICON_NAMES.ACTION_NEXT]: ActionNextIcon,
};

export const Icon = ({ name, className, ...props }: IconPropsType) => {
  const IconComponent = icons[name];

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found`);
    return null;
  }

  return <IconComponent className={className} {...props} />;
};
