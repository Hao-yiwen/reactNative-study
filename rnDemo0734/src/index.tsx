/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useCallback, useEffect} from 'react';
import {Image, NativeEventEmitter, NativeModules} from 'react-native';
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

import {Colors} from 'react-native/Libraries/NewAppScreen';
import CalendarModules from './native/CalendarModules';
import ImagePickerModule from './native/ImagePickerModule';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

function App(): React.JSX.Element {
  const [imageUri, setImageUri] = React.useState<string>('');
  const isDarkMode = useColorScheme() === 'dark';

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

  const handleChooseImage = useCallback(async () => {
    const uri = await ImagePickerModule.pickImage();
    console.log(`uri: ${uri}`);
    setImageUri(uri);
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
        {imageUri && (
          <Image source={{uri: imageUri}} width={200} height={200} />
        )}
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
        <Pressable onPress={handleChooseImage} style={styles.pressContainer}>
          <Text>chooseImage</Text>
        </Pressable>
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
