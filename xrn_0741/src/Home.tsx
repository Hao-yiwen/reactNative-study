import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  NativeModules,
} from 'react-native';
const {URL} = NativeModules;

const Home = ({navigation}: any) => {
  return (
    <View style={{flex: 1}}>
      <ScrollView
        contentContainerStyle={{
          alignItems: 'center',
        }}>
        <TouchableOpacity
          style={{marginTop: 20}}
          onPress={() => {
            navigation.navigate('WebViewPage');
          }}>
          <Text style={{color: 'black', fontSize: 20}}>WebView Page</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{marginTop: 20}}
          onPress={() => {
            URL.openURL('https://www.google.com');
          }}>
          <Text style={{color: 'black', fontSize: 20}}>打开原生页面</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{marginTop: 20}}
          onPress={() => {
            URL.openURL('/rn_rnDemo0742/rnDemo0742.jsbundle?isRN=true');
          }}>
          <Text style={{color: 'black', fontSize: 20}}>打开另一个RN页面</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Home;
