import React, {useState} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  LayoutAnimation,
  Platform,
  UIManager,
} from 'react-native';

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const LayoutAnimationExample = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpansion = () => {
    // 配置动画
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    setExpanded(!expanded);
  };

  return (
    <View style={styles.container}>
      <Button title="Toggle Expansion" onPress={toggleExpansion} />
      <View style={[styles.box, expanded ? styles.expanded : null]}>
        <Text>Expand Me!</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'skyblue',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  expanded: {
    height: 200, // 当expanded为true时，高度增加
  },
});

export default LayoutAnimationExample;
