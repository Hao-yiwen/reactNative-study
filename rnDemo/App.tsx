import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import analytics from '@react-native-firebase/analytics';
import {Provider} from 'react-redux';
import store from '@src/Store/store';
import Home from '@src/Home';
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
import NativeModules from '@src/View/NativeModules';
import SwiftModule from '@src/View/SwiftModule';
import ScrollviewTest from '@src/View/ScrollviewTest';
import ScrollviewTest2 from '@src/View/ScrollviewTest2';
import AnimatedScrollview from '@src/View/AnimatedScrollview';
import ComponentApiTest from '@src/View/ComponentApiTest';
import Animated from '@src/View/Animated';
import Measure from '@src/View/Measure';
import FontFamilyPage from '@src/View/FontFamilyPage';
import FastImage from '@src/View/FastImage';
import {StatusBar} from 'react-native';
import ThirdModule from './src/View/ThirdModule';
import LodashPage from './src/View/LodashPage';
import AHooks from './src/View/AHooks';
import TextRTL from './src/View/TextRTL';
import FiberTest from './src/View/FiberTest';
import CustomAnimation from './src/View/CustomAnimation';
import JSTimersTest from './src/View/JSTimersTest';
import FlushListPage from './src/View/FlushListPage';
import FlatListPage from './src/View/FlatListPage';
import RTLText from './src/View/RTLText';
import GestureScrollview from './src/View/GestureScrollview';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import ImageTestPage from './src/View/ImagetTestPage';
import TextMeasure from './src/View/TextMeasure';

const Stack = createNativeStackNavigator();

function App() {
  const routeNameRef = React.useRef();
  const navigationRef = React.useRef();
  useEffect(() => {
    StatusBar.setBackgroundColor('white');
  }, []);
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Provider store={store}>
        <NavigationContainer
          ref={navigationRef}
          onReady={() => {
            routeNameRef.current = navigationRef.current.getCurrentRoute().name;
          }}
          onStateChange={async () => {
            const previousRouteName = routeNameRef.current;
            const currentRouteName = navigationRef.current.getCurrentRoute().name;

            if (previousRouteName !== currentRouteName) {
              await analytics().logScreenView({
                screen_name: currentRouteName,
                screen_class: currentRouteName,
              });
            }
            routeNameRef.current = currentRouteName;
          }}>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={{title: 'Overview'}} />
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
            <Stack.Screen name="NativeModules" component={NativeModules} options={{title: 'NativeModules'}} />
            <Stack.Screen name="SwiftModule" component={SwiftModule} options={{title: 'SwiftModule'}} />
            <Stack.Screen name="ScrollviewTest" component={ScrollviewTest} options={{title: 'ScrollviewTest'}} />
            <Stack.Screen name="ScrollviewTest2" component={ScrollviewTest2} options={{title: 'ScrollviewTest2'}} />
            <Stack.Screen
              name="AnimatedScrollview"
              component={AnimatedScrollview}
              options={{title: 'AnimatedScrollview'}}
            />
            <Stack.Screen name="ComponentApiTest" component={ComponentApiTest} options={{title: 'ComponentApiTest'}} />
            <Stack.Screen name="Animated" component={Animated} options={{title: 'Animated'}} />
            <Stack.Screen name="Measure" component={Measure} options={{title: 'Measure'}} />
            <Stack.Screen name="FontFamilyPage" component={FontFamilyPage} options={{title: 'FontFamilyPage'}} />
            <Stack.Screen name="FastImage" component={FastImage} options={{title: 'FastImage'}} />
            <Stack.Screen name="ThirdModule" component={ThirdModule} options={{title: 'ThirdModule'}} />
            <Stack.Screen name="LodashPage" component={LodashPage} options={{title: 'LodashPage'}} />
            <Stack.Screen name="AHooks" component={AHooks} options={{title: 'AHooks'}} />
            <Stack.Screen name="TextRTL" component={TextRTL} options={{title: 'TextRTL'}} />
            <Stack.Screen name="FiberTest" component={FiberTest} options={{title: 'FirberTest'}} />
            <Stack.Screen name="CustomAnimation" component={CustomAnimation} options={{title: 'CustomAnimation'}} />
            <Stack.Screen name="JSTimersTest" component={JSTimersTest} options={{title: 'JSTimersTest'}} />
            <Stack.Screen name="FlushListPage" component={FlushListPage} options={{title: 'FlushListPage'}} />
            <Stack.Screen name="FlatListPage" component={FlatListPage} options={{title: 'FlatListPage'}} />
            <Stack.Screen name="RTLText" component={RTLText} options={{title: 'RTLText'}} />
            <Stack.Screen
              name="GestureScrollview"
              component={GestureScrollview}
              options={{title: 'GestureScrollview'}}
            />
            <Stack.Screen name="ImageTestPage" component={ImageTestPage} options={{title: 'ImageTestPage'}} />
            <Stack.Screen name="TextMeasure" component={TextMeasure} options={{title: 'TextMeasure'}} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </GestureHandlerRootView>
  );
}

export default App;
