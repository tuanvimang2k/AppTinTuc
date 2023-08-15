import {
  StyleSheet, Text, View, Pressable,
  Image, TextInput, Modal, Alert, TouchableOpacity,
} from 'react-native'
import React, { useContext, useState, useCallback } from 'react'
import { UserContext } from '../user/UserContext'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import AxiosInstance from '../helpers/AxiosInstance';



const Edit = () => {
  const { infouser, setifoUser } = useContext(UserContext);
  console.log(infouser);
  const capter = useCallback(async () => {
    const resurlt = await launchCamera();
    console.log(resurlt.assets[0].uri);

    // upload image
    const formData = new FormData();
    formData.append('image', {
      uri: resurlt.assets[0].uri,
      type: 'image/jpeg',
      name: 'image.jpg',
    });
    const response = await AxiosInstance('multipart/form-data').post('/media/upload', formData);
    console.log(response.data.path);

    setifoUser({ ...infouser, avatar: response.data.path });
  }, []);

  const updateProfile = async () =>{
    const response = await AxiosInstance().post("/users/update-profile",{name : infouser.name ,address : infouser.address,
      phone: infouser.phone, avatar: infouser.avatar, dob: infouser.dob});
      if(response.error == false){
          console.log("Oke em iu")
      }else{
        console.log("Không ổn rồi em ơi")
      }
  }


  return (
    <View style={styles.container}>
      <View style={styles.contaidau}>
        <Pressable ><Image source={require('../../../media/xx.png')} ></Image></Pressable>
        <Text style={styles.txtCreat}>Edit Profile</Text>
        <Pressable onPress={updateProfile}><Image source={require('../../../media/tichvang.png')}></Image></Pressable>
      </View>
      <TouchableOpacity style={styles.contaiprofile} onPress={capter}>
        {
          infouser.avatar == ""
            ? <Image source={require('../../../media/a.png')} style={styles.imgprofile}></Image>
            : <Image source={{ uri: infouser.avatar }} style={styles.imgprofile}></Image>
        }
        <Pressable style={styles.presprofile} >
          <Image source={require('../../../media/camera.png')}></Image>
        </Pressable>
      </TouchableOpacity>
      <View style={styles.contaiinput}>
        <Text style={styles.txt}>Name</Text>
        <TextInput style={styles.input} value={infouser.name} onChangeText={(text => setifoUser({ ...infouser, name: text }))}></TextInput>
      </View>
      <View style={styles.contaiinput}>
        <Text style={styles.txt} value={infouser.address}>Address</Text>
        <TextInput style={styles.input} value={infouser.address} onChangeText={(text => setifoUser({ ...infouser, address: text }))}></TextInput>
      </View>
      <View style={styles.contaiinput}>
        <Text style={styles.txt}>Phone</Text>
        <TextInput style={styles.input} value={infouser.phone} onChangeText={(text => setifoUser({ ...infouser, phone: text }))}></TextInput>
      </View>
      <View style={styles.contaiinput}>
        <Text style={styles.txt}>Email*</Text>
        <TextInput style={styles.input} value={infouser.email} onChangeText={(text => setifoUser({ ...infouser, email: text }))}></TextInput>
      </View>
      <View style={styles.contaiinput}>
        <Text style={styles.txt}>Dob</Text>
        <TextInput style={styles.input} value={infouser.dob} onChangeText={(text => setifoUser({ ...infouser, dob: text }))}></TextInput>
      </View>
    </View>
  )
}

export default Edit
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    padding: 24,
  },
  contaidau: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  txtCreat: {
    fontFamily: 'Sofia Pro',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 16,
    color: '#000000',
  },
  contaiprofile: {
    width: 140,
    height: 140,

    justifyContent: 'flex-end',
    marginLeft: 100,
    marginTop: 15,
  },
  imgprofile: {
    width:'100%',
    height:'100%',
    borderRadius: 100,
  },
  presprofile: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    width: 30,
    height: 30,
    borderRadius: 100,
    backgroundColor: '#1877F2',
    marginLeft: 92,
  },
  input: {
    borderWidth: 0.8,
    borderRadius: 6,
    width: '100%',
    height: 45,
    marginTop: 4,
  },
  contaiinput: {
    marginTop: 16,
  },
  txt: {
    fontFamily: 'Sofia Pro',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 14,
    color: '#4E4B66',
    letterSpacing: 0.12,
  }
})