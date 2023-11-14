import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider} from 'react-redux';
import store from '@src/Store/store';
import Page1 from '@src/View/Page1';
import Page2 from '@src/View/Page2';
import Page3 from '@src/View/Page3';
import Page4 from '@src/View/Page4';
import Page5 from '@src/View/Page5';
import Page6 from '@src/View/Page6';
import Page7 from '@src/View/Page7';
import Animate from '@src/View/Animate';
import Timer from '@src/View/Timer';
import MapView from './src/View/MapView';
import DatePicker from '@src/View/DatePicker';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Page1" component={Page1} options={{title: 'Overview'}} />
          <Stack.Screen name="Page2" component={Page2} options={{title: 'Page2'}} />
          <Stack.Screen name="Page3" component={Page3} options={{title: 'Page3'}} />
          <Stack.Screen name="Page4" component={Page4} options={{title: 'Style'}} />
          <Stack.Screen name="Page5" component={Page5} options={{title: 'Lottie'}} />
          <Stack.Screen name="Page6" component={Page6} options={{title: 'Image'}} />
          <Stack.Screen name="Page7" component={Page7} options={{title: 'Page7'}} />
          <Stack.Screen name="Animate" component={Animate} options={{title: 'Animate'}} />
          <Stack.Screen name="Timer" component={Timer} options={{title: 'Timer'}} />
          <Stack.Screen name="MapView" component={MapView} options={{title: 'MapView'}} />
          <Stack.Screen name="DatePicker" component={DatePicker} options={{title: 'DatePicker'}} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
