import React, {useRef} from 'react';
import {View, Button, Text, UIManager, findNodeHandle} from 'react-native';

const MeasureExample = () => {
  const viewRef = useRef(null);

  const measureView = () => {
    const node = findNodeHandle(viewRef.current);
    node &&
      UIManager.measure(node, (x, y, width, height, pageX, pageY) => {
        console.log(
          `Component dimensions: ${width}x${height}, position: ${pageX},${pageY}`,
        );
        // x,y 是相对于父视图的位置
        // pageX, pageY 是相对于应用的根视图（通常是屏幕本身）的位置
      });
    viewRef.current.measure((x, y, width, height, pageX, pageY) => {
      console.log(
        `11Component dimensions: ${width}x${height}, position: ${pageX},${pageY}`,
      );
      // x,y 是相对于父视图的位置
      // pageX, pageY 是相对于应用的根视图（通常是屏幕本身）的位置
    });
  };

  return (
    <View>
      <View
        ref={viewRef}
        style={{width: 100, height: 100, backgroundColor: 'red', margin: 20}}>
        <Text>Measure me</Text>
      </View>
      <Button title="Measure" onPress={measureView} />
    </View>
  );
};

export default MeasureExample;
