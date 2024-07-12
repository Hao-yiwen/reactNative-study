// App.js

import React, {useEffect} from 'react';
import {SafeAreaView, FlatList, Text, ActivityIndicator, StyleSheet} from 'react-native';
import {useRequest} from 'ahooks';
import {add} from './utils/util';

const fetchUserList = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  if (!response.ok) {
    throw new Error('Failed to fetch user list');
  }
  return response.json();
};

const App = () => {
  const {data, error, loading} = useRequest(fetchUserList);

  useEffect(() => {
    add(1, 2);
    debugger;
    console.log('===global.setTimeout', global.setTimeout);
    console.log('===global.clearTimeout', global.clearTimeout);
  }, []);

  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </SafeAreaView>
    );
  }

  if (error) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.error}>Failed to load user list: {error.message}</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <Text style={styles.item}>
            {item.name} - {item.email}
          </Text>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  error: {
    color: 'red',
    fontSize: 18,
  },
});

export default App;
