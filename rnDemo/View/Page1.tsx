import React from 'react';
import {Text, View, Button} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const YourApp = ({navigation}) => {
  return (
    <View
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Hello world! 🎉</Text>
      <Button
        title="点击存值"
        onPress={() => {
          const storeData = async (value: string) => {
            try {
              await AsyncStorage.setItem('my-key', value);
            } catch (e) {
              // saving error
            }
          };
          storeData('我是存储的值');
        }}
      />
      <Button
        title="点击取值"
        onPress={() => {
          AsyncStorage.getItem('my-key').then(value => {
            console.log(value);
          });
        }}
      />
      <Button
        title="跳转到Page2"
        onPress={() => {
          navigation.navigate('Page2');
        }}
      />
      <Button
        title="跳转到Page3"
        onPress={() => {
          navigation.navigate('Page3');
        }}
      />
    </View>
  );
};

export default YourApp;
