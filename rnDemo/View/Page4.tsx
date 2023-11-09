import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import MyIcon from '@assets/pic.svg';
import Icon from 'react-native-vector-icons/FontAwesome';

export default () => {
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <Text style={{textAlign: 'center'}}>Page4</Text>
      <Text>
        <Icon name="rocket" size={30} color="#900" />
      </Text>
      <View style={styles.container}>
        <View style={[styles.box, {backgroundColor: 'white', marginTop: 40}]}>
          <View
            style={{
              width: 50,
              height: 50,
              backgroundColor: 'green',
              position: 'absolute',
              top: 50,
            }}>
            <Text>absolute</Text>
          </View>
          <View
            style={{
              position: 'absolute',
              bottom: 0,
              width: 100,
              height: 100,
              backgroundColor: 'red',
            }}></View>
        </View>
        <View style={[styles.box, {backgroundColor: 'green'}]}></View>
        <Text>
          <MyIcon width={30} height={30} />
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    backgroundColor: 'powderblue',
    rowGap: 30,
  },
  box: {
    width: 150,
    height: 180,
  },
});
