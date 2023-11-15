import React, {useState} from 'react';
import {SafeAreaView, StatusBar, Text, Button} from 'react-native';
import RTNCalculator from 'rtn-calculator/js/NativeCalculator';
import RTNCenteredText from 'rtn-centered-text/js/RTNCenteredTextNativeComponent';

const App: () => JSX.Element = () => {
  const [result, setResult] = useState<number | null>(null);
  return (
    <SafeAreaView style={{alignItems: 'center'}}>
      <StatusBar barStyle={'dark-content'} />
      <Text>3+7={result ?? '??'}</Text>
      <Button
        title="Compute"
        onPress={async () => {
          const value = await RTNCalculator?.add(3, 7);
          setResult(value ?? null);
        }}
      />
      <RTNCenteredText
        text="Hello World!"
        style={{width: '100%', height: 50}}
      />
    </SafeAreaView>
  );
};

export default App;
