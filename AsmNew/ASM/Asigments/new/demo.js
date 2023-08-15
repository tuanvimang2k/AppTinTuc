import { View, Text, StyleSheet, TextInput, Image } from 'react-native'
import React from 'react'

const Seach = () => {
    return (
        <View style={myStyles.body}>
            <Text style={myStyles.txtSearch}>Search</Text>
            <View style={myStyles.contaiinput}>
                <TextInput
                    placeholder='Search on foodly'
                    style={myStyles.txtinput} >
                    <Image style={myStyles.img} source={require('../../../media/se1.png')}></Image>
                    <Text>Search on foodly</Text>
                </TextInput>
            </View>
            <Text style={myStyles.txtTop}>Top Restaurants</Text>
            <View style={myStyles.container}>
                <View style={myStyles.contaiittem}>
                    <View>
                        <Image style={myStyles.imgbg} source={require('../../../media/bg.png')}></Image>
                        <Text style={myStyles.txthala}>The Halal Guys</Text>
                        <Text style={myStyles.txtChinese}>$$ * Chinese</Text>
                    </View>
                    <View>
                        <Image style={myStyles.imgbg} source={require('../../../media/x2.png')}></Image>
                        <Text style={myStyles.txthala}>The Halal Guys</Text>
                        <Text style={myStyles.txtChinese}>$$ * Chinese</Text>
                    </View>
                </View>
                <View style={myStyles.contaiittem}>
                    <View>
                        <Image style={myStyles.imgbg} source={require('../../../media/x3.png')}></Image>
                        <Text style={myStyles.txthala}>The Halal Guys</Text>
                        <Text style={myStyles.txtChinese}>$$ * Chinese</Text>
                    </View>
                    <View>
                        <Image style={myStyles.imgbg} source={require('../../../media/x4.png')}></Image>
                        <Text style={myStyles.txthala}>The Halal Guys</Text>
                        <Text style={myStyles.txtChinese}>$$ * Chinese</Text>
                    </View>
                </View>
                <View style={myStyles.contaiittem}>
                    <View>
                        <Image style={myStyles.imgbg} source={require('../../../media/x5.png')}></Image>
                        <Text style={myStyles.txthala}>The Halal Guys</Text>
                        <Text style={myStyles.txtChinese}>$$ * Chinese</Text>
                    </View>
                    <View>
                        <Image style={myStyles.imgbg} source={require('../../../media/x6.png')}></Image>
                        <Text style={myStyles.txthala}>The Halal Guys</Text>
                        <Text style={myStyles.txtChinese}>$$ * Chinese</Text>
                    </View>
                </View>
            </View>
            <View style={myStyles.backrouk}>
                <View style={myStyles.contaitab}>
                    <Image style={myStyles.imgbg} source={require('../../../media/food.png')}></Image>
                    <Text style={myStyles.txtHome}>Home</Text>
                </View>
                <View style={myStyles.contaitab}>
                    <Image style={myStyles.imgbg} source={require('../../../media/se1.png')}></Image>
                    <Text style={myStyles.txtHome}>Home</Text>
                </View>
                <View style={myStyles.contaitab}>
                    <Image style={myStyles.imgoder} source={require('../../../media/orders.png')}></Image>
                    <Text style={myStyles.txtHome}>Home</Text>
                </View>
                <View style={myStyles.contaitab}>
                    <Image style={myStyles.imgbg} source={require('../../../media/pro.png')}></Image>
                    <Text style={myStyles.txtHome}>Home</Text>
                </View>
            </View>


        </View>

    )
}

export default Seach

const myStyles = StyleSheet.create({
    body: {
        position: 'relative',
        width: '100%',
        // flex: 1,
        height: '100%',
        padding: 24,
    },
    txtSearch: {
        paddingTop: 4,
        paddingBottom: 8,
        fontFamily: 'Sofia Pro',
        fontStyle: 'normal',
        fontWeight: 700,
        lineHeight: 21,
        fontSize: 21,
        color: '#000000',
    },
    txtinput: {
        borderWidth: 0.1,
        borderRadius: 20,


    },
    txtTop: {
        marginTop: 20,
        fontFamily: 'Sofia Pro',
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: 18,
        fontSize: 18,
        color: '#000000',
    },
    container:{
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'space-between',
        padding:8,
        
    },
    contaiittem: {
        flexDirection: 'row',
        marginTop: 10,

    },

    txthala: {
        marginTop: 10,
    },
    txtChinese: {
        marginTop: 10,
    },
    backrouk: {
        position: 'absolute',
        backgroundColor: 'white',
        width: 395,
        height: 88,
        top: 670,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    contaitab: {
        marginTop: 20,
        flexDirection: 'column',

        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imgoder: {
        width: 40,
        height: 20,
    },
})