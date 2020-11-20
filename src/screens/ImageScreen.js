import React from 'react';
import { Text, StyleSheet,View, Button, TouchableOpacity } from 'react-native';
import ImageDetail from '../components/ImageDetails';
import { ForceTouchGestureHandler } from 'react-native-gesture-handler';

const ImageScreen = () =>{
    return <View> 
            <ImageDetail 
            title="Forest" 
            imageSource={require('../assets/image1.png')}
            imageDe
            />
            <ImageDetail 
            title="Beach" 
            imageSource={require('../assets/image1.png')}
            />
            <ImageDetail 
                title="Mountain" 
                imageSource={require('../assets/image1.png')}
            />
            <ImageDetail 
                title="Sea" 
                imageSource={require('../assets/image1.png')}
            />
        </View>

};

const styles = StyleSheet.create({  });

export default ImageScreen;