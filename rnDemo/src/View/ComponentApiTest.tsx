import React from 'react';
import {View, Text, Button} from 'react-native';

const App: React.FC<any> = () => {
  return (
    <View style={{flex: 1}}>
      <View style={{width: 7000, height: 20}}>
        <Text adjustsFontSizeToFit={true} style={{fontSize: 40}}>
          测试adjustsFontSizeToFit
        </Text>
      </View>
    </View>
  );
};

export default App;
