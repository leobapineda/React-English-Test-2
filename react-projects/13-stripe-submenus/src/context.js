import React, { useState, useContext, useEffect, createContext } from "react";
import sublinks from "./data";

export const GlobalContext = createContext();

// custom hook
export function useGlobalContext() {
  return useContext(GlobalContext);
}

export function ContextProvider({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [submenuLinks, setSubmenuLinks] = useState({ page: "", links: [] });
  const [position, setPosition] = useState({})

  function openSidebar() {
    setIsSidebarOpen(true);
  }

  function closeSidebar() {
    setIsSidebarOpen(false);
  }

  function openSubmenu(page, coordenadas) {
    const newLinks = sublinks.find((link) => link.page === page);
    setSubmenuLinks(newLinks);
    setPosition(coordenadas);
    setIsSubmenuOpen(true);
  }
  function closeSubmenu() {
    setIsSubmenuOpen(false);
  }
  return (
    <>
      <GlobalContext.Provider
        value={{
          isSidebarOpen,
          isSubmenuOpen,
          openSidebar,
          closeSidebar,
          openSubmenu,
          closeSubmenu,
          submenuLinks,
          position,
        }}
      >
        {children}
      </GlobalContext.Provider>
    </>
  );
}

export default ContextProvider;
