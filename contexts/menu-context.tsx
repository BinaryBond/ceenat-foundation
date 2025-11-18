"use client";

import { createContext, useContext, useState } from "react";

interface MenuContextType {
  isOpened: boolean;
  setIsOpened: (value: boolean) => void;
}

const MenuContext = createContext<MenuContextType | undefined>(undefined);

export const MenuProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <MenuContext.Provider value={{ isOpened, setIsOpened }}>
      {children}
    </MenuContext.Provider>
  );
};

export const useMenu = () => {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error("useMenu must be used within a MenuProvider");
  }
  return context;
};
