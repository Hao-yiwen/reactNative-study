import React, {useEffect, useRef} from 'react';
import {Animated, Dimensions, StyleSheet, Text, View} from 'react-native';

const DOT_SIZE = 50;
const WIDTH = Dimensions.get('window').width;
const NATIVE_DRIVER = false;

const App = () => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const leader = useRef(new Animated.Value(0)).current;
  const follower1 = useRef(new Animated.Value(0)).current;
  const follower2 = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.spring(leader, {
      toValue: scrollX.interpolate({
        inputRange: [0, WIDTH],
        outputRange: [0, (WIDTH - DOT_SIZE) / 2],
      }),
      useNativeDriver: NATIVE_DRIVER,
    }).start();
    Animated.spring(follower1, {
      toValue: leader,
      useNativeDriver: NATIVE_DRIVER,
    }).start();
    Animated.spring(follower2, {
      toValue: follower1,
      useNativeDriver: NATIVE_DRIVER,
    }).start();
  }, [scrollX, leader, follower1, follower2]);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Animated.View
          style={[styles.dot, {transform: [{translateX: leader}]}]}
        />
        <Animated.View
          style={[styles.dot, {transform: [{translateX: follower1}]}]}
        />
        <Animated.View
          style={[styles.dot, {transform: [{translateX: follower2}]}]}
        />
      </View>
      <Text style={styles.driver}>
        NATIVE DRIVER: {NATIVE_DRIVER ? 'ON' : 'OFF'}
      </Text>
      <Animated.ScrollView
        style={styles.scroll}
        horizontal={true}
        pagingEnabled={true}
        centerContent={true}
        contentOffset={{x: WIDTH, y: 0}}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: NATIVE_DRIVER},
        )}>
        <View style={styles.scrollPage}>
          <Text style={styles.text}>LEFT →</Text>
        </View>
        <View style={styles.scrollPage}>
          <Text style={styles.text}>← CENTER →</Text>
        </View>
        <View style={styles.scrollPage}>
          <Text style={styles.text}>← RIGHT</Text>
        </View>
      </Animated.ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  dot: {
    width: DOT_SIZE,
    height: DOT_SIZE,
    marginVertical: 5,
    borderRadius: DOT_SIZE / 2,
    backgroundColor: 'crimson',
  },
  driver: {
    fontSize: 17,
    marginVertical: 10,
    textAlign: 'center',
  },
  scroll: {
    backgroundColor: 'linen',
  },
  scrollPage: {
    width: WIDTH,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: '600',
  },
});

export default App;