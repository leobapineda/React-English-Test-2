import React, { useState, useContext, createContext } from "react";

export const GlobalContext = createContext();

// custom hook
export function useGetContext() {
  return useContext(GlobalContext);
}

function ContextProvider({ children }) {
  const [modalState, setModalState] = useState(false);
  const [sidebarState, setSidebarState] = useState(false);

  function OpenModal() {
    setModalState(true);
  }
  function CloseModal() {
    setModalState(false);
  }

   function OpenSidebar() {
     setSidebarState(true);
   }
   function CloseSidebar() {
     setSidebarState(false);
   }
   
   console.log("ContextProvider");
  return (
    <GlobalContext.Provider
      value={{
        modalState,
        sidebarState,
        OpenModal,
        CloseModal,
        OpenSidebar,
        CloseSidebar,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
export default ContextProvider;

// sidebar true
// no poder dar click a modal
