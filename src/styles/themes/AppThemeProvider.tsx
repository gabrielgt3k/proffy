import React, { createContext } from 'react';
import usePersistedState from '../../hooks/usePersistedState';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import light from './light';
import dark from './dark';

export const AppThemeContext = createContext({
  theme: light,
  toggleTheme: () => {}
});

const AppThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme' ,light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  }
  
  const value = { theme, toggleTheme };

  return (
    <AppThemeContext.Provider value={value}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </AppThemeContext.Provider>
  );
};

export default AppThemeProvider;