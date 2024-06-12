import React from 'react';
import {Dimensions, ScrollView, Text, View} from 'react-native';

const App = () => {
  return (
    <View style={{flex: 1, flexDirection: 'row'}}>
      <ScrollView
        style={{
          width: 300,
          height: Dimensions.get('screen').height,
        }}>
        {Array.from({length: 50}).map((_, index) => (
          <View
            key={index}
            style={{
              height: 20,
              width: '100%',
              marginTop: 20,
              backgroundColor: 'orange',
            }}>
            <Text>
              {index + 1}. Lorem ipsum dolor sit amet, consectetur adipiscing
            </Text>
          </View>
        ))}
      </ScrollView>
      <ScrollView
        style={{
          width: 300,
          height: Dimensions.get('screen').height,
        }}>
        {Array.from({length: 500}).map((_, index) => (
          <View
            key={index}
            style={{
              height: 20,
              width: '100%',
              marginTop: 20,
              backgroundColor: 'green',
            }}>
            <Text>
              {index + 1}. Lorem ipsum dolor sit amet, consectetur adipiscing
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default App;
