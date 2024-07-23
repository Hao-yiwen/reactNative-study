import React from 'react';
import {View, Text, Image, StyleSheet, I18nManager} from 'react-native';

const App = () => {
  return (
    <View style={styles.container} collapsable={true}>
      <Text style={styles.text}>
        هنا نص باللغة العربية
        <Image resizeMode="contain" source={{uri: 'https://via.placeholder.com/20'}} style={styles.image} />
        مزود بصورة
      </Text>
      <View style={{flexDirection: 'row-reverse', alignItems: 'center'}}>
        <Image source={{uri: 'https://via.placeholder.com/20'}} style={{width: 20, height: 20}} />
        <Text style={{writingDirection: 'rtl'}}>هذا نص مع صورة</Text>
      </View>
      <Text style={styles.text}>
        ehhehehehahehah
        <Image source={{uri: 'https://via.placeholder.com/20'}} style={styles.image} />
        ehhehehehahehah
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  text: {
    fontSize: 18,
    writingDirection: I18nManager.isRTL ? 'rtl' : 'ltr',
  },
  image: {
    width: 20,
    height: 20,
    marginLeft: 5,
    marginRight: 5,
  },
});

export default App;
