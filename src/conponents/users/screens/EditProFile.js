import {
    StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity,
    Pressable, Modal, ToastAndroid,RefreshControl
} from 'react-native'
import React, { useState, useContext, useCallback } from 'react'
import { UserContext } from '../UserContext'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { uploadImage } from '../../news/NewService';
import AxiosInstance from '../../../helper/AxiosInstance';

const EditProFile = (props) => {
    const { user, setUser } = useContext(UserContext);
    console.log(user);
    const [image, setImage] = useState(user.avatar);
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
            console.log(data.path);
            setImagePath(data.path);
            setUser({ ...user, avatar: data.path });
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

    const updateProfile = async () => {
        const response = await AxiosInstance().post("/users/update-profile", { name: user.name, address: user.address, phone: user.phone, dob: user.dob, avatar: user.avatar });
        if (response.error == false) {
            ToastAndroid.show("Cập nhật thành công", ToastAndroid.SHORT);
        } else {
            ToastAndroid.show("Cập nhật thất bại", ToastAndroid.SHORT);
        }
    };
    return (
        <View style={styles.container}>
            <Text style={styles.txtEditProFile} >EditProFile</Text>
            {/* <TouchableOpacity>
                {
                    user.avatar == "" ? <Image source={require('../../../../media/nonAvatar.png')} style={styles.img} />
                        : <Image source={{ uri: user.avatar }} style={styles.img} />
                }
            </TouchableOpacity> */}
            {
                image ?
                    <Pressable
                        onPress={() => setModalVisible(true)}
                        style={styles.cover}>
                        <Image source={{ uri: image }}
                            style={{ width: 200, height: 150 }} />
                    </Pressable>
                    :
                    <Pressable
                        onPress={() => setModalVisible(true)}
                        style={styles.cover}>
                        {/* <Text>Add Cover Photo</Text> */}
                        <Image source={require('../../../../media/nonAvatar-removebg-preview.png')} style={styles.img} />
                    </Pressable>
            }

            <Text style={styles.txtInput}>{user.email}</Text>
            <TextInput style={styles.txtInput} placeholder='Ho ten' value={user.name} onChangeText={(text) => setUser({ ...user, name: text })} />
            <TextInput style={styles.txtInput} placeholder='Dia chi' value={user.address} onChangeText={(text) => setUser({ ...user, address: text })} />
            <TextInput style={styles.txtInput} placeholder='So dien thoai' value={user.phone} onChangeText={(text) => setUser({ ...user, phone: text })} />
            <TextInput style={[styles.txtInput, { marginBottom: 70 }]} placeholder='Ngay sinh' value={user.dob} onChangeText={(text) => setUser({ ...user, dob: text })} />
            <Button title='Cập nhật' onPress={updateProfile} />
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

export default EditProFile

const styles = StyleSheet.create({

    txtInput: {
        padding: 8,
        width: '100%',
        height: 48,
        marginTop: 16,
        borderWidth: 1,
        borderRadius: 8,
    },
    txtEditProFile: {
        fontWeight: '600',
        width: '100%',
        fontSize: 16,
        lineHeight: 24,
        textAlign: 'center',
        color: '#000',
    },
    img: {
        width: 100,
        height: 100,
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
        padding: 16,
    },
})