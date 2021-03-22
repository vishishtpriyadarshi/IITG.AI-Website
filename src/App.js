import  React from 'react';
import { BrowserRouter } from "react-router-dom";

import MainPage from './components/mainPage';

function App() {
  return (
    <BrowserRouter basename={'/IITG.AI-Website/'}>
      <MainPage />
    </BrowserRouter>
  );
}

export default App;
