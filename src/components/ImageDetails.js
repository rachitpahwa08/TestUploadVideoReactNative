import React from 'react';
import { Text, StyleSheet,View, Button, Image, TouchableOpacity } from 'react-native';

const ImageDetails = props =>{
    return (<View>
        <Image source={props.imageSource}/>
        <Text>{props.title}</Text>
    </View>
    );
};

const styles = StyleSheet.create({});

export default ImageDetails;