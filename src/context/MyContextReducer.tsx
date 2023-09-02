import React, {createContext, useContext, useReducer} from 'react';

interface IContextProps {
  name: string;
  surname: string;
  title: string;
  linkedin: string;
  isDarkMode: boolean;
}

type ContextProviderProps = {
  children: string | JSX.Element | JSX.Element[];
};

const initialState = {
  name: 'Furkan',
  surname: 'Türkyılmaz',
  title: 'Senior React Native Developer',
  isDarkMode: false,
  linkedin: 'furkanturkyilmaz',
};

const MainContext = createContext<IContextProps>(initialState);

const reducer = (state = {} as IContextProps, action: any) => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return {...state, isDarkMode: !state.isDarkMode};

    case 'CHANGE_TITLE':
      return {...state, title: action.payload};

    default:
      return state;
  }
};

const MainContextProvider = ({children}: ContextProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <MainContext.Provider value={[state, dispatch]}>
      {children}
    </MainContext.Provider>
  );
};

export {MainContextProvider, MainContext};
