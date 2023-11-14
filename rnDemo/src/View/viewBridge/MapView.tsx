import React, {Component} from 'react';
import {requireNativeComponent} from 'react-native';

const RNTMap = requireNativeComponent('RNTMap');

interface RegionProps {
  latitude: number,
  longitude: number,
  latitudeDelta: number,
  longitudeDelta: number,
}

interface MapViewProps {
  style: any;
  zoomEnabled: boolean;
  region: RegionProps;
  onRegionChange: any;
}

class MapView extends Component<MapViewProps, any> {
  render() {
    return <RNTMap {...this.props} />;
  }
}

export default MapView;
