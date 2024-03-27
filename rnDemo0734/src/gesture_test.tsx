import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
// import {GestureHandlerRootView, ScrollView} from 'react-native-gesture-handler';

const App = () => {
  const [outerScrollEnabled, setOuterScrollEnabled] = useState(true);

  return (
    <View style={{flex: 1}}>
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
            <Text>外部scrollview</Text>
          </View>
          <ScrollView style={styles.innerScroll}>
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
                  <Text>里面的scrollview</Text>
                </View>
              ))}
          </ScrollView>
        </View>
      </ScrollView>
    </View>
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
    // height: 700,
  },
});

export default App;
