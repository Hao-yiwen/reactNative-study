import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity,
  Modal,
  Dimensions,
  Button,
} from 'react-native';

const DATA = Array.from({length: 300}, (_, i) => ({})).map((_, index) => ({
  id: index.toString(),
  title: `Item ${index}`,
}));

type ItemProps = {title: string};

const App = () => {
  const [data, setData] = React.useState(DATA);
  const [visible, setVisible] = React.useState(false);

  const Item = ({title, id}: ItemProps) => (
    <View style={styles.item} key={id}>
      <TouchableOpacity
        onPress={() => {
          const tmpData = [...DATA];
          const index = tmpData.findIndex(item => item.id === id);
          tmpData[index] = {...tmpData[index], title: 'Updated!'};
          setData(tmpData);
        }}>
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          setVisible(true);
        }}>
        <Text style={{color: 'black'}}>打开Flatlist弹窗</Text>
      </TouchableOpacity>
      <FlatList
        data={data}
        renderItem={({item}) => <Item title={item.title} id={item.id} />}
        keyExtractor={item => item.id}
      />
      <Modal visible={visible} animationType="slide" transparent>
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.1)',
          }}>
          <View
            style={{
              height: Dimensions.get('screen').height * 0.7,
              borderRadius: 20,
              backgroundColor: 'white',
              width: '100%',
            }}>
            <Button
              title="点击关闭弹窗"
              onPress={() => {
                setVisible(false);
              }}
            />
            <FlatList
              data={data}
              renderItem={({item}) => <Item title={item.title} id={item.id} />}
              keyExtractor={item => item.id}
            />
            <TouchableOpacity
              onPress={() => {
                setVisible(false);
              }}>
              <Text>关闭</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default App;
