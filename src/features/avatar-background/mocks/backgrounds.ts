import { BASE_URL } from "@/shared/constants";
import type { BackgroundItemType } from "@/features/avatar-background/types";

export const INITIAL_BACKGROUNDS: BackgroundItemType[] = [
  {
    id: "bg-1",
    thumbnailUrl: `${BASE_URL}images/background-1.jpg`,
    isDefault: true,
  },
  {
    id: "bg-2",
    thumbnailUrl: `${BASE_URL}images/background-2.jpg`,
  },
  {
    id: "bg-3",
    thumbnailUrl: `${BASE_URL}images/background-3.jpg`,
  },
  {
    id: "bg-4",
    thumbnailUrl: `${BASE_URL}images/background-4.jpg`,
  },
  {
    id: "bg-5",
    thumbnailUrl: `${BASE_URL}images/background-5.jpg`,
  },
];
