import React from 'react';
import {View, Image, Text} from 'react-native';
import Video from 'react-native-video';

export default () => {
  return (
    <View style={{alignItems: 'center'}}>
      <Text style={{textAlign: 'center'}}>Page 6</Text>
      <Image
        style={{width: 300, height: 300, marginTop: 20}}
        source={require('@assets/Empty.png')}
      />
      <Video
        controls={true}
        source={{uri: 'https://media.w3.org/2010/05/sintel/trailer.mp4'}}
        style={{width: 300, height: 300, marginTop: 20}}
      />
    </View>
  );
};
