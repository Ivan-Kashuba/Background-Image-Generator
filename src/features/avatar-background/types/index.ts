export type BackgroundItemType = {
  readonly id: string;
  readonly thumbnailUrl: string;
  readonly isDefault?: boolean;
  readonly isGenerating?: boolean;
  readonly progress?: number;
  readonly estimatedTime?: string;
};

export type BackgroundStateType = {
  readonly backgrounds: BackgroundItemType[];
  readonly selectedBackgroundId: string | null;
  readonly isOpen: boolean;
  readonly isGenerating: boolean;
  readonly generationProgress: number;
};

export type BackgroundStoreType = BackgroundStateType & {
  toggleSidebar: (open: boolean) => void;
  selectBackground: (id: string) => void;
  generateBackground: () => Promise<void>;
};
