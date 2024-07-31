import React from 'react';
import {Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

const GestureScrollview = () => {
  return (
    <ScrollView
      bounces={true}
      contentContainerStyle={{flexGrow: 1, justifyContent: 'center', alignItems: 'center'}}
      overScrollMode="always">
      <View style={{height: 1000, backgroundColor: 'red', width: 300, justifyContent: 'space-between'}}>
        <Text>Scroll me!</Text>
        <Text style={{alignContent: 'flex-end'}}>Scroll me!</Text>
      </View>
    </ScrollView>
  );
};

export default GestureScrollview;
