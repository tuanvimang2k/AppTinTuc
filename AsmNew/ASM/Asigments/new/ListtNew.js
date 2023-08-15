import { View, Text, Image, StyleSheet, Pressable, TextInput, FlatList, Touchable, TouchableOpacity, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'

import { getNews, getSearch } from './NewService'
import AxiosInstance from '../helpers/AxiosInstance'

const ListtNew = (props) => {
    const { navigation } = props
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchText, setSearchText] = useState("");
    // lấy dữ liệu
    const onGetNews = async () => {
        setLoading(true);
        const news = await getNews();
        setNews(news);
        console.log(news);
        setLoading(false);
    }

    const renderItem = ({ item }) => {
        return (
            <View style={mystyles.container}>
                <Image style={mystyles.image} source={{ uri: item.image }}></Image>
                <View style={mystyles.content}>
                    <Text style={mystyles.textTitle}>Travel</Text>
                    <Text onPress={() => navigation.navigate('Detail', { id: item._id })} style={mystyles.textDoc}>{item.title}</Text>
                    <View style={mystyles.containerSum}>
                        <View style={mystyles.containerbrand}>
                            <Image style={mystyles.ellipse} source={require('../../../media/ellipse.png')} />
                            <Text style={mystyles.Bbc}>BBC News</Text>
                        </View>
                        <View style={mystyles.containertime}>
                            <Image style={mystyles.ellipse} source={require('../../../media/hour.png')} />
                            <Text>1h ago</Text>
                        </View>
                    </View>
                    <Image style={mystyles.cham} source={require('../../../media/cham.png')} />
                </View>
            </View>
        )
    }
    useEffect(() => {
        onGetNews();
        onSearch();
    }, []);

    // set tự search
    let timeout = null;
    const cutDoutSearch = (searchText) =>{
        if(timeout){
            clearTimeout(timeout);
        }
        timeout = setTimeout(() => {
            onSearch(searchText);
        },1500);
    }
    // tiem kiem
    const onSearch = async (searchText) => {
        setLoading(true);
        const search = await AxiosInstance().get("articles/search?title=" + searchText);
        if (search.error == false) {
            console.log(search.data);
            setNews(search.data);
            setLoading(false);
        } else {
            console.log("Khoong lay du lieu duoc");
        }

    }

    return (

        <View style={mystyles.body}>
            <View style={mystyles.home}>
                <Image style={mystyles.kara} source={require('../../../media/kara.png')} />
                <Image source={require('../../../media/chuon.png')} />
            </View>
            <View style={mystyles.inputContainer}>
                <TextInput style={mystyles.input} onChangeText={(text) => cutDoutSearch(text)}>

                </TextInput>
                <TouchableOpacity style={mystyles.img1} onPress={onSearch}>
                    <Image source={require('../../../media/find.png')} />
                </TouchableOpacity>

                <Text style={mystyles.img2}>Seach</Text>
                <Image style={mystyles.vectorIcon} source={require('../../../media/pand.png')} />
            </View>


            <View style={mystyles.lates}>
                <Text style={mystyles.text}>Latest</Text>
                <Text>See all</Text>
            </View>
            <View style={mystyles.all}>
                <Text style={mystyles.trend}>All</Text>
                <Text style={mystyles.trend}>Sports</Text>
                <Text style={mystyles.trend}>Politics</Text>
                <Text style={mystyles.trend}>Bussiness</Text>
                <Text style={mystyles.trend}>Health</Text>
                <Text style={mystyles.trend}>Travel</Text>
            </View>

            <View style={mystyles.list}>
                <FlatList
                    data={news}
                    renderItem={renderItem}
                    keyExtractor={item => item._id}
                    onRefresh={onGetNews}
                    refreshing={loading}
                />
                {/* <View style={mystyles.container}>
                    <Image style={mystyles.image} source={require('../../../media/anh2.png')} />
                    <View style={mystyles.content}>
                        <Text  style={mystyles.textTitle}>Travel</Text>
                        <Text onPress={() => onGo()} style={mystyles.textDoc}>Her train broke down. Her phone died. And then she met her..</Text>
                        <View style={mystyles.containerSum}>
                            <View style={mystyles.containerbrand}>
                                <Image style={mystyles.ellipse} source={require('../../../media/ellipse.png')} />
                                <Text style={mystyles.Bbc}>BBC News</Text>
                            </View>
                            <View style={mystyles.containertime}>
                                <Image style={mystyles.ellipse} source={require('../../../media/hour.png')} />
                                <Text>1h ago</Text>
                            </View>
                        </View>
                        <Image style={mystyles.cham} source={require('../../../media/cham.png')} />
                    </View>
                </View>
                <View style={mystyles.container}>
                    <Image style={mystyles.image} source={require('../../../media/tua.png')} />
                    <View style={mystyles.content}>
                        <Text style={mystyles.textTitle}>Europe</Text>
                        <Text style={mystyles.textDoc}>Russian warship: Moskva sinks in Black Sea</Text>
                        <View style={mystyles.containerSum}>
                            <View style={mystyles.containerbrand}>
                                <Image style={mystyles.ellipse} source={require('../../../media/tma.png')} />
                                <Text style={mystyles.Bbc}>BBC News</Text>
                            </View>
                            <View style={mystyles.containertime}>
                                <Image style={mystyles.ellipse} source={require('../../../media/hour.png')} />
                                <Text>4h ago</Text>
                            </View>
                        </View>
                        <Image style={mystyles.cham} source={require('../../../media/cham.png')} />
                    </View>
                </View>
                <View style={mystyles.container}>
                    <Image style={mystyles.image} source={require('../../../media/gio.png')} />
                    <View style={mystyles.content}>
                        <Text style={mystyles.textTitle}>Money</Text>
                        <Text style={mystyles.textDoc}>Wind power produced more electricity than coal and nucle..</Text>
                        <View style={mystyles.containerSum}>
                            <View style={mystyles.containerbrand}>
                                <Image style={mystyles.ellipse} source={require('../../../media/tma.png')} />
                                <Text style={mystyles.Bbc}>BBC News</Text>
                            </View>
                            <View style={mystyles.containertime}>
                                <Image style={mystyles.ellipse} source={require('../../../media/hour.png')} />
                                <Text>4h ago</Text>
                            </View>
                        </View>
                        <Image style={mystyles.cham} source={require('../../../media/cham.png')} />
                    </View>
                </View> */}
            </View>
            {/* <View style={mystyles.containerControl}>
                <Pressable style={mystyles.pressControl}>
                    <Image source={require('../../../media/home.png')}></Image>
                    <Text style={mystyles.txt}>Home</Text>
                </Pressable>
                <Pressable style={mystyles.pressControl}>
                    <Image source={require('../../../media/ex.png')}></Image>
                    <Text style={mystyles.txt}>Explore</Text>
                </Pressable>
                <Pressable style={mystyles.pressControl}>
                    <Image source={require('../../../media/book.png')}></Image>
                    <Text style={mystyles.txt}>Book</Text>
                </Pressable>
                <Pressable style={mystyles.pressControl}>
                    <Image source={require('../../../media/pro.png')}></Image>
                    <Text style={mystyles.txt}>Profile</Text>
                </Pressable>
            </View> */}
        </View>
    )
}

export default ListtNew

const mystyles = StyleSheet.create({

    body: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        width: '100%',
        height: '100%',
        padding: 16,

    },
    txt: {
        fontSize: 12,
        fontWeight: 400,
        fontStyle: 'normal',
        lineHeight: 21,
        letterSpacing: 0.12,
        color: '#4E4B66'
    },
    Bbc: {
        fontSize: 13,
        fontWeight: 600,
        fontStyle: 'normal',
        lineHeight: 20,
        letterSpacing: 0.12,
        color: '#4E4B66'
    },
    pressControl: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 4,
        width: 70,
        height: 70,
        paddingTop: 4,
        paddingLeft: 26,
        borderRadius: 6,
    },
    containerControl: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 78,
        gap: 32,
        backgroundColor: '#FFFFFF',
    },
    trend: {
        height: 24,
        fontSize: 16,
        fontWeight: 400,
        fontStyle: 'normal',
        lineHeight: 24,
        letterSpacing: 0.12,
        color: '#4E4B66'
    },
    all: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        gap: 10,
        width: 506,
        height: 34,
        marginBottom: 15,
    },
    text: {
        height: 24,
        width: 50,
        fontSize: 16,
        fontWeight: 600,
        fontStyle: 'normal',
        lineHeight: 24,
        letterSpacing: 0.12,
        color: '#000000'
    },
    lates: {
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        gap: 270,
        width: 250,
        height: 24,
        marginBottom: 15,
    },
    kara: {
        width: 99,
        height: 30,

    },
    img1: {
        position: 'absolute',
        left: 7,
        top: 12,
        width: 24,
        height: 24,
    },
    img2: {
        position: 'absolute',
        left: 40,
        top: 12,
    },
    vectorIcon: {
        position: 'absolute',
        right: 10,
        top: 12,
        width: 24,
        height: 24,
    },
    inputContainer: {
        position: 'relative',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    input: {
        width: '100%',
        height: 48,
        borderWidth: 1,
        borderRadius: 6,
        borderColor: '#4E4B66',
        backgroundColor: '#fff',
        paddingLeft: 40,
    },
    home: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        gap: 247,
        width: 250,
        height: 56,
    },

    cham: {
        position: 'absolute',
        marginRight: 2,
        left: '100%',
        top: '95%',

    },
    containerSum: {

        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 4,
        width: 173,
        height: 20,
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
    containerbrand: {
        flexDirection: 'row',
        marginTop: 4,
        width: 74,
        height: 20,
    },
    ellipse: {
        marginRight: 2,
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
    list: {
        flexDirection: 'column',
        gap: 20,
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
    textTitle: {
        fontSize: 13,
        fontWeight: 400,
        fontStyle: 'normal',
        lineHeight: 20,
        letterSpacing: 0.12,
        color: '#4E4B66'
    },
    content: {
        margin: 4,
    },
})