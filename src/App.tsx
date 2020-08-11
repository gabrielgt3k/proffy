import React from 'react';
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './styles/global';
import AppThemeProvider from './styles/themes/AppThemeProvider';

function App() {

  return (
    <AppThemeProvider>
      <BrowserRouter>
        <GlobalStyle />
        <Routes />
      </BrowserRouter>
    </AppThemeProvider>
  );
}

export default App;
