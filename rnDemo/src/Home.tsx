// HomePage
import React, {useEffect} from 'react';
import {Text, View, Button, ScrollView, Animated, TouchableOpacity, I18nManager} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FastImage from 'react-native-fast-image';

const Home = ({navigation}: any) => {
  useEffect(() => {
    const isHermes = () => !!global.HermesInternal;
    console.log(isHermes());

    // 预加载图片
    FastImage.preload([
      {
        uri: 'https://unsplash.it/400/400?image=1',
        headers: {Authorization: 'someAuthToken'},
      },
    ]);
  }, []);

  useEffect(() => {
    // 强制启用 RTL 布局
  }, []);

  return (
    <View style={{flex: 1}}>
      <ScrollView
        // eslint-disable-next-line react-native/no-inline-styles
        contentContainerStyle={{
          justifyContent: 'center',
          alignContent: 'center',
          paddingBottom: 30,
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
        <View style={{marginTop: 20}}>
          <Button
            title="FastImage"
            onPress={() => {
              navigation.navigate('FastImage');
            }}
          />
        </View>
        <View style={{marginTop: 20}}>
          <Button
            title="ThirdModule"
            onPress={() => {
              navigation.navigate('ThirdModule');
            }}
          />
        </View>
        <View style={{marginTop: 20}}>
          <Button
            title="lodashPage"
            onPress={() => {
              navigation.navigate('LodashPage');
            }}
          />
        </View>
        <View style={{marginTop: 20}}>
          <Button
            title="AHooks"
            onPress={() => {
              navigation.navigate('AHooks');
            }}
          />
        </View>
        <View style={{marginTop: 20}}>
          <Button
            title="TextRTL"
            onPress={() => {
              navigation.navigate('TextRTL');
            }}
          />
        </View>
        <View style={{marginTop: 20, alignItems: 'center'}}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('FiberTest');
            }}>
            <Text style={{fontWeight: '700', fontSize: 20}}>FiberTest</Text>
          </TouchableOpacity>
        </View>
        <View style={{marginTop: 20, alignItems: 'center'}}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('CustomAnimation');
            }}>
            <Text style={{fontWeight: '700', fontSize: 20}}>CustomAnimation</Text>
          </TouchableOpacity>
        </View>
        <View style={{marginTop: 20, alignItems: 'center'}}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('JSTimersTest');
            }}>
            <Text style={{fontWeight: '700', fontSize: 20}}>JSTimersTest</Text>
          </TouchableOpacity>
        </View>
        <View style={{marginTop: 20, alignItems: 'center'}}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('FlushListPage');
            }}>
            <Text style={{fontWeight: '700', fontSize: 20}}>FlushListPage</Text>
          </TouchableOpacity>
        </View>
        <View style={{marginTop: 20, alignItems: 'center'}}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('FlatListPage');
            }}>
            <Text style={{fontWeight: '700', fontSize: 20}}>FlatListPage</Text>
          </TouchableOpacity>
        </View>
        <View style={{marginTop: 20, alignItems: 'center'}}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('RTLText');
            }}>
            <Text style={{fontWeight: '700', fontSize: 20}}>RTLText</Text>
          </TouchableOpacity>
        </View>
        <View style={{marginTop: 20, alignItems: 'center'}}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('GestureScrollview');
            }}>
            <Text style={{fontWeight: '700', fontSize: 20}}>GestureScrollview</Text>
          </TouchableOpacity>
        </View>
        <View style={{marginTop: 20, alignItems: 'center'}}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('ImageTestPage');
            }}>
            <Text style={{fontWeight: '700', fontSize: 20}}>ImageTestPage</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
