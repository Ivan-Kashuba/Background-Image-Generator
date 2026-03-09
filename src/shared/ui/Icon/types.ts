import type { ICON_NAMES } from "./constants";

export type IconNameType = (typeof ICON_NAMES)[keyof typeof ICON_NAMES];
