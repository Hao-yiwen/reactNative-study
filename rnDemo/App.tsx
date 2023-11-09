import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider} from 'react-redux';
import Page1 from './View/Page1';
import Page2 from './View/Page2';
import store from './Store/store';
import Page3 from './View/Page3';
import Page4 from './View/Page4';
import Page5 from './View/Page5';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Page1"
            component={Page1}
            options={{title: 'Overview'}}
          />
          <Stack.Screen
            name="Page2"
            component={Page2}
            options={{title: 'Page2'}}
          />
          <Stack.Screen
            name="Page3"
            component={Page3}
            options={{title: 'Page3'}}
          />
          <Stack.Screen
            name="Page4"
            component={Page4}
            options={{title: 'Style'}}
          />
          <Stack.Screen
            name="Page5"
            component={Page5}
            options={{title: 'Lottie'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
