import {
  View,
  Text,
  SafeAreaView,
  Button,
  Switch,
  useColorScheme,
} from 'react-native';
import React from 'react';
import {useMainContext} from '../context/MyContext';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export default function HomeBasicContext() {
  const {title, changeTitle, isDarkMode, changeIsDarkMode} = useMainContext();

  const colorSchme = useColorScheme();

  console.log('User Preferences Settings', colorSchme);

  console.log('title', title, isDarkMode);

  const backgroundStyle = {
    flex: 1,
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    padding: 25,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <Text>{title}</Text>
      <Button
        title="Change Title"
        onPress={() => changeTitle('Changed Title')}
      />
      <Switch onChange={() => changeIsDarkMode()} value={isDarkMode} />
    </SafeAreaView>
  );
}
