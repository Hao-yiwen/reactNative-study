import React, {useCallback} from 'react';
import {View, Text, Animated, TouchableOpacity} from 'react-native';

const App = () => {
  const fadeAnim = new Animated.Value(0);

  const animationStart = useCallback(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <View style={{flex: 1, backgroundColor: 'pink'}}>
      <Animated.View
        style={{
          width: 100,
          height: 100,
          backgroundColor: 'green',
          transform: [
            {
              translateY: fadeAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 300],
              }),
            },
          ],
        }}>
        <TouchableOpacity
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'yellow',
          }}
          onPress={() => {
            console.log('TouchableOpacity onPress');
          }}>
          <Text>Animated</Text>
        </TouchableOpacity>
      </Animated.View>
      <TouchableOpacity onPress={animationStart} style={{margin: 60}}>
        <Text>Start Animation</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;
