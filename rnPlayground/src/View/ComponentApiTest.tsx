import React from 'react';
import {View, Text, Button} from 'react-native';

const App: React.FC<any> = () => {
  return (
    <View style={{flex: 1}}>
      <View style={{width: 70, height: 20}}>
        {/* @description 只有设置了字体大小 才会变大或者变小 */}
        <Text adjustsFontSizeToFit={true} style={{fontSize: 40}}>
          测试adjustsFontSizeToFit
        </Text>
      </View>
      <Text style={{fontSize: 40}}>测试adjustsFontSizeToFit</Text>
    </View>
  );
};

export default App;
