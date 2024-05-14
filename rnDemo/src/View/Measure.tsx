import React, {useRef} from 'react';
import {StyleSheet, View, Text, Button, findNodeHandle} from 'react-native';

const App = () => {
  const viewOneRef = useRef(null);
  const viewTwoRef = useRef(null);

  const measureView = () => {
    viewOneRef.current.measure((x, y, width, height, pageX, pageY) => {
      console.log('View One dimensions:', {x, y, width, height, pageX, pageY});
    });

    viewTwoRef.current.measure((x, y, width, height, pageX, pageY) => {
      console.log('View Two dimensions:', {x, y, width, height, pageX, pageY});
    });
  };

  const measureLayoutBetweenViews = () => {
    viewTwoRef.current.measureLayout(
      findNodeHandle(viewOneRef.current),
      (left, top, width, height) => {
        console.log('View Two relative to View One:', {left, top, width, height});
      },
      error => {
        console.error(error);
      },
    );
  };

  return (
    <View style={styles.container}>
      <View ref={viewOneRef} style={styles.box}>
        <Text>View One</Text>
      </View>
      <View ref={viewTwoRef} style={styles.box}>
        <Text>View Two</Text>
      </View>
      <Button title="Measure Views" onPress={measureView} />
      <Button title="Measure Layout Between Views" onPress={measureLayoutBetweenViews} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  box: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue',
  },
});

export default App;
