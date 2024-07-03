import React, { createContext, useState } from 'react';

// Create a context object
const SidebarContext = createContext();

const SidebarProvider = ({ children }) => {

  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };


  const contextValue = {
    isOpen,
    setIsOpen,
    handleClose
  };

  
  return (
    <SidebarContext.Provider value={contextValue}>
      {children}
    </SidebarContext.Provider>
  );
};

export { SidebarProvider, SidebarContext };
