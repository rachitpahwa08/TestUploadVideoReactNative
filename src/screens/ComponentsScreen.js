import React from 'react';
import  { Text,StyleSheet,View,Button } from 'react-native';
 
const ComponentsScreen = () => {
    return <View>
        <Text style={styles.textStyle}>This is the components screen</Text>
        <Button title="Just Button">
    </Button>
        </View>
};

const styles = StyleSheet.create({
    textStyle:{
        fontSize: 30
    }
});

export default ComponentsScreen;
 