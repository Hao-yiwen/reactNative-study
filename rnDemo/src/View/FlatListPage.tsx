import React, {useRef, useState} from 'react';
import {View, Text, Pressable, FlatList} from 'react-native';

const List = () => {
  const [data, setData] = useState(Array.from({length: 100}, (_, i) => i));

  const list = useRef<FlatList<number> | null>(null);

  const removeItem = (item: number) => {
    setData(
      data.filter(dataItem => {
        return dataItem !== item;
      }),
    );
    // This must be called before `LayoutAnimation.configureNext` in order for the animation to run properly.
    // list.current?.prepareForLayoutAnimationRender();
    // // After removing the item, we can start the animation.
    // LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  };

  const renderItem = ({item}: {item: number}) => {
    return (
      <Pressable
        onPress={() => {
          removeItem(item);
        }}>
        <View>
          <Text>Cell Id: {item}</Text>
        </View>
      </Pressable>
    );
  };

  return (
    <FlatList
      // Saving reference to the `FlashList` instance to later trigger `prepareForLayoutAnimationRender` method.
      ref={list}
      // This prop is necessary to uniquely identify the elements in the list.
      keyExtractor={(item: number) => {
        return item.toString();
      }}
      renderItem={renderItem}
      data={data}
    />
  );
};

export default List;
