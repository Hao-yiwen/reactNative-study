import React, {useCallback} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  Dimensions,
  RefreshControl,
  ScrollView,
  LayoutAnimation,
  Platform,
  UIManager,
  StatusBar,
  Image,
  Pressable,
  FlatList,
} from 'react-native';
import Tab, {TabItemProps} from './components/Tab';

const TABLIST = [
  {
    title: 'Tab1',
    index: 0,
    component: (
      <View>
        <FlatList
          horizontal
          data={Array.from({length: 100})}
          renderItem={({index}) => {
            if (index % 2 == 0) {
              return (
                <View
                  style={{
                    height: 100,
                    backgroundColor: 'green',
                    margin: 10,
                    width: 60,
                  }}>
                  <Text>{index}</Text>
                </View>
              );
            }
            return (
              <Pressable
                onPress={() => {
                  console.log('pressable');
                }}>
                <View
                  style={{
                    height: 100,
                    backgroundColor: 'blue',
                    margin: 10,
                    width: 60,
                  }}>
                  <Text>{index}</Text>
                </View>
              </Pressable>
            );
          }}
        />
      </View>
    ),
  },
  {
    title: 'Tab2',
    index: 1,
    component: (
      <View>
        <Animated.ScrollView>
          <Image
            source={{
              uri: 'http://b.hiphotos.baidu.com/image/pic/item/9d82d158ccbf6c81b94575cfb93eb13533fa40a2.jpg',
            }}
          />
          <Text>
            euismod, nisl vitae tincidunt ultricies, nunc nunc lacinia nunc,
            vitae tincidunt elit lectus sit amet nunc. Sed in nunc euismod,
            tincidunt elit sed, lacinia nunc. Sed in nunc euismod, tincidunt
            elit sed, lacinia nunc. Sed in nunc euismod, tincidunt elit sed,
            lacinia nunc. Sed in nunc euismod, tincidunt elit sed, lacinia nunc.
            Sed in nunc euismod, tincidunt elit sed, lacinia nunc. Sed in nunc
            euismod, tincidunt elit sed, lacinia nunc. Sed in nunc euismod,
            tincidunt elit sed, lacinia nunc. Sed in nunc euismod, tincidu
          </Text>
          <Image
            source={{
              uri: 'http://b.hiphotos.baidu.com/image/pic/item/9d82d158ccbf6c81b94575cfb93eb13533fa40a2.jpg',
            }}
          />
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            euismod, nisl vitae tincidunt ultricies, nunc nunc lacinia nunc,
            vitae tincidunt elit lectus sit amet nunc. Sed in nunc euismod,
            tincidunt elit sed, lacinia nunc. Sed in nunc euismod, tincidunt
            elit sed, lacinia nunc. Sed in nunc euismod, tincidunt elit sed,
            lacinia nunc. Sed in nunc euismod, tincidunt elit sed, lacinia nunc.
            Sed in nunc euismod, tincidunt elit sed, lacinia nunc. Sed in nunc
            euismod, tincidunt elit sed, lacinia nunc. Sed in nunc euismod,
            tincidunt elit sed, lacinia nunc. Sed in nunc euismod, tincidunt
            elit sed, lacinia nunc. Sed in nunc euismod, tincidunt elit sed,
            lacinia nunc. Sed in nunc euismod, tincidunt elit sed, lacinia nunc.
            Sed in nunc euismod, tincidunt elit sed, lacinia nunc. Sed in nunc
            euismod, tincidunt elit sed, lacinia nunc. Sed in nunc euismod,
            tincidunt elit sed, lacinia nunc. Sed in nunc euismod, tincidunt
            elit sed, lacinia nunc. Sed in nunc euismod, tincidunt elit sed,
            lacinia nunc. Sed in nunc euismod, tincidunt elit sed, lacinia nunc.
            Sed in nunc euismod, tincidunt elit sed, lacinia nunc. Sed in nunc
            euismod, tincidunt elit sed, lacinia nunc. Sed in nunc euismod,
            tincidunt elit sed, lacinia nunc. Sed in nunc euismod, tincidunt
            elit sed, lacinia nunc. Sed in nunc euismod, tincidunt elit sed,
            lacinia nunc.
          </Text>
          <Image
            source={{
              uri: 'http://b.hiphotos.baidu.com/image/pic/item/9d82d158ccbf6c81b94575cfb93eb13533fa40a2.jpg',
            }}
          />
          <View></View>
        </Animated.ScrollView>
      </View>
    ),
  },
  {
    title: 'Tab3',
    index: 2,
    component: (
      <View>
        <Animated.ScrollView>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            euismod, nisl vitae tincidunt ultricies, nunc nunc lacinia nunc,
            vitae tincidunt elit lectus sit amet nunc. Sed in nunc euismod,
            tincidunt elit sed, lacinia nunc. Sed in nunc euismod, tincidunt
            elit sed, lacinia nunc. Sed in nunc euismod, tincidunt elit sed,
            lacinia nunc. Sed in nunc euismod, tincidunt elit sed, lacinia nunc.
            Sed in nunc euismod, tincidunt elit sed, lacinia nunc. Sed in nunc
            euismod, tincidunt elit sed, lacinia nunc. Sed in nunc euismod,
            tincidunt elit sed, lacinia nunc. Sed in nunc euismod, tincidunt
            elit sed, lacinia nunc. Sed in nunc euismod, tincidunt elit sed,
            lacinia nunc. Sed in nunc euismod, tincidunt elit sed, lacinia nunc.
            Sed in nunc euismod, tincidunt elit sed, lacinia nunc. Sed in nunc
            euismod, tincidunt elit sed, lacinia nunc. Sed in nunc euismod,
            tincidunt elit sed, lacinia nunc. Sed in nunc euismod, tincidunt
            elit sed, lacinia nunc. Sed in nunc euismod, tincidunt elit sed,
            lacinia nunc. Sed in nunc euismod, tincidunt elit sed, lacinia nunc.
            Sed in nunc euismod, tincidunt elit sed, lacinia nunc. Sed in nunc
            euismod, tincidunt elit sed, lacinia nunc. Sed in nunc euismod,
            tincidunt elit sed, lacinia nunc. Sed in nunc euismod, tincidunt
            elit sed, lacinia nunc. Sed in nunc euismod, tincidunt elit sed,
            lacinia nunc. Sed in nunc euismod, tincidunt elit sed, lacinia nunc.
            Sed in nunc euismod, tincidunt elit sed, lacinia nunc. Sed in nunc
            euismod, tincidunt elit sed, lacinia nunc. Sed in nunc euismod,
            tincidunt elit sed, lacinia nunc. Sed in nunc euismod, tincidunt
            elit sed, lacinia nunc. Sed in nunc euismod, tincidunt elit sed,
            lacinia nunc. Sed in nunc euismod, tincidunt elit sed, lacinia nunc.
            Sed in nunc euismod, tincidunt elit sed, lacinia nunc. Sed in nunc
            euismod, tincidunt elit sed, lacinia nunc. Sed in nunc euismod,
            tincidunt elit sed, lacinia nunc. Sed in nunc euismod, tincidunt
            elit sed, lacinia nunc. Sed in nunc euismod, tincidunt elit sed,
            lacinia nunc. Sed in nunc euismod, tincidunt elit sed, lacinia nunc.
            Sed in nunc euismod, tincidunt elit sed, lacinia nunc. Sed in nunc
            euismod, tincidunt elit sed, lacinia nunc. Sed in nunc euismod,
            tincidunt elit sed, lacinia nunc. Sed in nunc euismod, tincidunt
            elit sed, lacinia nunc. Sed in nunc euismod, tincidunt elit sed,
            lacinia nunc. Sed in nunc euismod, tincidunt elit sed, lacinia nunc.
            Sed in nunc euismod, tincidunt elit sed, lacinia nunc. Sed in nunc
            euismod, tincidunt elit sed, lacinia nunc. Sed in nunc euismod,
            tincidunt elit sed, lacinia nunc. Sed in nunc euismod, tincidunt
            elit sed, lacinia nunc. Sed in nunc euismod, tincidunt elit sed,
            lacinia nunc. Sed in nunc euismod, tincidunt elit sed, lacinia nunc.
            Sed in nunc euismod, tincidunt elit sed, lacinia nunc. Sed in nunc
            euismod, tincidunt elit sed, lacinia nunc. Sed in nunc euismod,
            tincidunt elit sed, lacinia nunc. Sed in nunc euismod, tincidunt
            elit sed, lacinia nunc. Sed in nunc euismod, tincidunt elit sed,
            lacinia nunc. Sed in nunc euismod, tincidunt elit sed, lacinia nunc.
            Sed in nunc euismod, tincidunt elit sed, lacinia nunc. Sed in nunc
            euismod, tincidunt elit sed, lacinia nunc. Sed in nunc euismod,
            tincidunt elit sed, lacinia nunc. Sed in nunc euismod, tincidunt
            elit sed, lacinia nunc. Sed in nunc euismod, tincidunt elit sed,
            lacinia nunc. Sed in nunc euismod, tincidunt elit sed, lacinia nunc.
            Sed in nunc euismod, tincidunt elit sed, lacinia nunc. Sed in nunc
            euismod, tincidunt elit sed, lacinia nunc. Sed in nunc euismod,
            tincidunt elit sed, lacinia nunc. Sed in nunc euismod, tincidunt
            elit sed, lacinia nunc. Sed in nunc euismod, tincidunt elit sed,
            lacinia nunc. Sed in nunc euismod, tincidunt elit sed, lacinia nunc.
            Sed in nunc euismod, tincidunt elit sed, lacinia nunc. Sed in nunc
            euismod, tincidunt elit sed, lacinia nunc. Sed in nunc euismod,
            tincidunt elit sed, lacinia nunc. Sed in nunc euismod, tincidunt
            elit sed, lacinia nunc. Sed in nunc euismod, tincidunt elit sed,
            lacinia nunc. Sed in nunc euismod, tincidunt elit sed, lacinia nunc.
            Sed in nunc euismod, tincidunt elit sed, lacinia nunc. Sed in nunc
            euismod, tincidunt elit sed, lacinia nunc. Sed in nunc euismod,
            tincidunt elit sed, lacinia nunc. Sed in nunc euismod, tincidunt
            elit sed, lacinia nunc. Sed in nunc euismod, tincidunt elit sed,
            lacinia nunc. Sed in nunc euismod, tincidunt elit sed, lacinia nunc.
            Sed in nunc euismod, tincidunt elit sed, lacinia nunc. Sed in nunc
            euismod, tincidunt elit sed, lacinia nunc. Sed in nunc euismod,
            tincidunt elit sed, lacinia nunc. Sed in nunc euismod, tincidunt
            elit sed, lacinia nunc. Sed in nunc euismod, tincidunt elit sed,
            lacinia nunc. Sed in nunc euismod, tincidunt elit sed, lacinia nunc.
            Sed in nunc euismod, tincidunt elit sed, lacinia nunc. Sed in nunc
            euismod, tincidunt elit sed, lacinia nunc. Sed in nunc euismod,
            tincidunt elit sed, lacinia nunc. Sed in nunc euismod, tincidunt
            elit sed, lacinia nunc. Sed in nunc euismod, tincidunt elit sed,
            lacinia nunc. Sed in nunc euismod, tincidunt elit sed, lacinia nunc.
            Sed in nunc euismod, tincidunt elit sed, lacinia nunc. Sed in nunc
            euismod, tincidunt elit sed, lacinia nunc. Sed in nunc euismod,
            tincidunt elit sed, lacinia nunc. Sed in nunc euismod, tincidunt
            elit sed, lacinia nunc. Sed in nunc euismod, tincidunt elit sed,
            lacinia nunc. Sed in nunc euismod, tincidunt elit sed, lacinia nunc.
            Sed in nunc euismod, tincidunt elit sed, lacinia nunc. Sed in nunc
            euismod, tincidunt elit sed, lacinia nunc. Sed in nunc euismod,
            tincidunt elit sed, lacinia nunc. Sed in nunc euismod, tincidunt
            elit sed, lacinia nunc. Sed in nunc euismod, tincidunt elit sed,
            lacinia nunc. Sed in nunc euismod, tincidunt elit sed, lacinia nunc.
            Sed in nunc euismod, tincidunt elit sed, lacinia nunc. Sed in nunc
            euismod, tincidunt elit sed, lacinia nunc. Sed in nunc euismod,
            tincidunt elit sed, lacinia nunc. Sed in nunc euismod, tincidunt
            elit sed, lacinia nunc. Sed in nunc euismod, tincidunt elit sed,
            lacinia nunc. Sed in nunc euismod, tincidunt elit sed, lacinia nunc.
            Sed in nunc euismod, tincidunt elit sed, lacinia nunc. Sed in nunc
            euismod, tincidunt elit sed, lacinia nunc. Sed in nunc euismod,
            tincidunt elit sed, lacinia nunc. Sed in nunc euismod, tincidunt
            elit sed, lacinia nunc. Sed in nunc euismod, tincidunt elit sed,
            lacinia nunc. Sed in nunc euismod, tincidunt elit sed, lacinia nunc.
            Sed in nunc euismod, tincidunt elit sed, lacinia nunc. Sed in nunc
            euismod, tincidunt elit sed, lacinia nunc. Sed in nunc euismod,
            tincidunt elit sed, lacinia nunc. Sed in nunc euismod, tincidunt
            elit sed, lacinia nunc. Sed in nunc euismod, tincidunt elit sed,
            lacinia nunc. Sed in nunc euismod, tincidunt elit sed, lacinia nunc.
            Sed in nunc euismod, tincidunt elit sed, lacinia nunc. Sed in nunc
            euismod, tincidunt elit sed, lacinia nunc. Sed in nunc euismod,
            tincidunt elit sed, lacinia nunc. Sed in nunc euismod, tincidunt
            elit sed, lacinia nunc. Sed in nunc euismod, tincidunt elit sed,
            lacinia nunc. Sed in nunc euismod, tincidunt elit sed, lacinia nunc.
            Sed in nunc euismod, tincidunt elit sed, lacinia nunc. Sed in nunc
            euismod, tincidunt elit sed, lacinia nunc. Sed in nunc euismod,
            tincidunt elit sed, lacinia nunc. Sed in nunc euismod, tincidunt
            elit sed, lacinia nunc. Sed in nunc euismod, tincidunt elit sed,
            lacinia nunc. Sed in nunc euismod, tincidunt elit sed, lacinia nunc.
            Sed in nunc euismod, tincidunt elit sed, lacinia nunc. Sed in nunc
            euismod, tincidunt elit sed, lacinia nunc. Sed in nunc euismod,
            tincidunt elit sed, lacinia nunc. Sed in nunc euismod, tincidunt
            elit sed, lacinia nunc. Sed in nunc euismod, tincidunt elit sed,
            lacinia nunc. Sed in nunc euismod, tincidunt elit sed, lacinia nunc.
            Sed in nunc euismod, tincidunt elit sed, lacinia nunc. Sed in nunc
            euismod, tincidunt elit sed, lacinia nunc. Sed in nunc euismod,
            tincidunt elit sed, lacinia nunc. Sed in nunc euismod, tincidunt
            elit sed, lacinia nunc. Sed in nunc euismod, tincidunt elit sed,
            lacinia nunc. Sed in nunc euismod, tincidunt elit sed, lacinia nunc.
            Sed in nunc euismod, tincidunt elit sed, lacinia nunc. Sed in nunc
            euismod, tincidunt elit sed, lacinia nunc. Sed in nunc euismod,
            tincidunt elit sed, lacinia nunc. Sed in nunc euismod, tincidunt
            elit sed, lacinia nunc. Sed in nunc euismod, tincidunt elit sed,
            lacinia nunc. Sed in nunc euismod, tincidunt elit sed, lacinia nunc.
            Sed in nunc euismod, tincidunt elit sed, lacinia nunc. Sed in nunc
            euismod, tincidunt elit sed, lacinia nunc. Sed in nunc euismod,
            tincidunt elit sed, lacinia nunc. Sed in nunc euismod, tincidunt
            elit sed, lacinia nunc. Sed in nunc euismod, tincidunt elit sed,
            lacinia nunc. Sed in nunc euismod, tincidunt elit sed, lacinia nunc.
            Sed in nunc euismod, tincidunt elit sed, lacinia nunc. Sed in nunc
            euismod, tincidunt elit sed, lacinia nunc. Sed in nunc euismod,
            tincidunt elit sed, lacinia nunc. Sed in nunc euismod, tincidunt
            elit sed, lacinia nunc. Sed in nunc euismod, tincidunt elit sed,
            lacinia nunc. Sed in nunc euismod, tincidunt elit sed, lacinia nunc.
            Sed in nunc euismod, tincidunt elit sed, lacinia nunc. Sed in nunc
            euismod, tincidunt elit sed, lacinia nunc. Sed in nunc euismod,
            tincidunt elit sed, lacinia nunc. Sed in nunc euismod, tincidunt
            elit sed, lacinia nunc. Sed in nunc euismod, tincidunt elit sed,
            lacinia nunc. Sed in nunc euismod, tincidunt elit sed, lacinia nunc.
            Sed in nunc euismod, tincidunt elit sed, lacinia nunc. Sed in nunc
            euismod, tincidunt elit sed, lacinia nunc. Sed in nunc euismod,
            tincidunt elit sed, lacinia nunc. Sed in nunc euismod, tincidunt
            elit sed, lacinia nunc. Sed in nunc euismod, tincidunt elit sed,
            lacinia nunc. Sed in nunc euismod, tincidunt elit sed, lacinia nunc.
            Sed in nunc euismod, tincidunt elit sed, lacinia nunc. Sed in nunc
            euismod, tincidunt elit sed, lacinia nunc. Sed in nunc euismod,
            tincidunt elit sed, lacinia nunc. Sed in nunc euismod, tincidunt
            elit sed, lacinia nunc. Sed in nunc euismod, tincidunt elit sed,
            lacinia nunc. Sed in nunc euismod, tincidunt elit sed, lacinia nunc.
            Sed in nunc euismod, tincidunt elit sed, lacinia nunc. Sed in nunc
            euismod, tincidunt elit sed, lacinia nunc. Sed in nunc euismod,
            tincidunt elit sed, lacinia nunc. Sed in nunc euismod, tincidunt
            elit sed, lacinia nunc. Sed in nunc euismod, tincidunt elit sed,
            lacinia nunc. Sed in nunc euismod, tincidunt elit sed, lacinia nunc.
            Sed in nunc euismod, tincidunt elit sed, lacinia nunc. Sed in nunc
            euismod, tincidunt elit sed, lacinia nunc. Sed in nunc euismod,
            tincidunt elit sed, lacinia nunc. Sed in nunc euismod, tincidunt
          </Text>
          <Image
            style={{
              width: Dimensions.get('window').width - 20,
              height: 100,
              margin: 10,
            }}
            source={{
              uri: 'http://e.hiphotos.baidu.com/image/pic/item/a1ec08fa513d2697e542494057fbb2fb4316d81e.jpg',
            }}
          />
        </Animated.ScrollView>
      </View>
    ),
  },
];

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const Index = () => {
  const [currentTab, setCurrentTab] = React.useState<TabItemProps>(TABLIST[0]);

  const handleTabChange = useCallback((event: any) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    setCurrentTab(event.currentTab);
  });

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
        // marginTop: StatusBar.currentHeight,
      }}>
      <Tab
        tabList={TABLIST}
        onTabChange={handleTabChange}
        currentTab={currentTab}
      />
    </View>
  );
};

export default Index;
