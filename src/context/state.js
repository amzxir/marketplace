import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export function AppWrapper({ children }) {

  const [openModal , setOpenModal] = useState(false)

  return (
    <AppContext.Provider 
    value={{ 
        openModal,
        setOpenModal
     }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}