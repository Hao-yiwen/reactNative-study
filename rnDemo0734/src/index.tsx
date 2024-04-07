/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useCallback, useEffect, useRef} from 'react';
import {
  findNodeHandle,
  Image,
  NativeEventEmitter,
  NativeModules,
  UIManager,
} from 'react-native';
import {
  Alert,
  DeviceEventEmitter,
  Dimensions,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import ImageView from './native/ImageView';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import CalendarModules from './native/CalendarModules';
import MyCustomView from './native/MyCustomView';
import {MyViewManager} from './native/MyViewManager';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const createFragment = viewId => {
  return UIManager.dispatchViewManagerCommand(
    viewId,
    UIManager.MyViewManager.Commands.create.toString(),
    [viewId],
  );
};

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const myViewManagerRef = useRef(null);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  useEffect(() => {
    // const eventEmitter = DeviceEventEmitter.addListener(
    //   'EventReminder',
    //   params => {
    //     console.log('EventReminder received,' + JSON.stringify(params));
    //   },
    // );
    const eventEmitter = new NativeEventEmitter(NativeModules.CalendarModule);
    let eventListener = eventEmitter.addListener('EventReminder', params => {
      console.log('EventReminder received,' + JSON.stringify(params));
    });
    return () => {
      eventListener.remove();
    };
  }, []);

  useEffect(() => {
    const viewId = findNodeHandle(myViewManagerRef.current);
    createFragment(viewId);
  }, []);

  const handlePress = useCallback(() => {
    console.log('Pressable pressed');
    CalendarModules.createCalendarEvent(
      'testName',
      'testLocation',
      (error, eventId) => {
        if (error) {
          console.error(`Error found: ${error}`);
        }
        console.log(`Created a new event with id ${eventId}`);
      },
    );
  }, []);

  const handleAlert = useCallback(() => {
    const {EVENT_NAME} = CalendarModules.getConstants();
    Alert.alert(EVENT_NAME);
  }, []);

  const handleCalendarOther = useCallback(() => {
    CalendarModules.createCalendarEventOther(
      'testName',
      'testLocation',
      eventId => {
        console.log(`Created a new event with id ${eventId}`);
      },
      error => {
        console.error(`Error found: ${error}`);
      },
    );
  }, []);

  const handleCalendarPromise = useCallback(async () => {
    try {
      const str = await CalendarModules.createCalendarEventPromise(
        'error',
        'testLocation',
      );
      console.log(`str: ${str}`);
    } catch (error) {
      console.error(`Error found: ${error}`);
    }
  }, []);

  const handleCreateEvent = useCallback(() => {
    CalendarModules.createEvent('testName');
  }, []);

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View style={styles.pageContainer}>
        <Text style={{color: 'yellow'}}>hello android</Text>
        <Pressable onPress={handlePress} style={styles.pressContainer}>
          <Text>createCalendarEvent</Text>
        </Pressable>
        <Pressable onPress={handleAlert} style={styles.pressContainer}>
          <Text>getConstants</Text>
        </Pressable>
        <Pressable onPress={handleCalendarOther} style={styles.pressContainer}>
          <Text>getConstants</Text>
        </Pressable>
        <Pressable
          onPress={handleCalendarPromise}
          style={styles.pressContainer}>
          <Text>createCalendarEventPromise</Text>
        </Pressable>
        <Pressable onPress={handleCreateEvent} style={styles.pressContainer}>
          <Text>createEvent</Text>
        </Pressable>
        <Text
          onLayout={() => {
            console.log('onLayout');
          }}>
          hello
        </Text>
        <ImageView
          src={[
            {
              uri: 'https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/image8-2.jpg?width=595&height=400&name=image8-2.jpg',
            },
          ]}
          style={{width: 50, height: 50}}
        />
        <MyCustomView
          onChangeMessage={event => {
            console.log('event:', event);
          }}
          src={[
            {
              uri: 'https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/image8-2.jpg?width=595&height=400&name=image8-2.jpg',
            },
          ]}
          style={{width: 100, height: 100}}
        />
        <MyViewManager
          style={{width: 200, height: 200}}
          ref={myViewManagerRef}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  pageContainer: {
    width: width,
    height: height,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pressContainer: {
    marginTop: 40,
  },
});

export default App;
