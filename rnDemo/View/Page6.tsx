import React from 'react';
import {View, Image, Text, ScrollView, ImageBackground} from 'react-native';
import Video from 'react-native-video';

export default () => {
  return (
    <ScrollView contentContainerStyle={{alignItems: 'center'}}>
      <Text style={{textAlign: 'center'}}>Page 6</Text>
      <Image
        style={{width: 300, height: 300, marginTop: 20, borderRadius: 20}}
        source={require('@assets/Empty.png')}
      />
      <Video
        controls={true}
        source={{uri: 'https://media.w3.org/2010/05/sintel/trailer.mp4'}}
        style={{width: 300, height: 300, marginTop: 20}}
      />
      <Image
        source={{uri: 'https://reactjs.org/logo-og.png'}}
        style={{width: 300, height: 300}}
      />
      <View style={{borderRadius: 20, overflow: 'hidden', marginTop: 30}}>
        <ImageBackground
          source={require('../Assets/Empty.png')}
          style={{
            width: 300,
            height: 300,
            justifyContent: 'center',
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 40,
              color: 'black',
              fontWeight: 'bold',
            }}>
            Inside
          </Text>
        </ImageBackground>
      </View>
    </ScrollView>
  );
};
