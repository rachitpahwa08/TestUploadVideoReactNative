import React from 'react';
import { PermissionsAndroid } from 'react-native';
import { Text, StyleSheet,View, Button, TouchableOpacity } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import axios from 'axios'
const options = {
  title: 'Video Picker', 
  mediaType: 'video', 
  storageOptions:{
    skipBackup:true,
    path:'images'
  }
};

const HomeScreen = props => {
 
  return <View style={{flex:1,justifyContent:"center",alignContent:"center"}}>
    <Button title="Click"
      onPress={async()=>{
        //const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE);
        //await PermissionsAndroid.requestMultiple([PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE]);
        const granted=await PermissionsAndroid.requestMultiple([PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE]);
        console.log("grant",granted);
        ImagePicker.showImagePicker(options, (response) => {
          console.log('Response = ', response);
         
          if (response.didCancel) {
            console.log('User cancelled image picker');
          } else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
          } else if (response.customButton) {
            console.log('User tapped custom button: ', response.customButton);
          } else {
            const source = { uri: response.uri };
            console.log("filename",response.fileName)
            // You can also display the image using data:
            // const source = { uri: 'data:image/jpeg;base64,' + response.data };
            const data=new FormData();
            data.append('image-type','mp4');
            data.append('image',{
              name:'testvideo.mp4',
              uri:response.uri,
              type: 'video/mp4',
            })
            axios.post("https://www.infonlive.com/api/upload-image",data,{
              headers: {
                  Accept: 'application/json',
                  'Content-Type': 'multipart/form-data'
              }})
              .then((result)=>{
                console.log("result",result.data)

              })
              .catch((error) => {
                console.log(error);
            });
          }
        });
      }}
    >

    </Button>
    </View>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
