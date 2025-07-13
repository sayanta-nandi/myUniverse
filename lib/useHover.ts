import { create } from "zustand";

type HoverState = {
  isHovered: boolean;
  setIsHovered: (isHovered: boolean) => void;
};

export const useHover = create<HoverState>((set) => ({
  isHovered: false,
  setIsHovered: (isHovered: boolean) => set({ isHovered }),
}));
