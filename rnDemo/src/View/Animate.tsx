import React, {useEffect} from 'react';
import {View, Text, Animated} from 'react-native';
import type {PropsWithChildren} from 'react';
import type {ViewStyle} from 'react-native';

type FadeInViewProps = PropsWithChildren<{Style: ViewStyle}>;

const FadeInView: React.FC<FadeInViewProps> = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  useEffect(() => {}, [fadeAnim]);

  return (
    <View
      style={{
        alignItems: 'center',
      }}>
      <Text>Page7</Text>
    </View>
  );
};

const Index: React.FC = () => {
  return (
    <View>
      <Text>Page7</Text>
    </View>
  );
};

export default Index;
