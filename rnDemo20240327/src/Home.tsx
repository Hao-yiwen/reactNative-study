import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, Button, ScrollView, SafeAreaView} from 'react-native';

const App: React.FC = () => {
  const navigation = useNavigation<any>();
  return (
    <SafeAreaView>
      <ScrollView
        onScroll={() => {
          console.log('onScroll');
        }}>
        <Button
          title="Page1"
          onPress={() => {
            console.log('Page1');
            navigation.navigate('Page1');
          }}
        />
        <Button
          title="Measure"
          onPress={() => {
            console.log('Measure');
            navigation.navigate('Measure');
          }}
        />
        <Button
          title="FindNodeHandle"
          onPress={() => {
            console.log('FindNodeHandle');
            navigation.navigate('FindNodeHandle');
          }}
        />
        <Button
          title="UIManager"
          onPress={() => {
            console.log('UIManager');
            navigation.navigate('UIManager');
          }}
        />
        <Button
          title="LayoutAnimation"
          onPress={() => {
            console.log('LayoutAnimation');
            navigation.navigate('LayoutAnimation');
          }}
        />
        <Button
          title="SectionListRef"
          onPress={() => {
            console.log('SectionListRef');
            navigation.navigate('SectionListRef');
          }}
        />
        <Button
          title="Animated"
          onPress={() => {
            console.log('Animated');
            navigation.navigate('Animated');
          }}
        />
        <Button
          title="PageX"
          onPress={() => {
            console.log('PageX');
            navigation.navigate('PageX');
          }}
        />
        <Button
          title="Sectionlist"
          onPress={() => {
            console.log('Sectionlist');
            navigation.navigate('Sectionlist');
          }}
        />
        <Button
          title="SetNativeProps"
          onPress={() => {
            console.log('SetNativeProps');
            navigation.navigate('SetNativeProps');
          }}
        />
        <Button
          title="FlatlistTmp"
          onPress={() => {
            console.log('FlatlistTmp');
            navigation.navigate('FlatlistTmp');
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
