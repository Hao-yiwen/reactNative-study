import React from 'react';
import {requireNativeComponent, UIManager} from 'react-native';

const RCTDatePicker = requireNativeComponent('RCTDatePicker');

class DatePicker extends React.Component {
  render() {
    return <RCTDatePicker {...this.props} />;
  }
}
export default DatePicker;
