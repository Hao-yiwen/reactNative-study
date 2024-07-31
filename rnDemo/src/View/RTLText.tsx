import React, {useEffect} from 'react';
import {View, Text, I18nManager, StyleSheet} from 'react-native';

export default function App() {
  useEffect(() => {
    // 强制启用 RTL 布局
    I18nManager.forceRTL(true);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        هذا هو السطر الأول. هذا هو السطر الثاني. هذا هو السطر الثالث. هذا هو السطر الرابع.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
  },
  text: {
    fontSize: 20,
    lineHeight: 30, // 行高
    margin: 10,
    writingDirection: 'rtl',
  },
});
