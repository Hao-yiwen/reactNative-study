import React from 'react';
import {View, Text} from 'react-native';
import {WebView} from 'react-native-webview';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <WebView source={{uri: 'https://reactnative.dev/'}} style={{flex: 1}} />
    </View>
  );
};

export default App;
