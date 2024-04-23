import React, {Touch} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  Dimensions,
  RefreshControl,
  ScrollView,
  UIManager,
  Platform,
} from 'react-native';
import TabItem from './TabItem';

export interface TabItemProps {
  title: string;
  index: number;
  component?: React.ReactNode;
}

export interface TabProps {
  tabList: Array<TabItemProps>;
  currentTab: TabItemProps;
  onTabChange: (event: TabItemEventProps) => void;
}

export interface TabItemEventProps {
  currentTab: TabItemProps;
  event: any;
}

const Index: React.FC<TabProps> = ({tabList, onTabChange, currentTab}) => {
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          height: 50,
        }}>
        {tabList.map((item, index) => {
          return (
            <TabItem
              item={item}
              index={index}
              onTabChange={onTabChange}
              active={currentTab === item}
            />
          );
        })}
      </View>
      <View style={{flex: 1, backgroundColor: 'skyblue'}}>
        {currentTab.component ?? <View>Page is Null</View>}
      </View>
    </View>
  );
};

export default Index;
