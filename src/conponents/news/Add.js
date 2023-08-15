import {
  StyleSheet, Text, View, Pressable,
  Image, TextInput, Modal, Alert, TouchableOpacity
} from 'react-native'
import React, { useState, useCallback } from 'react'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { uploadImage, addNews } from './NewService';

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
            <Text>Add Cover Photo</Text>
          </Pressable>
      }
      <TextInput
        style={styles.txtInput}
        value={title}
        onChangeText={setTitle}
        placeholder="Title"
      />
      <TextInput
        style={styles.txtInput}
        value={content}
        onChangeText={setContent}
        placeholder="Content"
        multiline={true}
        numberOfLines={10}
      />
      <View style={{marginTop:100,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
        <TouchableOpacity   onPress={save} style={{}}>
          <Text style={styles.txtSave} >Save</Text>
        </TouchableOpacity>
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
  txtSave: {
    color: '#fff',
    backgroundColor: '#1877F2',
    width: 100,
    height: 50,
    borderRadius: 8,
    borderWidth: 1,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  txtInput: {
    borderRadius: 8,
    marginTop: 16,
    borderWidth: 1,
  },
  modalView: {
    backgroundColor: '#fff',
    width: '100%',
    height: 200,
    borderRadius: 20,
    padding: 16,
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
  }
})