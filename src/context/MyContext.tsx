import React, {createContext, useContext, useState} from 'react';

const initialState = {
  name: 'Furkan',
  surname: 'Türkyılmaz',
  title: 'Senior React Native Developer',
  changeTitle: (text: string) => {},
  isDarkMode: false,
  changeIsDarkMode: () => {},
};

const MainContext = createContext(initialState);

const useMainContext = () => useContext(MainContext);

const MainContextProvider = ({children}: any) => {
  const [title, setTitle] = useState('Senior React Native Developer');

  const [isDarkMode, setIsDarkMode] = useState(false);

  const changeTitle = (text: string) => {
    setTitle(text);
  };

  const changeIsDarkMode = () => {
    setIsDarkMode(prevState => !prevState);
  };

  return (
    <MainContext.Provider
      value={{title, changeTitle, isDarkMode, changeIsDarkMode}}>
      {children}
    </MainContext.Provider>
  );
};

export {MainContextProvider, useMainContext};
