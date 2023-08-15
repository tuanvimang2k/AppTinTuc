import { Image, StyleSheet, Text, TextInput, View, ScrollView } from 'react-native'
import React from 'react'

const Home = () => {
    return (
        <View style={styles.body}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.title}>
                    <Image source={require('../../media/title.png')} />
                    <Image  source={require('../../media/chuong.png')} />
                </View>
                <View style={styles.search}>
                    <Image source={require('../../media/search.png')} />
                    <TextInput placeholder='Search' placeholderTextColor={'gray'} />
                    <Image source={require('../../media/Frame.png')} />
                </View>
                <View style={styles.trendall}>
                    <Text style={styles.trend}>Trending</Text>
                    <Text style={styles.see}>See all</Text>
                </View>
                <View style={styles.container1}>
                    <View >
                        <Image style={styles.img1} source={require('../../media/tua.png')} />
                    </View>
                    <View style={styles.info1}>
                        <Text style={styles.address}>Europe</Text>
                        <Text style={styles.titleif}>Russian warship: Moskva sinks in Black Sea </Text>
                        <View style={styles.timename}>
                            <View style={styles.timename}>
                                <Image source={require('../../media/NewsAuthor.png')} />
                                <Text style={styles.name}>BBC News</Text>
                                <Image source={require('../../media/time.png')} />
                                <Text style={styles.time}>4h ago</Text>
                            </View>
                            <View>
                                <Image source={require('../../media/3cham.png')} />
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.container2}>
                    <View style={styles.trendall}>
                        <Text style={styles.trend}>Latest</Text>
                        <Text style={styles.see}>See all</Text>
                    </View>
                    <View style={styles.scroll}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            {DATA.map((item, index) => {
                                return (
                                    <Text style={styles.textScroll}>{item.name}</Text>
                                )
                            })
                            }
                        </ScrollView>
                    </View>
                    <ScrollView horizontal={false}>
                        <View style={styles.container2_1}>
                            <View >
                                <Image style={styles.img2} source={require('../../media/anh1.png')} />
                            </View>
                            <View style={styles.info2}>
                                <Text style={styles.address2}>Europe</Text>
                                <Text style={styles.titleif2}>Ukraine's President Zelensky to BBC: Blood money being </Text>
                                <View style={styles.timename2}>
                                    <View style={styles.timename2}>
                                        <Image source={require('../../media/NewsAuthor.png')} />
                                        <Text style={styles.name2}>BBC News</Text>
                                        <Image source={require('../../media/time.png')} />
                                        <Text style={styles.time2}>4h ago</Text>
                                    </View>
                                    <View>
                                        <Image source={require('../../media/3cham.png')} />
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={styles.container2_1}>
                            <View >
                                <Image style={styles.img2} source={require('../../media/anh2.png')} />
                            </View>
                            <View style={styles.info2}>
                                <Text style={styles.address2}>Travel</Text>
                                <Text style={styles.titleif2}>Her train broke down. Her phone died. And the </Text>
                                <View style={styles.timename2}>
                                    <View style={styles.timename2}>
                                        <Image source={require('../../media/NewsAuthor.png')} />
                                        <Text style={styles.name2}>BBC News</Text>
                                        <Image source={require('../../media/time.png')} />
                                        <Text style={styles.time2}>4h ago</Text>
                                    </View>
                                    <View>
                                        <Image source={require('../../media/3cham.png')} />
                                    </View>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </ScrollView>
            <View style={styles.end}>
                <View style={styles.end2}>
                    <View style={styles.end3}>
                        <Image source={require('../../media/home.png')} />
                        <Text style={styles.textend}>Home</Text>
                    </View>
                    <View style={styles.end3}>
                        <Image source={require('../../media/explore.png')} />
                        <Text style={styles.textend}>Explore</Text>
                    </View >
                    <View style={styles.end3}>
                        <Image source={require('../../media/BookmarkIcon.png')} />
                        <Text style={styles.textend}>Bookmark</Text>
                    </View>
                    <View style={styles.end3}>
                        <Image source={require('../../media/profile.png')} />
                        <Text style={styles.textend}>Profile</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Home


const DATA = [{
    "id": 1,
    "name": "All"
}, {
    "id": 2,
    "name": "Sports"
}, {
    "id": 3,
    "name": "Politics"
}, {
    "id": 4,
    "name": "Bussiness"
}, {
    "id": 5,
    "name": "Health"
}, {
    "id": 6,
    "name": "Travel"
}, {
    "id": 7,
    "name": "Science"
}, {
    "id": 8,
    "name": "Fashion"
}]


const styles = StyleSheet.create({

    body: {
        padding: 24,
        width: '100%',
        height: '100%',
        color: 'black',
        position: 'relative'
    },
    title: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        padding: 0
    },
    search: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 6,
        paddingLeft: 12,
        paddingRight: 12
    },
    trendall: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 0,

    },
    trend: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: 16,
        lineHeight: 24,
        color: "#000000",
        letterSpacing: 0.12,

    },
    see: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 14,
        lineHeight: 21,
        color: "#4E4B66",
        letterSpacing: 0.12,
    },
    container1: {
        marginTop: 8,
        // borderColor: 'black',
        // borderWidth:1,
        padding: 8
    },
    img1: {
        width: '100%',
        padding: 8
    },
    timename: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        // borderColor: 'black',
        // borderWidth: 1,
        marginLeft: 0
    },
    time: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 13,
        lineHeight: 20,
        color: "#4E4B66",
        marginRight: 12,
        marginLeft: 4
    },
    name: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: 13,
        lineHeight: 20,
        color: "#4E4B66",
        marginRight: 12,
        marginLeft: 4

    },
    address: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 13,
        lineHeight: 20,
        color: "#4E4B66"
    },
    titleif: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 16,
        lineHeight: 24,
        color: "#000000"
    },
    container2: {
        marginTop: 16
    },
    scroll: {
        width: '100%',
        marginTop: 16,
    },
    textScroll: {
        color: 'black',
        marginRight: 10
    },
    container2_1: {
        flexDirection: 'row',
        marginTop: 24,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 32
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
    name2: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: 13,
        lineHeight: 20,
        color: "#4E4B66",
        marginRight: 12,
        marginLeft: 4,

    },
    address2: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 13,
        lineHeight: 20,
        color: "#4E4B66",
        width: '60%',


    },
    titleif2: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 16,
        lineHeight: 24,
        color: "#000000",


    },
    end: {
        flexDirection: 'column',
        justifyContent: 'center',
        width: '100%',
        height: 78,
        // position: 'absolute',
        bottom: 0,
        // justifyContent: 'space-between',
        // backgroundColor: '#FFFFFF'
    },
    end2: {

        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    textend: {
        color: 'black',
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 14,
        lineHeight: 21,
        color: "#4E4B66",
    },
    end3: {
        justifyContent: 'center',
        alignItems: 'center',
        // borderColor: 'black',
        // borderWidth: 1
    }
})