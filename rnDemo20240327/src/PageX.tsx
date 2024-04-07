import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Button,
  UIManager,
  findNodeHandle,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const Index = () => {
  const [selectItem, setSelectItem] = useState(0);
  const scrollviewRef = useRef<any>();
  const textRef1 = useRef<any>();
  const textRef2 = useRef<any>();

  useEffect(() => {
    console.log('selectItem:', selectItem);
    scrollviewRef.current.scrollTo({
      x: selectItem * Dimensions.get('screen').width,
      animated: true,
    });
  }, [selectItem]);

  return (
    <SafeAreaView>
      <View style={{flexDirection: 'row', height: 70, alignItems: 'center'}}>
        <TouchableOpacity onPress={() => setSelectItem(0)}>
          <Text>item1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{marginLeft: 30}}
          onPress={() => setSelectItem(1)}>
          <Text>item2</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        scrollEnabled={false}
        ref={scrollviewRef}
        horizontal={true}
        style={{width: Dimensions.get('screen').width}}>
        <ScrollView
          nestedScrollEnabled={true}
          horizontal={true}
          style={{
            height: 100,
            backgroundColor: 'red',
            width: Dimensions.get('screen').width,
          }}>
          <View>
            <Text>item1</Text>
          </View>
          <View style={{marginLeft: 700, marginRight: 200}}>
            <Text ref={textRef1}>item2</Text>
          </View>
        </ScrollView>
        <ScrollView
          nestedScrollEnabled={true}
          horizontal={true}
          style={{
            height: 100,
            backgroundColor: 'orange',
            width: Dimensions.get('screen').width,
          }}>
          <View>
            <Text>item1</Text>
          </View>
          <View style={{marginLeft: 700, marginRight: 200}}>
            <Text ref={textRef2}>item2</Text>
          </View>
        </ScrollView>
      </ScrollView>
      <Button
        title="点击测量textRef1"
        onPress={() => {
          textRef1.current.measure((x, y, width, height, pageX, pageY) => {
            console.log(
              'x:',
              x,
              'y:',
              y,
              'width:',
              width,
              'height:',
              height,
              'pageX:',
              pageX,
              'pageY:',
              pageY,
            );
          });
          UIManager.measure(
            findNodeHandle(textRef1.current),
            (x, y, width, height, pageX, pageY) => {
              console.log(
                'x:',
                x,
                'y:',
                y,
                'width:',
                width,
                'height:',
                height,
                'pageX:',
                pageX,
                'pageY:',
                pageY,
              );
            },
          );
        }}
      />
      <Button
        title="点击测量textRef2"
        style={{marginTop: 20}}
        onPress={() => {
          textRef2.current.measure((x, y, width, height, pageX, pageY) => {
            console.log(
              'x:',
              x,
              'y:',
              y,
              'width:',
              width,
              'height:',
              height,
              'pageX:',
              pageX,
              'pageY:',
              pageY,
            );
          });
          UIManager.measure(
            findNodeHandle(textRef2.current),
            (x, y, width, height, pageX, pageY) => {
              console.log(
                'x:',
                x,
                'y:',
                y,
                'width:',
                width,
                'height:',
                height,
                'pageX:',
                pageX,
                'pageY:',
                pageY,
              );
            },
          );
        }}
      />
    </SafeAreaView>
  );
};

export default Index;

