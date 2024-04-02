// import React, {Component} from 'react';
// import {
//   TouchableOpacity,
//   View,
//   Text,
//   Pressable,
//   Animated,
//   StyleSheet,
// } from 'react-native';

// class Booking extends Component {
//   constructor(props) {
//     super(props);
//   }

//   fadeAnim = new Animated.Value(0); // Initial value for opacity: 0

//   animatedValue = new Animated.Value(0);

//   fadeIn = () => {
//     // Will change fadeAnim value to 1 in 5 seconds
//     Animated.timing(this.fadeAnim, {
//       toValue: 1,
//       duration: 5000,
//       useNativeDriver: true,
//     }).start();
//   };

//   moveView = () => {
//     Animated.timing(this.animatedValue, {
//       toValue: 1,
//       duration: 5000,
//       useNativeDriver: true,
//     }).start();
//   };

//   render() {
//     return (
//       <View style={{flex: 1, backgroundColor: 'orange'}}>
//         <TouchableOpacity
//           activeOpacity={0.8}
//           style={{
//             // top: 200,
//             // left: 100,
//             // width: 100,
//             // height: 100,
//             marginTop: 100,
//             height: 100,
//             width: 100,
//             backgroundColor: 'red',
//             opacity: 0.5,
//           }}
//           hitSlop={{top: 10, left: 10, right: 10, bottom: 10}}
//           testID={'123123'}
//           onPress={() => {
//             this.fadeIn();
//           }}>
//           <Animated.View>
//             <Animated.View
//               style={[
//                 styles.fadingContainer,
//                 {
//                   // Bind opacity to animated value
//                   opacity: this.fadeAnim,
//                 },
//               ]}>
//               <Text>123123</Text>
//             </Animated.View>
//           </Animated.View>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={{marginTop: 50, marginLeft: 50}}
//           onPress={this.moveView}>
//           <Animated.View
//             style={{
//               width: 100,
//               height: 100,
//               backgroundColor: 'green',
//               transform: [
//                 {
//                   translateY: this.animatedValue.interpolate({
//                     inputRange: [0, 1],
//                     outputRange: [0, 150], // 0 : 150, 0.5 : 75, 1 : 0
//                   }),
//                 },
//                 {
//                   translateX: this.animatedValue.interpolate({
//                     inputRange: [0, 1],
//                     outputRange: [0, 150], // 0 : 150, 0.5 : 75, 1 : 0
//                   }),
//                 },
//               ],
//             }}></Animated.View>
//         </TouchableOpacity>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   fadingContainer: {
//     padding: 20,
//     backgroundColor: 'powderblue',
//   },
//   fadingText: {
//     fontSize: 28,
//   },
//   buttonRow: {
//     flexBasis: 100,
//     justifyContent: 'space-evenly',
//     marginVertical: 16,
//   },
// });

// export default Booking;
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

  const headerRef = useRef(null);

  const scrollToView = () => {
    // 获取ScrollView和目标视图的node handles
    const scrollViewNode = findNodeHandle(scrollViewRef.current);
    const targetViewNode = findNodeHandle(targetViewRef.current);

    if (scrollViewNode && targetViewNode && headerRef.current) {
      targetViewRef?.current?.measureLayout(
        headerRef.current,
        (left, top, width, height) => {
          console.log('test');
          // 使用得到的top位置来滚动到目标视图
          console.log('top:', top, 'height:', height);
          // scrollViewRef.current?.scrollTo({y: top, animated: true});
        },
        error => {
          console.error(error);
        },
      );
    }
  };

function App() {
  return (
    <View style={styles.container}>
      <Animated.ScrollView ref={scrollViewRef} style={styles.scrollView}>
        {/* 添加一些占位内容 */}
        <View style={{height: 800, backgroundColor: 'red'}}>
          <Text>scrollview头部</Text>
        </View>
        {/* 这是我们想要滚动到的视图 */}
        <View ref={targetViewRef} style={styles.targetView}>
          <Text>这是目标位置</Text>
        </View>
        <View style={{height: 800, backgroundColor: 'orange'}} ref={headerRef}>
          <Text>scrollview尾部</Text>
        </View>
      </Animated.ScrollView>
      <View style={{marginBottom: 20}}>
        <Button title="滚动到目标位置" onPress={scrollToView} />
      </View>
    </View>
  );
}

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
