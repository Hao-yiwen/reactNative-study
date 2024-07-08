import React from 'react';
import {View, Text, Image} from 'react-native';
import FastImage from 'react-native-fast-image';

export default () => {
  return (
    <View style={{flex: 1}}>
      <FastImage
        style={{width: 200, height: 200}}
        source={{
          uri: 'https://unsplash.it/400/400?image=1',
          headers: {Authorization: 'someAuthToken'},
          priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.contain}
      />
      <Image
        style={{marginTop: 30}}
        width={200}
        height={200}
        source={{
          uri: 'https://unsplash.it/400/400?image=1',
          headers: {Authorization: 'someAuthToken'},
          priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.contain}
      />
    </View>
  );
};
