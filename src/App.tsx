import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './styles/global';
import Routes from './routes';

import AuthContext from './context/AuthContex';

const App: React.FC = () => (
  <>
    <AuthContext.Provider value={{ name: 'willian' }}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </AuthContext.Provider>

    <GlobalStyle />
  </>
);

export default App;
