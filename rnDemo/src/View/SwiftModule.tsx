import React from 'react';
import {View, Text, NativeModules, Button} from 'react-native';

const {SwiftModule} = NativeModules;

export default () => {
  return (
    <View style={{alignItems: 'center'}}>
      <Text>SwiftModule</Text>
      <Button
        title="点击获取"
        onPress={() => {
          console.log('SwiftModule', SwiftModule.someKey);
          SwiftModule.getHelloMessage(console.log);
        }}
      />
    </View>
  );
};
