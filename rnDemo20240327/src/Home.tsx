import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, Button, ScrollView, SafeAreaView} from 'react-native';

const App: React.FC = () => {
  const navigation = useNavigation<any>();
  return (
    <SafeAreaView>
      <ScrollView>
        <Button
          title="Page1"
          onPress={() => {
            debugger;
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
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
