import React, {useEffect} from 'react';
import {View, Text, Button} from 'react-native';

export default () => {
  const [count, setCount] = React.useState(0);

  const fetchData = async () => {
    await new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, 1000);
    });
  };

  useEffect(() => {
    requestAnimationFrame(() => {
      console.log('requestAnimationFrame');
    });
    setImmediate(() => {
      console.log('setImmediate');
    });
    setTimeout(() => {
      console.log('setTimeout');
    }, 100);

    setCount(count + 1);
    fetchData();
  }, []);

  return (
    <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
      <Text>Timer</Text>
      <Text>{count}</Text>
      <Button
        title="点击"
        onPress={() => {
          setCount(count + 1);
        }}
      />
    </View>
  );
};
