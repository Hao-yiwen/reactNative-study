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
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
