import React, {useRef, useEffect} from 'react';
import {Text, View, Button} from 'react-native';
// @ts-ignore
import SQLite from 'react-native-sqlite-storage';

export default ({navigation}: any) => {
  const db: any = useRef(null);

  useEffect(() => {
    db.current = SQLite.openDatabase(
      {
        name: 'MainDB',
        location: 'default',
      },
      () => {
        console.log('数据库打开成功！');
      },
      (error: any) => {
        console.log('数据库打开失败：', error);
      },
    );

    // 创建表
    db.current.transaction((tx: any) => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS Users (UserID INTEGER PRIMARY KEY AUTOINCREMENT, Name TEXT);',
      );
    });

    db.current.transaction((tx: any) => {
      tx.executeSql(
        'INSERT INTO Users (Name) VALUES (?)',
        ['test'],
        (_: any, results: any) => {
          console.log('Results', results.rowsAffected);
          if (results.rowsAffected > 0) {
            console.log('数据插入成功！');
          } else console.log('数据插入失败！');
        },
      );
    });
  }, []);

  return (
    <View>
      <Text>Page2</Text>
      <Button
        title="返回Page1"
        onPress={() => {
          navigation.goBack();
        }}
      />
      <Button
        title="查询数据库"
        onPress={() => {
          // 查询数据库
          db.current.transaction(tx => {
            tx.executeSql('SELECT * FROM Users', [], (tx, results) => {
              var len = results.rows.length;
              for (let i = 0; i < len; i++) {
                let row = results.rows.item(i);
                console.log(`UserID: ${row.UserID}, Name: ${row.Name}`);
              }
            });
          });
        }}
      />
    </View>
  );
};
