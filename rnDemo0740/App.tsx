import React, {useEffect, useState} from 'react';
import {
  Button,
  SafeAreaView,
  StatusBar,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import RTNCenteredText from 'rtn-centered-text/js/RTNCenteredTextNativeComponent';
import RTNCalculator from "rtn-calculator/js/NativeCalculator";

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [result, setResult] = useState<number | null>(null);

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
      <Text style={{marginLeft: 20, marginTop: 20}}>3+7={result ?? '??'}</Text>
      <Button
        title="Compute"
        onPress={async () => {
          const value = await RTNCalculator?.add(3, 7);
          setResult(value ?? null);
        }}
      />
    </SafeAreaView>
  );
}
export default App;
