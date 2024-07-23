import React, {useState, useEffect, useCallback, useRef} from 'react';
import {View, Text, Button, TextInput} from 'react-native';

// 模拟复杂异步操作
const simulateAsyncOperation = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('done');
    }, 500); // 模拟500ms的异步操作
  });
};

// 第一层组件
const FirstLevelComponent = () => {
  const [firstLevelState, setFirstLevelState] = useState('1111111111');

  useEffect(() => {
    console.log(performance.now() + ' FirstLevelComponent render time');
    return () => {
      console.log(
        performance.now() + ' FirstLevelComponent remove render time',
      );
    };
  });

  return (
    <View style={{padding: 20, backgroundColor: '#f0f0f0', marginBottom: 10}}>
      <Text>First Level Component</Text>
      <Text>{firstLevelState}</Text>
      <SecondLevelComponent setFirstLevelState={setFirstLevelState} />
    </View>
  );
};

// 第二层组件
const SecondLevelComponent = ({setFirstLevelState}) => {
  const [secondLevelState, setSecondLevelState] = useState('1111111111');
  const thirdInputRef = useRef(null);
  const thirdViewRef = useRef(null);
  const [isShowThirdLevel, setIsShowThirdLevel] = useState(true);

  const updateFirstLevelState = useCallback(
    async (ref, viewRef) => {
      thirdInputRef.current = ref;
      thirdViewRef.current = viewRef;
      setSecondLevelState('2222222222');
      await simulateAsyncOperation();
      thirdInputRef.current.focus();
      thirdViewRef.current.setNativeProps({
        style: {backgroundColor: 'red'},
      });
      setFirstLevelState('2222222222');
      setIsShowThirdLevel(false);
    },
    [setFirstLevelState],
  );

  useEffect(() => {
    console.log(performance.now() + ' SecondLevelComponent render time');
    return () => {
      console.log(
        performance.now() + ' SecondLevelComponent remove render time',
      );
    };
  });

  return (
    <View style={{padding: 20, backgroundColor: '#d0d0d0', marginBottom: 10}}>
      <Text>Second Level Component</Text>
      <Text>{secondLevelState}</Text>
      {isShowThirdLevel && (
        <ThirdLevelComponent setSecondLevelState={updateFirstLevelState} />
      )}
    </View>
  );
};

// 第三层组件
const ThirdLevelComponent = ({setSecondLevelState}) => {
  const [thirdLevelState, setThirdLevelState] = useState('11111');
  const inputRef = useRef(null);
  const viewRef = useRef(null);

  const handleClick = () => {
    // 更新第三层组件的 state
    setThirdLevelState('2222222');

    // 同时触发第二层组件的 hook
    setTimeout(() => {
      setSecondLevelState(inputRef.current, viewRef.current);
    }, 100);
  };

  useEffect(() => {
    console.log(performance.now() + ' ThirdLevelComponent render time');
    return () => {
      console.log(
        performance.now() + ' ThirdLevelComponent remove render time',
      );
    };
  });

  return (
    <View
      style={{padding: 20, backgroundColor: '#b0b0b0', marginBottom: 10}}
      ref={viewRef}>
      <Text>Third Level Component</Text>
      <Text>{thirdLevelState}</Text>
      <TextInput placeholder="这是一个简单的输入框～" ref={inputRef} />
      <Button title="Update State" onPress={handleClick} />
    </View>
  );
};

// 渲染第一层组件
const App = () => {
  return (
    <View style={{padding: 50}}>
      <FirstLevelComponent />
    </View>
  );
};

export default App;
