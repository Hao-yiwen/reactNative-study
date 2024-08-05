import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';

const MyComponent = ({text, extraContent}) => {
  const [isTextOverflow, setIsTextOverflow] = useState(false);
  const [isMeasured, setIsMeasured] = useState(false);
  const containerWidth = Dimensions.get('window').width - 40;

  useEffect(() => {
    if (isMeasured) {
      setIsMeasured(false);
    }
  }, []);

  const onTextLayout = event => {
    console.log('event', event.nativeEvent.layout);
    const {width} = event.nativeEvent.layout;
    if (width > containerWidth) {
      setIsTextOverflow(true);
    }
    setIsMeasured(true);
  };

  return (
    <View>
      <Text onLayout={onTextLayout} style={[styles.text, styles.measureText]} numberOfLines={1}>
        {text}
      </Text>
      {isMeasured && (
        <View style={styles.container}>
          <Text style={styles.text} numberOfLines={1}>
            {text}
          </Text>
          {!isTextOverflow && <Text style={styles.extraContent}>{extraContent}</Text>}
        </View>
      )}
    </View>
  );
};

const App = () => {
  const longText = 'This is a very long text that might overflow the container width.';
  const shortText = 'Short text';
  const extraContent = ' - Extra Content';

  return (
    <View style={styles.appContainer}>
      <MyComponent text={longText} extraContent={extraContent} />
      <MyComponent text={shortText} extraContent={extraContent} />
      <Text>12312</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    padding: 20,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  text: {
    color: 'black',
    flex: 1,
    marginRight: 10,
  },
  measureText: {
    color: 'black',
    position: 'absolute',
    opacity: 0,
    top: -9999,
    left: -9999,
  },
  extraContent: {
    color: 'black',
  },
});

export default App;
