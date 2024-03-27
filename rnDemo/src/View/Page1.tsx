// HomePage
import React, {useEffect} from 'react';
import {Text, View, Button, ScrollView, Animated} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const YourApp = ({navigation}: any) => {
  useEffect(() => {
    const isHermes = () => !!global.HermesInternal;
    console.log(isHermes());
  }, []);

  return (
    <ScrollView
      // eslint-disable-next-line react-native/no-inline-styles
      contentContainerStyle={{
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
        title="跳转到Sqlite"
        onPress={() => {
          navigation.navigate('Page2');
        }}
      />
      <Button
        title="跳转到Rematch"
        onPress={() => {
          navigation.navigate('Page3');
        }}
      />
      <Button
        title="跳转到Style"
        onPress={() => {
          navigation.navigate('Page4');
        }}
      />
      <Button
        title="跳转到Lottie"
        onPress={() => {
          navigation.navigate('Page5');
        }}
      />
      <Button
        title="跳转到Image"
        onPress={() => {
          navigation.navigate('Page6');
        }}
      />
      <Button
        title="跳转到Carousel"
        onPress={() => {
          navigation.navigate('Page7');
        }}
      />
      <Button
        title="跳转到Animate"
        onPress={() => {
          navigation.navigate('Animate');
        }}
      />
      <Button
        title="跳转到Timer"
        onPress={() => {
          navigation.navigate('Timer');
        }}
      />
      <Button
        title="跳转到NativeModules"
        onPress={() => {
          navigation.navigate('NativeModules');
        }}
      />
      <Button
        title="跳转到MapView"
        onPress={() => {
          navigation.navigate('MapView');
        }}
      />
      <Button
        title="跳转到DatePicker"
        onPress={() => {
          navigation.navigate('DatePicker');
        }}
      />
      <Button
        title="跳转到SwiftModule"
        onPress={() => {
          navigation.navigate('SwiftModule');
        }}
      />
      <Button
        title="0725不同页面scrollview相互干扰测试"
        onPress={() => {
          navigation.navigate('ScrollviewTest');
        }}
      />
    </ScrollView>
  );
};

export default YourApp;
