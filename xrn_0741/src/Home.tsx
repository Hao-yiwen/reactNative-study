import React from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';

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
      </ScrollView>
    </View>
  );
};

export default Home;
