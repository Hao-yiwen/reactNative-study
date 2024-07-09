import React from 'react';
import {View, Text, Button, Alert} from 'react-native';
import {multiply} from 'third-module';

export default class ThirdModule extends React.Component {
  async componentDidMount(): Promise<void> {
    const result = await multiply(3, 7);
    console.log('result:', result);
    Alert.alert('result:', result.toString());
  }

  render() {
    return (
      <View style={{flex: 1, alignItems: 'center'}}>
        <Text style={{marginTop: 20}}>ThirdModule</Text>
        <Text style={{marginTop: 20}}>3*7=</Text>
        <View style={{marginTop: 20}}>
          <Button
            title="Go Back"
            onPress={() => {
              this.props?.navigation?.goBack();
            }}
          />
        </View>
      </View>
    );
  }
}
