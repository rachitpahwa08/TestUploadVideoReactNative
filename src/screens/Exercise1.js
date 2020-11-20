import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

    
    const Exercise1 =() => {
        const name='Saami';
       
 return( 
    <View>
        <Text style = { styles.textStyle }>'React Native!'</Text>
        <Text style = { styles.textStyle1 }>'My name is { name }'</Text>
    </View>
 );  
    }
    
const styles=StyleSheet.create({
    textStyle:{
        fontSize: 45
    },
    textStyle1:{
        fontSize: 20
    }
});

export default Exercise1;