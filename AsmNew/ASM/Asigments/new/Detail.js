import { Image, StyleSheet, Text, View, Pressable, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { getNewsDetail } from './NewService';

const Detail = (props) => {
    const { navigation, route } = props;
    const { id } = route?.params;
    const [newsDetail, setNewsDetail] = useState(null);

    const onGetNewsDetail = async () => {
        if (!id) return
        const data = await getNewsDetail(id);
        setNewsDetail(data[0]);
        console.log(data[0])
    }
    useEffect(() => {
        onGetNewsDetail();
       
    }, [id]);
    if (!newsDetail) return <View><Text>Loading..</Text></View>
    return (
        
        <View style={styles.body}>
                <View style={styles.head}>
                    <Image source={require('../../../media/arrowleft.png')} />
                    <View style={styles.head2}>
                        <Image source={require('../../../media/share.png')} />
                        <Image source={require('../../../media/3chamdung.png')} />
                    </View>
                </View>
                <View style={styles.container}>
                    <View style={styles.baby}>
                        <Image source={require('../../../media/emal.png')} />
                        <View>
                            <Text style={styles.name2}>BBC News</Text>
                            <Text style={styles.time2}>4h ago</Text>
                        </View>

                    </View>
                    <Pressable style={styles.btnFl}>
                        <Text style={styles.textbtn}>Following</Text>
                    </Pressable>
                </View>
                <View style={styles.anh}>
                    <Image style={styles.img} source={{uri : newsDetail.image}} />
                </View>
                <View style={styles.title}>
                    <Text style={styles.title1}>Europe</Text>
                    <Text style={styles.title2}>{newsDetail.title}</Text>
                </View>
                <View>
                    <Text></Text>
                    <Text style={styles.title3}>{newsDetail.content}</Text>
                </View>
            <View style={styles.end}>
                <View style={styles.end2}>
                    <View style={styles.end3}>
                        <Image source={require('../../../media/tim.png')} />
                        <Text style={styles.textend}>24.5K</Text>
                    </View >
                    <View style={styles.end3}>
                        <Image source={require('../../../media/cmt.png')} />
                        <Text style={styles.textend}>1K</Text>
                    </View>
                </View>
                <View style={styles.end3}>
                    <Image source={require('../../../media/BookmarkIcon.png')} />
                </View>

            </View>
        </View>
        
    )

}

export default Detail

const styles = StyleSheet.create({
    body: {
        width: '100%',
        height: '100%',
        padding: 24,
        position: 'relative'
    },
    head: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        // borderColor:'black',
        // borderWidth: 1,
        alignItems: 'center'
    },
    head2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // borderColor:'black',
        // borderWidth: 1,
        width: 56
    },
    baby: {
        flexDirection: 'row',
    },
    container: {
        marginTop: 16,
        flexDirection: 'row',
        // width:'100%',
        // borderColor: 'black',
        // borderWidth: 1,
        justifyContent: 'space-between'
    },
    btnFl: {
        backgroundColor: '#1877F2',
        borderRadius: 6,
        width: 102,
        height: 34,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textbtn: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 600,
        lineHeight: 24,
        letterSpacing: 0.12,
        color: '#FFFFFF',
        fontSize: 16,

    },
    anh: {
        padding: 8,
        marginTop: 10
    },
    img: {
        width: '100%',
        height:200,

    },
    end: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 20,
        paddingRight: 20,
        marginTop: 69,
        // position: 'absolute',    
        // backgroundColor: '#FFFFFF',
        width: '100%'

    },
    end2: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    end3: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textend: {
        margin: 5
    },
    title1: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 14,
        lineHeight: 21,
        color: "#4E4B66",

    },
    title2: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 24,
        lineHeight: 36,
        color: "#000000",

    },
    title3: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 400,
        // fontSize: 16,
        lineHeight: 26,
        color: "#000000",

    }
})