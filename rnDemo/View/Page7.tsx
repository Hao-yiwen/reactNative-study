import React from 'react';
import {View, Text} from 'react-native';
import Carousel from 'react-native-snap-carousel';

export default () => {
  return (
    <View style={{alignItems: 'center'}}>
      <Text style={{marginTop: 30}}>Page7</Text>
      <Carousel
        data={[1, 2, 3, 4, 5]}
        renderItem={({item}) => (
          <View
            style={{
              width: 200,
              height: 200,
              backgroundColor: 'red',
              borderRadius: 20,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text>{item}</Text>
          </View>
        )}
        sliderWidth={300}
        itemWidth={200}
      />
    </View>
  );
};
