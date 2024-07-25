import React, {useEffect, useMemo, useRef} from 'react';
import {
  View,
  Text,
  InteractionManager,
  TouchableOpacity,
  StyleSheet,
  LayoutAnimation,
  UIManager,
  Animated,
  useAnimatedValue,
} from 'react-native';

// react-native:
const doHeavyTask = () => {
  for (let i = 0; i < 100000; i++) {
    for (let j = 0; j < 1000; j++) {
      Math.random();
    }
  }
};

UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);

const SlowExample = () => {
  const [state, setState] = React.useState({w: 200, h: 200});
  const animate1 = useAnimatedValue(0);
  const animate2 = useMemo(() => new Animated.Value(0), []);
  const ref = useRef(null);

  console.log('render: =========> SlowExample');

  useEffect(() => {
    console.log('useEffect: ' + performance.now());
    Animated.timing(animate1, {
      toValue: 100,
      duration: 1000,
      useNativeDriver: true,
    }).start();
    Animated.timing(animate2, {
      toValue: 100,
      duration: 1000,
      useNativeDriver: false,
    }).start();
    InteractionManager.createInteractionHandle();

    requestAnimationFrame(() => {
      console.log('requestAnimationFrame callback' + performance.now());
    });

    // process.nextTick(() => {
    //   console.log('process.nextTick callback' + performance.now());
    // });

    setImmediate(() => {
      console.log('setImmediate callback' + performance.now());
    });

    setTimeout(() => {
      doHeavyTask();
      console.log('setTimeout callback' + performance.now());
    }, 0);

    InteractionManager.runAfterInteractions(() => {
      console.log('runAfterInteractions callback' + performance.now());
    });

    console.log('Scheduled both callbacks after heavy task' + performance.now());
  }, [animate1, animate2]);

  useEffect(() => {
    console.log('useEffect2: ' + performance.now());
  }, [state.h]);

  const _onPress = () => {
    console.log('Button pressed' + performance.now());
    LayoutAnimation.spring();
    setState({w: state.w + 20, h: state.h + 20});
  };

  return (
    <View>
      <Test />
      <Animated.View
        style={{width: 50, height: 50, backgroundColor: 'yellow', transform: [{translateX: animate1}]}}></Animated.View>
      <Animated.View
        style={{width: 50, height: 50, backgroundColor: 'green', transform: [{translateX: animate2}]}}></Animated.View>
      <View style={[styles.box, {width: state.w, height: state.h}]} />
      <TouchableOpacity onPress={_onPress}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Press me!</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const Test = props => {
  console.log('render: =========> Test');
  return (
    <View>
      <Text>Test</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 200,
    height: 200,
    backgroundColor: 'red',
  },
  button: {
    backgroundColor: 'black',
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginTop: 15,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

const App = () => {
  console.log('render: =========> App');
  return (
    <View style={styles.container}>
      <Text>SlowExample</Text>
      <SlowExample />
    </View>
  );
};

export default App;
