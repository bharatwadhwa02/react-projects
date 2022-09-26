import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showSidebar = () => {
    setIsSidebarOpen(true);
  };
  const hideSidebar = () => {
    setIsSidebarOpen(false);
  };
  const showModal = () => {
    setIsModalOpen(true);
  };
  const hideModal = () => {
    setIsModalOpen(false);
  };
  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        isModalOpen,
        showSidebar,
        hideSidebar,
        showModal,
        hideModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
