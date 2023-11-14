import React from 'react';
import {View, Text} from 'react-native';
import MapView from './viewBridge/MapView';

export default () => {
  const regionChnage = (event: any) => {
    console.log(event.nativeEvent);
  };
  const region = {
    latitude: 37.48,
    longitude: -122.16,
    latitudeDelta: 0.1,
    longitudeDelta: 0.1,
  };
  return (
    <View style={{flex: 1}}>
      <Text>MapView</Text>
      <MapView style={{flex: 1}} zoomEnabled={true} region={region} onRegionChange={regionChnage} />
    </View>
  );
};
