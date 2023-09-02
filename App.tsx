import React from 'react';
// import {MainContextProvider} from './src/context/MyContext';
// import HomeBasicContext from './src/pages/HomeBasicContext';
import Home from './src/pages/Home';
import {MainContextProvider} from './src/context/MyContextReducer';

export default function App() {
  return (
    <MainContextProvider>
      <Home />
    </MainContextProvider>
  );
}
