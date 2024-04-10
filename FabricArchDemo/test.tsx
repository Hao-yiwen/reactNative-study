import React, {useRef} from 'react';
import {Navigator} from 'react-native';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  SectionList,
  StatusBar,
  Button,
  findNodeHandle,
} from 'react-native';
import {NativeModules} from 'react-native';
const {StatusBarManager} = NativeModules;

console.log(StatusBarManager, StatusBarManager.HEIGHT, 'STATUSBAR');

const DATA = [
  {
    title: 'Main dishes',
    data: ['Pizza', 'Burger', 'Risotto'],
  },
  {
    title: 'Sides',
    data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
  },
  {
    title: 'Drinks',
    data: ['Water', 'Coke', 'Beer'],
  },
  {
    title: 'Desserts',
    data: ['Cheese Cake', 'Ice Cream'],
  },
];

const App = () => {
  const titleRef = useRef();
  const sectionListRef = useRef();

  console.log(StatusBarManager, 'StatusBarManager');

  return (
    <SafeAreaView style={styles.container}>
      <SectionList
        ref={sectionListRef}
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({item}) => (
          <View style={styles.item}>
            <Text style={styles.title}>{item}</Text>
          </View>
        )}
        renderSectionHeader={({section: {title}}) => (
          <View ref={titleRef}>
            <Text style={styles.header}>{title}</Text>
          </View>
        )}
      />
      <Button
        title="scroll to title"
        onPress={() => {
          titleRef.current.measureLayout(
            findNodeHandle(sectionListRef.current),
            (x, y, width, height) => {
              console.log('x:', x, 'y:', y, 'width:', width, 'height:', height);
              sectionListRef.current.scrollToLocation({
                animated: true,
                itemIndex: 0,
                sectionIndex: 0,
                viewOffset: y,
              });
            },
          );
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 32,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
  },
});

export default App;
