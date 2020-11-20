import React from 'react';
import { View, Text, StyleSheet,FlatList } from 'react-native';

const ListScreen = () =>{
    const friends = [
        {name: 'Friend1', age: 20 },
        {name: 'Friend2', age: 2},
        {name: 'Friend3', age: 3},
        {name: 'Friend4', age: 55},
        {name: 'Friend5', age: 522},
        {name: 'Friend6', age: 21}
    ];

    return (
    <FlatList
        keyExtractor={friend => friend.name}
        data={friends} 
        renderItem={({ item })=>{
          return <Text style={styles.textStyle}>
              {item.name}- Age{item.age} </Text>;
         }}
    />
    );

};

const styles = StyleSheet.create({
    textStyle:{
        marginVertical: 50
    }
});

export default ListScreen; 