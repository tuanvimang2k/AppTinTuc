import {
    StyleSheet, Text, View, Image, TouchableWithoutFeedback,
    TouchableOpacity, FlatList, Pressable, RefreshControl
} from 'react-native'
import React, { useState, useEffect, useContext } from 'react'
import { getMyNews } from './NewService';
import { UserContext } from '../users/UserContext';
const Profile = (props) => {
    const { user, setUser } = useContext(UserContext);
    const [image, setImage] = useState(user.avatar);
    console.log(">>>>>>>>>" + image);
    const { navigation } = props;
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(false);
    const onGetNews = async () => {
        setLoading(true);
        const news = await getMyNews();
        setNews(news);
        setImage(user.avatar);
        setLoading(false);
    }
    const renderItem = ({ item }) => {
        return (
            <Pressable onPress={() => navigation.navigate('Detail', { id: item._id })}>
                <View style={styles.container2_1} >
                    <View style={{ width: '25%' }} >
                        <Image style={styles.imgitem} source={{ uri: item.image }} />
                    </View>
                    <View style={[styles.info2, { width: '70%', }]}>
                        <Text style={styles.address2}>Europe</Text>
                        <Text style={styles.titleif2}>{item.title} </Text>
                        <View style={styles.timename2}>
                            <View style={styles.timename2}>
                                <Image source={require('../../../media/NewsAuthor.png')} />
                                <Text style={styles.name2}>BBC News</Text>
                                <Image source={require('../../../media/time.png')} />
                                <Text style={styles.time2}>4h ago</Text>
                            </View>
                            <View>
                                <Image source={require('../../../media/3cham.png')} />
                            </View>
                        </View>
                    </View>
                </View>
            </Pressable>
        )
    }
    useEffect(() => {
        console.log('27 useEffect running');
        onGetNews();
    }, []);
    return (
        <View style={styles.container}>
            <View style={styles.header}>

                <Text style={styles.txtProfile}>Profile</Text>
                <TouchableOpacity >
                    <Image source={require('../../../media/iconProflie.png')} />

                </TouchableOpacity>
            </View>
            <View style={styles.nav}>
                {image ?
                    <Image style={styles.imgDaiDien} source={{ uri: image }} /> :
                    <Image style={styles.imgDaiDien} source={require('../../../media/iconProflie.png')} />
                }
                <View>
                    <Text style={styles.txtSoLuong}>2156</Text>
                    <Text style={styles.txtChuThich}>Fllowers</Text>
                </View>
                <View>
                    <Text style={styles.txtSoLuong}>567</Text>
                    <Text style={styles.txtChuThich}>Fllowing</Text>
                </View>
                <View>
                    <Text style={styles.txtSoLuong}>123</Text>
                    <Text style={styles.txtChuThich}>News</Text>
                </View>
            </View>
            <View>
                <Text style={styles.txtSoLuong}>Wilson Franci</Text>
                <Text style={styles.txtChuThich}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
            </View>
            <View style={styles.viewEdit}>
                <TouchableOpacity onPress={() => navigation.navigate('EditProFile')} style={[styles.txtTouch, { marginRight: 16 }]}>
                    <Text style={styles.txtEitProfile}>Edit Profile</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Add')} style={styles.txtTouch}>
                    <Text style={styles.txtEitProfile}>Website</Text>
                </TouchableOpacity>
            </View>
            {loading ? <Text>Loading...</Text> :
                <FlatList
                    data={news}
                    renderItem={renderItem}
                    keyExtractor={item => item._id}
                    refreshControl={
                        <RefreshControl
                            refreshing={loading}
                            onRefresh={onGetNews}
                        />
                    }
                />}
            <TouchableOpacity style={styles.floatingButton}
                onPress={() => navigation.navigate('Add')}
            >
                <Text>+</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    floatingButton: {
        position: 'absolute',
        bottom: 16,
        right: 16,
        width: 56,
        height: 56,
        borderRadius: 28,
        backgroundColor: '#1877F2',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 4, // chỉ áp dụng cho Android để tạo hiệu ứng nổi
    },
    imgitem: {
        borderRadius: 8,
        width: 96,
        height: 96,
    },
    txtEitProfile: {
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0.12,
        color: '#FFFFFF',
    },
    txtTouch: {
        borderRadius: 10,
        backgroundColor: '#1877F2',
        justifyContent: 'center',
        alignItems: 'center',
        width: 182,
        height: 50,
    },
    viewEdit: {
        marginTop: 16,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    txtChuThich: {
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0.12,
        color: '#4E4B66',
    },
    txtSoLuong: {
        color: '#000000',
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0.12,
    },
    imgDaiDien: {
        // backgroundColor: 'red',
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    nav: {
        marginTop: 24,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    txtProfile: {
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0.12,
        color: '#000000'
    },

    header: {
        top: 16,
        position: 'absolute',
        right: 16,
        width: '57%',
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    container: {
        // backgroundColor: 'red',
        position: 'relative',
        width: '100%',
        height: '100%',
        padding: 16,
    },
    container2_1: {
        // backgroundColor: 'red',
        width: '100%',
        flexDirection: 'row',
        marginTop: 24,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    info2: {
        flexDirection: 'column',
        margin: 4,
    },
    timename2: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        // borderColor: 'black',
        // borderWidth: 1,
        marginLeft: 0
    },
    time2: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 13,
        lineHeight: 20,
        color: "#4E4B66",
        marginRight: 12,
        marginLeft: 4
    },
})