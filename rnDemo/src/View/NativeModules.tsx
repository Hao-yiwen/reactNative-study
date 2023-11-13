import React from 'react';
import {View, Text, Button} from 'react-native';
import CalendarModuleFoo from './bridge/CalendarModule';

export default () => {
  const onPress = () => {
    CalendarModuleFoo.createCalendarEvent('testName', 'testLocation')
      .then(eventId => {
        console.log(eventId, '???');
      })
      .catch(error => {
        console.log(error);
      });
    console.log(CalendarModuleFoo.DEFAULT_EVENT_NAME, CalendarModuleFoo.SOME_OTHER_CONSTANT, 'CONSTANT');
  };

  return (
    <View style={{alignItems: 'center'}}>
      <Text>Native Modules</Text>
      <Button title="点击获取Native Modules信息" onPress={onPress} />
    </View>
  );
};
