import {
  StyleSheet, Text, View, Pressable,
  Image, TextInput, Modal, Alert,
} from 'react-native'
import React, { useState, useCallback } from 'react'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { uploadImage, addNews } from './NewService'

// hooks tiểu học: useState, useEffect, useContext
// hooks trung học: useCallback, useMemo, useRef, memo

const Add = (props) => {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [imagePath, setImagePath] = useState(null);

  const [modalVisible, setModalVisible] = useState(false);

  const { navigation } = props;

  const takePhoto = useCallback(async (response) => {
    if (response.didCancel) return;
    if (response.errorCode) return;
    if (response.errorMessage) return;
    if (response.assets && response.assets.length > 0) {
      const asset = response.assets[0];
      setImage(asset.uri);
      setModalVisible(false);
      // upload image
      const formData = new FormData();
      formData.append('image', {
        uri: asset.uri,
        type: asset.type,
        name: asset.fileName,
      });
      const data = await uploadImage(formData);
      setImagePath(data.path);
    }
  }, []);

  const openCamera = useCallback(async () => {
    const options = {
      mediaType: 'photo',
      quality: 1,
      saveToPhotos: true,
    };
    await launchCamera(options, takePhoto);
  }, []);

  const openLibrary = useCallback(async () => {
    const options = {
      mediaType: 'photo',
      quality: 1,
      saveToPhotos: true,
    };
    await launchImageLibrary(options, takePhoto);
  }, []);

  const save = useCallback(async () => {
    const data = {
      title,
      content,
      image: imagePath,
    };
    const response = await addNews(data);
    console.log(response);
    // tự viết
    Alert.alert('Thêm thành công');
    setTitle('');
    setContent('');
    setImage(null);
    setImagePath(null);
  }, [title, content, imagePath]);

  return (
    <View style={styles.container}>
      <View style={styles.contaidau}>
        <Image source={require('../../../media/backl4.png')}></Image>
        <Text style={styles.txtCreat}>Create News</Text>
        <Image source={require('../../../media/chamdung.png')}></Image>
      </View>
      {
        image ?
          <Pressable
            onPress={() => setModalVisible(true)}
            style={styles.cover}>
            <Image source={{ uri: image }}
              style={{ width: '100%', height: 183 }} />
          </Pressable>
          :
          <Pressable
            onPress={() => setModalVisible(true)}
            style={styles.cover}>
            <Image source={require('../../../media/adddd.png')}></Image>
            <Text>Add Cover Photo</Text>
          </Pressable>
      }
      <TextInput
        value={title}
        onChangeText={setTitle}
        placeholder="New title"
      />
      <TextInput
        value={content}
        onChangeText={setContent}
        placeholder="Add News/Article"
        multiline={true}
        numberOfLines={10}
      />
      <View style={styles.contaiedit}>
        <Image source={require('../../../media/b.png')}></Image>
        <Image source={require('../../../media/i.png')}></Image>
        <Image source={require('../../../media/canhduoi.png')}></Image>
        <Image source={require('../../../media/canhdeu.png')}></Image>
        <Image source={require('../../../media/sale.png')}></Image>
      </View>
      <View style={styles.contaiSave}>
        <View style={styles.contaieditduoi}>
          <Image source={require('../../../media/Aa.png')}></Image>
          <Image source={require('../../../media/canle.png')}></Image>
          <Image source={require('../../../media/anhne.png')}></Image>
          <Image source={require('../../../media/chamto.png')}></Image>
        </View>
        <Pressable onPress={save} style={styles.presSave}>
          <Text>Publish</Text>
        </Pressable>
      </View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => { }}>
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <Text onPress={openCamera}>Chụp ảnh</Text>
            <Text onPress={openLibrary}>Chọn ảnh</Text>
            <Text onPress={() => setModalVisible(false)}>Cancel</Text>
          </View>
        </View>
      </Modal>



    </View>
  )
}

export default Add

const styles = StyleSheet.create({
  modalView: {
    backgroundColor: '#fff',
    width: '100%',
    height: 200,
    borderRadius: 20,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cover: {
    marginTop: 15,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 183,
    backgroundColor: '#EEF1F4'
  },
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    padding: 16,
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
  presSave: {
    width: 100,
    height: 40,
    backgroundColor: '#EEF1F4',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contaiedit: {
    marginTop: 180,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 150,
    marginLeft:20,
  },
  contaiSave:{
    marginTop:20,
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems:'center',
  },
  contaieditduoi: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 150,
  },
})