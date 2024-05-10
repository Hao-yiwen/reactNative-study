import React, {Component} from 'react';
import {TouchableOpacity, View, Text, Pressable, Animated, StyleSheet} from 'react-native';

class Booking extends Component {
  constructor(props) {
    super(props);
  }

  fadeAnim = new Animated.Value(0); // Initial value for opacity: 0

  animatedValue = new Animated.Value(0);

  fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(this.fadeAnim, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: true,
    }).start();
  };

  moveView = () => {
    Animated.timing(this.animatedValue, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: true,
    }).start();
  };

  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'orange'}}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={{
            // top: 200,
            // left: 100,
            // width: 100,
            // height: 100,
            marginTop: 100,
            height: 100,
            width: 100,
            backgroundColor: 'red',
            opacity: 0.5,
          }}
          hitSlop={{top: 10, left: 10, right: 10, bottom: 10}}
          testID={'123123'}
          onPress={() => {
            this.fadeIn();
          }}>
          <Animated.View>
            <Animated.View
              style={[
                styles.fadingContainer,
                {
                  // Bind opacity to animated value
                  opacity: this.fadeAnim,
                },
              ]}>
              <Text>123123</Text>
            </Animated.View>
          </Animated.View>
        </TouchableOpacity>
        <Animated.View
          style={{
            width: 100,
            height: 100,
            backgroundColor: 'green',
            transform: [
              {
                translateY: this.animatedValue.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 150], // 0 : 150, 0.5 : 75, 1 : 0
                }),
              },
            ],
          }}></Animated.View>
        <TouchableOpacity style={{marginTop: 50, marginLeft: 50}} onPress={this.moveView}>
          <Text>点击</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fadingContainer: {
    padding: 20,
    backgroundColor: 'powderblue',
  },
  fadingText: {
    fontSize: 28,
  },
  buttonRow: {
    flexBasis: 100,
    justifyContent: 'space-evenly',
    marginVertical: 16,
  },
});

export default Booking;
