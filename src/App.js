import  React from 'react';
import { HashRouter, BrowserRouter } from "react-router-dom";

import MainPage from './components/mainPage';

function App() {
  return (
    <HashRouter>
      <MainPage />
    </HashRouter>
  );
}

export default App;
