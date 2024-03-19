import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {GestureHandlerRootView, ScrollView} from 'react-native-gesture-handler';

const App = () => {
  const [outerScrollEnabled, setOuterScrollEnabled] = useState(true);

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <ScrollView
        scrollEnabled={outerScrollEnabled}
        style={styles.outerScroll}
        onScroll={({nativeEvent}) => {
          if (isCloseToBottom(nativeEvent)) {
            setOuterScrollEnabled(true);
          }
        }}
        scrollEventThrottle={400}>
        <View style={styles.content}>
          <View
            style={{
              height: 300,
              backgroundColor: '#eee',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text>头部区域模拟</Text>
          </View>
          <ScrollView
            nestedScrollEnabled={true}
            style={styles.innerScroll}
            onScrollBeginDrag={() => setOuterScrollEnabled(false)}
            onMomentumScrollEnd={() => setOuterScrollEnabled(true)}>
            {Array(30)
              .fill('')
              .map((_, i) => (
                <View
                  style={{
                    height: 100,
                    backgroundColor: 'yellow',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text>item - {i}</Text>
                </View>
              ))}
          </ScrollView>
        </View>
      </ScrollView>
    </GestureHandlerRootView>
  );
};

const isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}) => {
  const paddingToBottom = 20;
  return (
    layoutMeasurement.height + contentOffset.y >=
    contentSize.height - paddingToBottom
  );
};

const styles = StyleSheet.create({
  outerScroll: {
    flex: 1,
  },
  content: {},
  innerScroll: {
    marginTop: 20,
    backgroundColor: '#ccc',
    height: 700,
  },
});

export default App;
