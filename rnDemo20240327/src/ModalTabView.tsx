import React, {useState} from 'react';
import {
  View,
  Text,
  Modal,
  Button,
  StatusBar,
  ScrollView,
  TouchableWithoutFeedback,
  Pressable,
  Dimensions,
  Image,
} from 'react-native';
import TabScrollview from './TabScrollview';

const Index = () => {
  const [tabVisiable, setTabVisiable] = useState(false);
  const [easyModalVisible, setEasyModalVisible] = useState(false);
  return (
    <View style={{flex: 1, marginTop: 20}}>
      <Button title="Open Modal" onPress={() => setTabVisiable(true)} />
      <View style={{marginTop: 20}}>
        <Button
          title="Open Easy Modal"
          onPress={() => setEasyModalVisible(true)}
        />
      </View>
      <View style={{flex: 1}}>
        <TabScrollview />
      </View>
      <Modal visible={easyModalVisible} transparent>
        <View style={{flex: 1}}>
          <Pressable
            onPress={() => {
              setEasyModalVisible(false);
            }}
            style={{flex: 1}}>
            <View
              style={{
                flex: 1,
                justifyContent: 'flex-end',
              }}>
              <TouchableWithoutFeedback>
                <View style={{height: 300}}>
                  <View
                    style={{
                      flex: 1,
                      backgroundColor: 'white',
                      borderTopLeftRadius: 30,
                      borderTopRightRadius: 30,
                      alignItems: 'center',
                    }}>
                    <Text style={{fontSize: 30, marginTop: 6}}>弹窗头部</Text>
                    <Text>1. 这是一个简单的弹窗，点击空白处关闭弹窗</Text>
                  </View>
                </View>
              </TouchableWithoutFeedback>
            </View>
          </Pressable>
        </View>
      </Modal>
      <Modal visible={tabVisiable} transparent>
        <Pressable
          onPress={() => {
            setTabVisiable(false);
          }}
          style={{
            flex: 1,
            justifyContent: 'flex-end',
          }}>
          <View
            style={{
              flex: 1,
              justifyContent: 'flex-end',
            }}>
            <TouchableWithoutFeedback>
              <View style={{height: 500, backgroundColor: 'white'}}>
                <ScrollView style={{flex: 1}}>
                  <View
                    style={{
                      height: 50,
                      backgroundColor: 'white',
                      borderTopLeftRadius: 30,
                      borderTopRightRadius: 30,
                      alignItems: 'center',
                    }}>
                    <Text style={{fontSize: 30, marginTop: 6}}>弹窗头部</Text>
                  </View>
                  <View style={{padding: 10, height: 300}}>
                    <TabScrollview />
                  </View>
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
                </ScrollView>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </Pressable>
      </Modal>
    </View>
  );
};

export default Index;
