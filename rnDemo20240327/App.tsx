import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/Home';
import Page1 from './src/Page1';
import MeasureScreen from './src/Measure';
import FindNodeHandle from './src/FindNodeHandle';
import UIManager from './src/UIManager';
import LayoutAnimationExample from './src/LayoutAnimation';
import SectionListRef from './src/SectionListRef';
import Animated from './src/Animated';
import PageX from './src/PageX';
import Sectionlist from './src/SectionList';
import SetNativeProps from './src/SetNativeProps';
import FlatlistTmp from './src/FlatlistTmp';
import ModalTabView from './src/ModalTabView';

const Stack = createNativeStackNavigator();

function App() {
  useEffect(() => {
    const data = new Date('2024/02/15');
    console.log(data);
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{title: 'Overview'}}
        />
        <Stack.Screen
          name="Page1"
          component={Page1}
          options={{title: 'Page1'}}
        />
        <Stack.Screen
          name="Measure"
          component={MeasureScreen}
          options={{title: 'Measure'}}
        />
        <Stack.Screen
          name="FindNodeHandle"
          component={FindNodeHandle}
          options={{title: 'FindNodeHandle'}}
        />
        <Stack.Screen
          name="UIManager"
          component={UIManager}
          options={{title: 'UIManager'}}
        />
        <Stack.Screen
          name="LayoutAnimation"
          component={LayoutAnimationExample}
          options={{title: 'LayoutAnimation'}}
        />
        <Stack.Screen
          name="SectionListRef"
          component={SectionListRef}
          options={{title: 'SectionListRef'}}
        />
        <Stack.Screen
          name="Animated"
          component={Animated}
          options={{title: 'Animated'}}
        />
        <Stack.Screen
          name="PageX"
          component={PageX}
          options={{title: 'PageX'}}
        />
        <Stack.Screen
          name="Sectionlist"
          component={Sectionlist}
          options={{title: 'Sectionlist'}}
        />
        <Stack.Screen
          name="SetNativeProps"
          component={SetNativeProps}
          options={{title: 'SetNativeProps'}}
        />
        <Stack.Screen
          name="FlatlistTmp"
          component={FlatlistTmp}
          options={{title: 'FlatlistTmp'}}
        />
        <Stack.Screen
          name="ModalTabView"
          component={ModalTabView}
          options={{title: 'ModalTabView'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
