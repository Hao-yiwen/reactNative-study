import React, {ReactNode} from 'react';
import {requireNativeComponent} from 'react-native';

const RCTMyCustomView = requireNativeComponent('RCTMyCustomView');

class MyCustomView extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  _onChange(event) {
    if (!this.props.onChangeMessage) {
      return;
    }
    this.props.onChangeMessage(event.nativeEvent.message);
  }

  render(): ReactNode {
    return (
      <RCTMyCustomView {...this.props} onChange={this._onChange.bind(this)} />
    );
  }
}

export default MyCustomView;
