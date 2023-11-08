import React from 'react';
import {View, Text, Button} from 'react-native';
import {connect} from 'react-redux';

const Index = ({navigation, count, increment}: any) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{textAlign: 'center'}}>Page3</Text>
      <Text style={{textAlign: 'center'}}>count: {count}</Text>
      <Button
        title="返回Page1"
        onPress={() => {
          navigation.goBack();
        }}
      />
      <Button
        title="点击+1"
        onPress={() => {
          increment(1);
        }}
      />
    </View>
  );
};

const mapStateToProps = (state: any) => {
  return {
    count: state.counter.count,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    increment: value => dispatch.counter.increment(value),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
