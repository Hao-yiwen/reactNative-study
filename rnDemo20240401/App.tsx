import React from 'react';
import {View, Text, Button, Touchable, TouchableOpacity} from 'react-native';

const Index = () => {
  return (
    <View style={{flex: 1}}>
      <TouchableOpacity
        onPress={() => {
          console.log('点击了');
        }}>
        <Text>点击我</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Index;
