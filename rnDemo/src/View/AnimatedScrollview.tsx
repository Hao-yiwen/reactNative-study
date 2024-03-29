import React, {useRef} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  Animated,
  findNodeHandle,
} from 'react-native';

const App = () => {
  // 创建Animated.ScrollView的ref
  const scrollViewRef = useRef(null);
  // 创建一个子视图的ref，我们将测量并滚动到这个视图
  const targetViewRef = useRef(null);

  const scrollToView = () => {
    // 获取ScrollView和目标视图的node handles
    const scrollViewNode = findNodeHandle(scrollViewRef.current);
    const targetViewNode = findNodeHandle(targetViewRef.current);

    if (scrollViewNode && targetViewNode) {
      targetViewRef.current.measureLayout(
        scrollViewNode,
        (left, top, width, height) => {
          // 使用得到的top位置来滚动到目标视图
          scrollViewRef.current?.scrollTo({y: top, animated: true});
        },
        error => {
          console.error(error);
        },
      );
    }
  };

  return (
    <View style={styles.container}>
      <Animated.ScrollView ref={scrollViewRef} style={styles.scrollView}>
        {/* 添加一些占位内容 */}
        <View style={{height: 800,backgroundColor: 'red'}}>
          <Text>scrollview头部</Text>
        </View>
        {/* 这是我们想要滚动到的视图 */}
        <View ref={targetViewRef} style={styles.targetView}>
          <Text>这是目标位置</Text>
        </View>
        <View style={{height: 800, backgroundColor: 'orange'}}>
          <Text>scrollview尾部</Text>
        </View>
      </Animated.ScrollView>
      <View style={{marginBottom: 20}}>
        <Button title="滚动到目标位置" onPress={scrollToView} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  targetView: {
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue',
    marginVertical: 20,
  },
});

export default App;
