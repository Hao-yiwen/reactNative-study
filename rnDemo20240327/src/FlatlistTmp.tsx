import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

const DATA = Array.from({length: 100}, (_, i) => ({})).map((_, index) => ({
  id: index.toString(),
  title: `Item ${index}`,
}));

type ItemProps = {title: string};

const App = () => {
  const [data, setData] = React.useState(DATA);

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
      <FlatList
        data={data}
        renderItem={({item}) => <Item title={item.title} id={item.id} />}
        keyExtractor={item => item.id}
      />
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
