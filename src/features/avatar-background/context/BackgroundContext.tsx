import {
  createContext,
  useState,
  useCallback,
  type ReactNode,
} from "react";
import { INITIAL_BACKGROUNDS } from "@/features/avatar-background/mocks";
import type { BackgroundItemType } from "@/features/avatar-background/types";

type BackgroundContextValueType = {
  backgrounds: BackgroundItemType[];
  selectedBackgroundId: string | null;
  isOpen: boolean;
  isGenerating: boolean;
  generationProgress: number;
  toggleSidebar: (open: boolean) => void;
  selectBackground: (id: string) => void;
  generateBackground: () => Promise<void>;
};

export const BackgroundContext = createContext<BackgroundContextValueType | null>(null);

export type { BackgroundContextValueType };

type BackgroundProviderPropsType = {
  children: ReactNode;
};

const pickRandomBackground = (): BackgroundItemType => {
  const randomIndex = Math.floor(Math.random() * INITIAL_BACKGROUNDS.length);
  return INITIAL_BACKGROUNDS[randomIndex];
};

const calculateProgressStep = (totalDuration: number, updateInterval: number): number => {
  return 100 / (totalDuration / updateInterval);
};

export const BackgroundProvider = ({ children }: BackgroundProviderPropsType) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const [backgrounds, setBackgrounds] = useState<BackgroundItemType[]>(INITIAL_BACKGROUNDS);
  const [selectedBackgroundId, setSelectedBackgroundId] = useState<string | null>("bg-1");
  
  const [isGenerating, setIsGenerating] = useState(false);
  const [generationProgress, setGenerationProgress] = useState(0);

  const selectBackground = useCallback((id: string) => {
    setSelectedBackgroundId(id);
  }, []);

  const toggleSidebar = useCallback((open: boolean) => {
    setIsOpen(open);
  }, []);

  const generateBackground = useCallback(async () => {
    const GENERATION_DURATION = 2000;
    const UPDATE_INTERVAL = 50;
    const progressStep = calculateProgressStep(GENERATION_DURATION, UPDATE_INTERVAL);

    setIsGenerating(true);
    setGenerationProgress(0);

    let accumulatedProgress = 0;

    const intervalId = setInterval(() => {
      accumulatedProgress += progressStep;
      const clampedProgress = Math.min(100, accumulatedProgress);
      setGenerationProgress(clampedProgress);
    }, UPDATE_INTERVAL);

    try {
      await new Promise((resolve) => setTimeout(resolve, GENERATION_DURATION));

      clearInterval(intervalId);

      const randomBackground = pickRandomBackground();
      const generatedBackground: BackgroundItemType = {
        id: `bg-generated-${Date.now()}`,
        thumbnailUrl: randomBackground.thumbnailUrl,
      };

      setBackgrounds((current) => [generatedBackground, ...current]);
      setGenerationProgress(100);
    } catch {
      clearInterval(intervalId);
      setGenerationProgress(0);
    } finally {
      setIsGenerating(false);
    }
  }, []);

  const contextValue: BackgroundContextValueType = {
    backgrounds,
    selectedBackgroundId,
    isOpen,
    isGenerating,
    generationProgress,
    toggleSidebar,
    selectBackground,
    generateBackground,
  };

  return (
    <BackgroundContext.Provider value={contextValue}>
      {children}
    </BackgroundContext.Provider>
  );
};
