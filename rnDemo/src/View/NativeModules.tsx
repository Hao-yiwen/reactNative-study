import React, {useEffect} from 'react';
import {View, Text, Button, NativeEventEmitter, NativeModules, Alert} from 'react-native';

const {CalendarModule} = NativeModules;
const calendarModuleEventEmitter = new NativeEventEmitter(CalendarModule);
// import CalendarModuleFoo from './bridge/CalendarModule';

export default () => {
  useEffect(() => {
    const eventListener = calendarModuleEventEmitter.addListener('EventCreated', event => {
      console.log(`Event Created: title=${event.title}, location=${event.location}`);
    });

    return () => {
      eventListener.remove();
    };
  });

  const onPress = () => {
    CalendarModule.createCalendarEvent('testName', 'testLocation');
    console.log(CalendarModule.DEFAULT_EVENT_NAME, CalendarModule.SOME_OTHER_CONSTANT, 'CONSTANT');
    Alert.alert('提示', '请查看控制台');
  };

  return (
    <View style={{alignItems: 'center'}}>
      <Text>Native Modules</Text>
      <Button title="点击获取Native Modules信息" onPress={onPress} />
    </View>
  );
};
