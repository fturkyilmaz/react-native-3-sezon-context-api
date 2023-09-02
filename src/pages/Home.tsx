import {StatusBar, Text, SafeAreaView, Button, Switch} from 'react-native';
import React, {useContext} from 'react';
import {MainContext} from '../context/MyContextReducer';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export default function Home() {
  const [state, dispatch] = useContext(MainContext);

  const {isDarkMode, title} = state;

  const backgroundStyle = {
    flex: 1,
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    paddingHorizontal: 25,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Text>{title}</Text>

      <Switch
        onChange={() => dispatch({type: 'TOGGLE_THEME'})}
        value={isDarkMode}
      />
      <Button
        title="Change Title"
        onPress={() =>
          dispatch({
            type: 'CHANGE_TITLE',
            payload: 'Selamlar Furkan Türkyılmaz',
          })
        }
      />
    </SafeAreaView>
  );
}
