import { createContext, useContext } from 'react';

const AppContext = createContext({
  name: 'Guest',
});

export function AppWrapper({ children }) {
  const sharedState = {
    /* whatever you want */
  };

  return <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  return useContext(AppContext);
}
