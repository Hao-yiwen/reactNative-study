// HomePage
import React, {useEffect} from 'react';
import {Text, View, Button, ScrollView, Animated} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = ({navigation}: any) => {
  useEffect(() => {
    const isHermes = () => !!global.HermesInternal;
    console.log(isHermes());
  }, []);

  return (
    <View style={{flex: 1}}>
      <ScrollView
        // eslint-disable-next-line react-native/no-inline-styles
        contentContainerStyle={{
          justifyContent: 'center',
          alignContent: 'center',
        }}>
        <View style={{marginTop: 20}}>
          <Button
            width={100}
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
        </View>

        <View style={{marginTop: 20}}>
          <Button
            title="点击取值"
            onPress={() => {
              AsyncStorage.getItem('my-key').then(value => {
                console.log(value);
              });
            }}
          />
        </View>

        <View style={{marginTop: 20}}>
          <Button
            title="跳转到Sqlite"
            onPress={() => {
              navigation.navigate('Page2');
            }}
          />
        </View>

        <View style={{marginTop: 20}}>
          <Button
            title="跳转到Rematch"
            onPress={() => {
              navigation.navigate('Page3');
            }}
          />
        </View>

        <View style={{marginTop: 20}}>
          <Button
            title="跳转到Style"
            onPress={() => {
              navigation.navigate('Page4');
            }}
          />
        </View>

        <View style={{marginTop: 20}}>
          <Button
            title="跳转到Lottie"
            onPress={() => {
              navigation.navigate('Page5');
            }}
          />
        </View>

        <View style={{marginTop: 20}}>
          <Button
            title="跳转到Image"
            onPress={() => {
              navigation.navigate('Page6');
            }}
          />
        </View>

        <View style={{marginTop: 20}}>
          <Button
            title="跳转到Carousel"
            onPress={() => {
              navigation.navigate('Page7');
            }}
          />
        </View>

        <View style={{marginTop: 20}}>
          <Button
            title="跳转到Animate"
            onPress={() => {
              navigation.navigate('Animate');
            }}
          />
        </View>

        <View style={{marginTop: 20}}>
          <Button
            title="跳转到Timer"
            onPress={() => {
              navigation.navigate('Timer');
            }}
          />
        </View>

        <View style={{marginTop: 20}}>
          <Button
            title="跳转到NativeModules"
            onPress={() => {
              navigation.navigate('NativeModules');
            }}
          />
        </View>

        <View style={{marginTop: 20}}>
          <Button
            title="跳转到MapView"
            onPress={() => {
              navigation.navigate('MapView');
            }}
          />
        </View>

        <View style={{marginTop: 20}}>
          <Button
            title="跳转到DatePicker"
            onPress={() => {
              navigation.navigate('DatePicker');
            }}
          />
        </View>

        <View style={{marginTop: 20}}>
          <Button
            title="跳转到SwiftModule"
            onPress={() => {
              navigation.navigate('SwiftModule');
            }}
          />
        </View>

        <View style={{marginTop: 20}}>
          <Button
            title="0725不同页面scrollview相互干扰测试"
            onPress={() => {
              navigation.navigate('ScrollviewTest');
            }}
          />
        </View>

        <View style={{marginTop: 20}}>
          <Button
            title="AnimatedScrollview"
            onPress={() => {
              navigation.navigate('AnimatedScrollview');
            }}
          />
        </View>

        <View style={{marginTop: 20}}>
          <Button
            title="ComponentApiTest"
            onPress={() => {
              navigation.navigate('ComponentApiTest');
            }}
          />
        </View>
        <View style={{marginTop: 20}}>
          <Button
            title="Animated"
            onPress={() => {
              navigation.navigate('Animated');
            }}
          />
        </View>
        <View style={{marginTop: 20}}>
          <Button
            title="Measure"
            onPress={() => {
              navigation.navigate('Measure');
            }}
          />
        </View>
        <View style={{marginTop: 20}}>
          <Button
            title="FontFamilyPage"
            onPress={() => {
              navigation.navigate('FontFamilyPage');
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
