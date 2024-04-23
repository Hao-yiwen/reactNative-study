import React, {useEffect} from 'react';
import {View, Text, Animated} from 'react-native';
import type {TabItemProps} from './Tab';

const TabItem = ({
  item,
  active,
  onTabChange,
}: {item: TabItemProps; onTabChange: any} & {active: Boolean}) => {
  const tabItemAnimatedValue = React.useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.spring(tabItemAnimatedValue, {
      toValue: active ? 1 : 0,
      useNativeDriver: false,
    }).start();
  }, [active, tabItemAnimatedValue]);

  return (
    <Animated.View
      onTouchStart={event => {
        onTabChange({currentTab: item, event});
      }}
      key={item.index}
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: tabItemAnimatedValue.interpolate({
          inputRange: [0, 1],
          outputRange: ['skyblue', 'purple'],
        }),
      }}>
      <Text>{item.title}</Text>
    </Animated.View>
  );
};

export default TabItem;
