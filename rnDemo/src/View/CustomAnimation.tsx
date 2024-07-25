import React, {useEffect, useRef} from 'react';
import {View, StyleSheet, Button, Text} from 'react-native';

/**
 *
 * @description rn动画js驱动简单实现
 */
const CustomAnimation = ({duration, update}) => {
  const start = useRef(null);

  const animate = timestamp => {
    if (!start.current) start.current = timestamp;
    const elapsed = timestamp - start.current;

    // 计算当前进度
    const progress = Math.min(elapsed / duration, 1);
    // console.log('progress', performance.now());
    // 调用更新回调
    update(progress);

    // 如果动画尚未完成，请求下一帧
    if (progress < 1) {
      requestAnimationFrame(animate);
    }
  };

  useEffect(() => {
    requestAnimationFrame(animate);
  }, []);

  return null;
};

const App = () => {
  const [translateX, setTranslateX] = React.useState(0);
  const [state, setState] = React.useState(0);
  const [state1, setState1] = React.useState(0);

  useEffect(() => {
    console.log('state' + performance.now());
  }, [state]);

  useEffect(() => {
    console.log('state' + performance.now());
  }, [state1]);

  return (
    <View style={styles.container}>
      <CustomAnimation
        duration={2000}
        update={progress => {
          // 根据进度更新translateX值
          setTranslateX(progress * 200);
        }}
      />
      <View
        style={[styles.box, {transform: [{translateX}]}]}
        onLayout={() => {
          console.log('View1' + performance.now());
        }}
      />
      <View
        style={{backgroundColor: 'green', width: 200, height: 200}}
        onLayout={() => {
          console.log('View2' + performance.now());
        }}></View>
      <Button
        title="点击"
        onPress={() => {
          setState1(state1 + 1);
          requestAnimationFrame(() => {
            console.log('setImmediate' + performance.now());
            setState(state + 1);
          });
        }}
      />
      <Text>当前值是：{state}</Text>
      <Text>当前值是：{state1}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'blue',
  },
});

export default App;
