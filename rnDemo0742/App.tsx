import React from 'react';
import {NativeModules, Button, SafeAreaView} from 'react-native';
const {CalendarModule} = NativeModules;
const {IntentModule} = NativeModules;

const NewModuleButton = () => {
  const onPress = () => {
    console.log('We will invoke the native module here!');
    CalendarModule.createCalendarEvent('testName', 'testLocation');
  };

  return (
    <SafeAreaView>
      <Button
        title="Click to invoke your native module!"
        color="#841584"
        onPress={onPress}
      />
      <Button
        title="Navigate to Other Page"
        color="#841584"
        onPress={() => {
          console.log('Navigate to Other Page');
          IntentModule.startActivityFromJS('https://www.baidu.com');
        }}></Button>
    </SafeAreaView>
  );
};

export default NewModuleButton;
