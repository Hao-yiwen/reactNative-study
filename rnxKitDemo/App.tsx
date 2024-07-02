import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/Home';
import WebViewPage from './src/WebViewPage';
import {StatusBar} from 'react-native';
import LodashPage from './src/LodashPage';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <>
      <StatusBar backgroundColor="#f4511e" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              title: 'Overview',
              headerStyle: {
                backgroundColor: '#f4511e',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
          <Stack.Screen
            name="WebViewPage"
            component={WebViewPage}
            options={{title: 'WebViewPage'}}
          />
          <Stack.Screen
            name="LodashPage"
            component={LodashPage}
            options={{title: 'LodashPage'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;
