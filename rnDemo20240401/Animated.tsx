import React, {useCallback} from 'react';
import {View, Text, Animated, TouchableOpacity, Button} from 'react-native';

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
      <TouchableOpacity
        onPress={() => {
          console.log('TouchableOpacity onPress');
        }}>
        <Animated.View
          style={{
            width: 100,
            height: 100,
            backgroundColor: 'green',
            transform: [
              {
                translateY: fadeAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 100],
                }),
              },
            ],
          }}>
          <Text>Animated</Text>
        </Animated.View>
      </TouchableOpacity>
      <TouchableOpacity onPress={animationStart} style={{margin: 60}}>
        <Text
          onLayout={() => {
            console.log('Text onLayout');
          }}>
          Start Animation
        </Text>
      </TouchableOpacity>
      <Button
        title="Button"
        onPress={() => {
          console.log('Button onPress');
        }}
      />
      <View style={{flex: 1}}>
        <Text
          style={{
            left: 'auto',
            right: 10,
            fontSize: 20,
          }}>
          Text
        </Text>
      </View>
    </View>
  );
};

export default App;
