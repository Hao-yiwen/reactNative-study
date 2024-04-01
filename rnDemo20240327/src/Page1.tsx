import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  FlatList,
  Text,
  ActivityIndicator,
  StyleSheet,
  Button,
} from 'react-native';

const ITEMS_PER_PAGE = 30;
const TOTAL_ITEMS = 100;

const FlatListExample = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const flatListRef = useRef(null);

  const loadData = async () => {
    if (data.length >= TOTAL_ITEMS || loading) return;
    setLoading(true);

    // 模拟网络请求延时
    await new Promise(resolve => setTimeout(resolve, 1500));

    // 生成新数据
    const newData = Array.from({length: ITEMS_PER_PAGE}, (_, index) => ({
      id: data.length + index,
      text: `Item ${data.length + index + 1}`,
    }));

    setData(prevData => [...prevData, ...newData]);
    setLoading(false);
  };

  // 使用 useEffect 加载初始数据
  useEffect(() => {
    loadData();
  }, []);

  const handleLoadMore = () => {
    loadData();
  };

  const triggerLoadMore = () => {
    // handleLoadMore();
    flatListRef.current.scrollToEnd();
  };

  const renderItem = ({item}) => (
    <View style={styles.item}>
      <Text style={styles.text}>{item.text}</Text>
    </View>
  );

  const renderFooter = () => {
    if (!loading) return null;
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" />
      </View>
    );
  };

  return (
    <View style={{flex: 1}}>
      <Button title="Load More" onPress={triggerLoadMore} />
      <FlatList
        ref={flatListRef}
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={renderFooter}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  text: {
    fontSize: 18,
  },
  loader: {
    marginVertical: 16,
    alignItems: 'center',
  },
});

export default FlatListExample;
