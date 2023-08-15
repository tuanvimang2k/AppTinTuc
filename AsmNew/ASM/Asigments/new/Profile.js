import { View, Text, Image, StyleSheet, Pressable, TextInput, FlatList } from 'react-native'
import React, { useState, useEffect,useContext } from 'react'
import { getProfile } from './NewService';
import { UserContext } from '../user/UserContext'

const Profile = (props) => {
    const {navigation} = props;
    const [profile, setProfile] = useState([]);
    const [loading, setLoading] = useState(false);
    const { infouser, setifoUser } = useContext(UserContext);


    const ongetProfile = async () => {
        setLoading(true);
        const profile = await getProfile();
        setProfile(profile);
        console.log(profile);
        setLoading(false);
    }
    const renderItem = ({ item }) => {
        return (
            <View style={styles.container}>
                <Image style={styles.image} source={{ uri: item.image }}></Image>
                <View style={styles.content}>
                    <Text style={styles.textTitle}>Travel</Text>
                    <Text style={styles.textDoc}>{item.title}</Text>
                    <View style={styles.containerSum}>
                        <View style={styles.containerbrand}>
                            <Image style={styles.ellipse} source={require('../../../media/ellipse.png')} />
                            <Text style={styles.Bbc}>BBC News</Text>
                        </View>
                        <View style={styles.containertime}>
                            <Image style={styles.ellipse} source={require('../../../media/hour.png')} />
                            <Text>1h ago</Text>
                        </View>
                    </View>
                    <Image style={styles.cham} source={require('../../../media/cham.png')} />
                </View>
            </View>
        )
    }
    useEffect(() => {
        ongetProfile();
    }, []);
    const onnhay = () =>{
        navigation.navigate('Add');
    }
    const onnhay1 = () =>{
        navigation.navigate('Edit');
    }

    return (
        <View style={styles.body}>
            <View style={styles.contaiScreen}>
                <Text style={styles.txtProfile}>Profile</Text>
                <Pressable onPress={() => navigation.navigate('Edit')} ><Image source={require("../../../media/setting.png")}/></Pressable>
            </View>
            <View style={styles.contaiuser}>
                <View style={styles.following}>
                    <Image style={styles.imgacout} source={{ uri: infouser.avatar }}></Image>
                    <View style={styles.followchitiet}>
                        <View style={styles.cot1}>
                            <Text style={styles.txtso}>2156</Text>
                            <Text>Follower</Text>
                        </View>
                        <View style={styles.cot2}>
                            <Text style={styles.txtso}>567</Text>
                            <Text>Following</Text>
                        </View>
                        <View style={styles.cot3}>
                            <Text style={styles.txtso}>23</Text>
                            <Text>New</Text>
                        </View>
                    </View>
                </View>
                <Text style={styles.txtso}>Wilson Franci</Text>
                <Text style={styles.txtGioithieu}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
            </View>
            <View style={styles.button}>
                <Pressable style={styles.presEdit}><Text style={styles.txtEdit} onPress={()=> onnhay1()}>Edit profile</Text></Pressable>
                <Pressable style={styles.presEdit}><Text style={styles.txtEdit}>Website</Text></Pressable>
            </View>
            <View style={styles.contaitab}>
                <Text >News</Text>
                <Text style={styles.txtRecent}>Recent</Text>
            </View>
            <Image style={styles.imgxanh} source={require("../../../media/xanh.png")}></Image>
            <View style={styles.list}>
                <FlatList
                    data={profile}
                    renderItem={renderItem}
                    keyExtractor={item => item._id}
                    onRefresh={ongetProfile}
                    refreshing={loading}
                />
            </View>
            <Pressable onPress={onnhay} style={styles.presAdd}><Image source={require("../../../media/plus.png")}/></Pressable>
        </View>
    )
}

export default Profile
const styles = StyleSheet.create({
    body: {
        width: '100%',
        height: '100%',
        padding: 24,
    },
    contaiScreen: {
        flexDirection: 'row',
        width: 214,
        height: 24,
        justifyContent: 'space-between',
        left: 130,
    },
    txtProfile: {
        fontFamily: 'Sofia Pro',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 16,
        color: '#000000',
    },
    contaiuser: {

        width: '100%',
        flexDirection: 'column',
        marginTop: 13,
    },
    following: {
        flexDirection: 'row',
    },
    followchitiet: {
        alignItems: 'center',
        width: '75%',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    cot1: {
        alignItems: 'center',
        flexDirection: 'column',
    },
    cot2: {
        alignItems: 'center',
        flexDirection: 'column',
    },
    cot3: {
        alignItems: 'center',
        flexDirection: 'column',
    },

    txtso: {
        fontFamily: 'Sofia Pro',
        fontStyle: 'normal',
        fontWeight: 700,
        fontSize: 16,
        letterSpacing: 0.12,
        color: '#000000',
    },
    imgacout: {
        width: '25%',
        borderRadius: 100,
    },
    txtGioithieu: {
        width: '80%',
    },
    button: {
        marginTop: 10,
        flexDirection: 'row',
        width: '100%',
        height: 50,
        justifyContent: 'space-between',

    },
    presEdit: {
        width: 165,
        backgroundColor: '#1877F2',
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
    },
    txtEdit: {
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: 16,
        letterSpacing: 0.12,
        color: '#FFFFFF',
    },
    contaitab: {
        flexDirection: 'row',
        width: 100,
        justifyContent: 'space-between',
        marginLeft: 120,
        marginTop: 10,
    },
    txtRecent: {
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 16,
        letterSpacing: 0.12,
        color: '#000000',
    },
    imgxanh: {
        marginLeft: 170,
        marginTop: 5,
    },
    container: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: 10,
    },
    image: {
        width: 96,
        height: 96,
        borderRadius: 10,
    },
    content: {
        margin: 4,
    },
    textTitle: {
        fontSize: 13,
        fontWeight: 400,
        fontStyle: 'normal',
        lineHeight: 20,
        letterSpacing: 0.12,
        color: '#4E4B66'
    },
    containerSum: {

        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 4,
        width: 173,
        height: 20,
    },
    textDoc: {
        height: 48,
        width: 250,
        fontSize: 16,
        fontWeight: 400,
        fontStyle: 'normal',
        lineHeight: 24,
        letterSpacing: 0.12,
        color: '#000000'
    },
    containerbrand: {
        flexDirection: 'row',
        marginTop: 4,
        width: 74,
        height: 20,
    },
    ellipse: {
        marginRight: 2,
    },
    Bbc: {
        fontSize: 13,
        fontWeight: 600,
        fontStyle: 'normal',
        lineHeight: 20,
        letterSpacing: 0.12,
        color: '#4E4B66'
    },
    containertime: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 4,
        width: 91,
        height: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cham: {
        position: 'absolute',
        marginRight: 2,
        left: '100%',
        top: '95%',

    },
    list: {
        flexDirection: 'column',
        gap: 20,
    },
    presAdd: {
        position:'absolute',
        width: 54,
        height:54,
        backgroundColor: '#1877F2',
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        left:320,
        top:580,
    },
})

