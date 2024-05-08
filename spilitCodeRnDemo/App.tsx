/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, Text, useColorScheme} from 'react-native';

function App(): React.JSX.Element {
  const backgroundStyle = {
    flex: 1,
    backgroundColor: 'pink',
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <Text>123</Text>
    </SafeAreaView>
  );
}

export default App;
