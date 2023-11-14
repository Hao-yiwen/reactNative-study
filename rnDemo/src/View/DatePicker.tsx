import React from 'react';
import {Text, View, UIManager} from 'react-native';
import DatePicker from './viewBridge/DatePicker';
const RCTDatePickerIOSConsts = UIManager.RCTDatePicker.Constants;

export default () => {
  return (
    <View>
      <Text>DatePicker</Text>
      <DatePicker style={{width: RCTDatePickerIOSConsts.ComponentHeight, height: RCTDatePickerIOSConsts.ComponentWidth}} />
      {/* <DatePicker style={{width: 100, height: 200}} /> */}
    </View>
  );
};
