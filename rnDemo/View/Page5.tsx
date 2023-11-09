import React from 'react';
import {View, Text} from 'react-native';
import LottieView from 'lottie-react-native';

export default () => {
  return (
    <View style={{flex: 1, backgroundColor: 'powderblue'}}>
      <Text>Page5</Text>
      <LottieView
        source={require('../Assets/lottieLogo.json')}
        autoPlay
        loop
        style={{width: 200, height: 200}}
      />
    </View>
  );
};
