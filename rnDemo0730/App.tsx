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
  Animated,
  PanResponder,
} from 'react-native';

const Index = () => {
  const [selectItem, setSelectItem] = useState(0);
  const scrollviewRef = useRef<any>();
  const textRef1 = useRef<any>();
  const textRef2 = useRef<any>();
  const scrollX = useRef(new Animated.Value(0)).current;
  const [pagexLog, setPagexLog] = useState('');
  const [uimanagerPageXLog, setUimanagerPageXLog] = useState('');

  useEffect(() => {
    console.log('selectItem:', selectItem);
    Animated.timing(scrollX, {
      toValue: -selectItem * Dimensions.get('screen').width,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [scrollX, selectItem]);

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
        <TouchableOpacity
          style={{marginLeft: 30}}
          onPress={() => setSelectItem(2)}>
          <Text>item3</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{marginLeft: 30}}
          onPress={() => setSelectItem(3)}>
          <Text>item4</Text>
        </TouchableOpacity>
      </View>
      <Animated.View
        ref={scrollviewRef}
        style={{
          transform: [{translateX: scrollX}],
          backgroundColor: 'orange',
          height: 100,
          flexDirection: 'row',
        }}>
        <View
          style={{
            width: Dimensions.get('screen').width,
            height: 100,
            backgroundColor: 'red',
          }}>
          <Text>item1</Text>
        </View>
        <View
          style={{
            width: Dimensions.get('screen').width,
            height: 100,
            backgroundColor: 'orange',
          }}>
          <Text>item2</Text>
        </View>
        <View
          style={{
            width: Dimensions.get('screen').width,
            height: 100,
            backgroundColor: 'pink',
          }}>
          <Text>item3</Text>
        </View>
        <View
          style={{
            width: Dimensions.get('screen').width,
            height: 100,
            backgroundColor: 'blue',
          }}>
          <ScrollView horizontal={true}>
            <View>
              <Text ref={textRef2}>item4</Text>
            </View>
            <View style={{marginLeft: 200}}>
              <Text ref={textRef2}>item4-2</Text>
            </View>
          </ScrollView>
        </View>
      </Animated.View>
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
            setPagexLog(
              'x:' +
                x +
                ' y:' +
                y +
                ' width:' +
                width +
                ' height:' +
                height +
                ' pageX:' +
                pageX +
                ' pageY:' +
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
              setUimanagerPageXLog(
                'x:' +
                  x +
                  ' y:' +
                  y +
                  ' width:' +
                  width +
                  ' height:' +
                  height +
                  ' pageX:' +
                  pageX +
                  ' pageY:' +
                  pageY,
              );
            },
          );
        }}
      />
      <View>
        <Text>measure结果如下:</Text>
        <Text>{pagexLog}</Text>
      </View>
      <View style={{marginTop: 20}}>
        <Text>UIManger.measure结果如下:</Text>
        <Text>{uimanagerPageXLog}</Text>
      </View>
    </SafeAreaView>
  );
};

export default Index;
