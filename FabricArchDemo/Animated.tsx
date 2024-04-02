import React, {Component} from 'react';
import {LayoutAnimation, View} from 'react-native';

export default class TrainBookV3 extends Component {
  // 构造
  constructor(props) {
    super(props);
    this.state = {
      isShow: false,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      LayoutAnimation.configureNext({
        duration: 1000,
        create: {
          type: 'easeInEaseOut',
          property: 'opacity',
        },
        update: {type: 'easeInEaseOut'},
        delete: {
          type: 'easeInEaseOut',
          property: 'opacity',
        },
      });
      this.setState({
        isShow: !this.state.isShow,
      });
    }, 1000);
  }

  render() {
    return (
      <View>
        {this.state.isShow && (
          <View style={{backgroundColor: 'red', width: 200, height: 200}} />
        )}
        {!this.state.isShow && (
          <View style={{backgroundColor: 'blue', width: 100, height: 300}} />
        )}
      </View>
    );
  }
}
