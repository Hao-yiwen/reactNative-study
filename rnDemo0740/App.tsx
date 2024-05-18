import React, {useEffect} from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import RTNCenteredText from "rtn-centered-text/js/RTNCenteredTextNativeComponent";

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  useEffect(() => {
    console.log('App mounted');
  }, []);

  return (
    <SafeAreaView>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={'#fff'}
      />
      <RTNCenteredText
        text="Hello World!"
        style={{width: '100%', height: 30}}
      />
      <Text>RN@0.74.0</Text>
    </SafeAreaView>
  );
}
export default App;
