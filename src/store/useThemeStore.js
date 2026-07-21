import { create } from "zustand";

const useThemeStore = create((set) => ({
  theme: localStorage.getItem("nevin-portfolio-theme") || "luxury",
  setTheme: (theme) => {
    localStorage.setItem("nevin-portfolio-theme", theme);
    set({ theme });
  },
}));

export default useThemeStore;