import React from 'react';
import {View, Text, Image} from 'react-native';

export default function ImageTestPage() {
  return (
    <View>
      <Text>Image Test Page</Text>
      <Image
        source={{
          uri: 'https://dimg04.c-ctrip.com/images/0302z12000ehr1wn2ABBC_C_750_420_Q90.png',
        }}
        style={{width: 200, height: 200, backgroundColor: 'green'}}
        blurRadius={10}
      />
    </View>
  );
}
