import React, {useRef} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

const MeasureScreen = () => {
  const viewOneRef = useRef<any>(null);
  const viewTwoRef = useRef<any>(null);
  const textRef = useRef<any>(null);

  const measureView = () => {
    viewOneRef?.current?.measure?.(
      (x: any, y: any, width: any, height: any, pageX: any, pageY: any) => {
        console.log('View One dimensions:', {
          x,
          y,
          width,
          height,
          pageX,
          pageY,
        });
      },
    );

    viewTwoRef.current.measure(
      (x: any, y: any, width: any, height: any, pageX: any, pageY: any) => {
        console.log('View Two dimensions:', {
          x,
          y,
          width,
          height,
          pageX,
          pageY,
        });
      },
    );
  };

  const measureLayoutBetweenViews = () => {
    textRef.current.measureLayout(
      viewTwoRef.current,
      (
        left: any,
        top: any,
        width: any,
        height: any,
        pageX: any,
        pageY: any,
      ) => {
        console.log('View Two relative to View One:', {
          left,
          top,
          width,
          height,
          pageX,
          pageY,
        });
      },
      (error: any) => {
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
        <Text ref={textRef}>View Two</Text>
      </View>
      <Button title="Measure Views" onPress={measureView} />
      <Button
        title="Measure Layout Between Views"
        onPress={measureLayoutBetweenViews}
      />
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

export default MeasureScreen;
