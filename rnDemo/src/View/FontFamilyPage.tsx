import React from 'react';
import {Text, View} from 'react-native';

const Index: React.FC = () => {
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <Text style={{marginTop: 20}}>FontFamilyPage</Text>

      <View style={{marginTop: 20}}>
        <Text style={{fontFamily: 'AlimamaAgileVF-Thin', fontSize: 20}}>alimama AI Font</Text>
      </View>
    </View>
  );
};

export default Index;
