import { useContext } from "react";
import { BackgroundContext, type BackgroundContextValueType } from "./BackgroundContext";

export const useBackground = (): BackgroundContextValueType => {
  const context = useContext(BackgroundContext);
  if (!context) {
    throw new Error("useBackground must be used within BackgroundProvider");
  }
  return context;
};
