import React from 'react';
import {Dimensions, ScrollView, Text, View} from 'react-native';
import WebView from 'react-native-webview';

const App = props => {
  console.log('App props:', props);
  return (
    <View style={{flex: 1, flexDirection: 'row'}}>
      <WebView
        style={{flex: 1}}
        source={{uri: 'https://www.google.com'}}
        scalesPageToFit={true}
      />
    </View>
  );
};

export default App;
