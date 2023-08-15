import { StyleSheet, Text, View, TextInput, Image,ScrollView } from 'react-native'
import React from 'react'

const Lab4Seach = () => {
    return (
        <View style={styles.Seach}>
            <Text style={styles.txtSeach}>Search</Text>
            <View style={{ width: '100%', height: 48, borderWidth: 1, borderRadius: 5, marginTop: 20, flexDirection: 'row', alignItems: 'center' }}>
                <Image style={styles.iconSeach} source={require('../media/anhLab4/se1.png')} />
                <TextInput style={styles.txtInput} placeholder='Search on foodly' />
            </View>
            <Text style={styles.txtTop}>Top Restaurants</Text>
            <ScrollView>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }} >
                <View style={styles.item1}>
                    <Image source={require('../media/anhLab4/x1.png')} />
                    <Text style={styles.txtThe}>The Halal Guys</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: 91 }}>
                        <Text>$$</Text>
                        <View style={{ width: 5, height: 5, backgroundColor: '#c2c2c2', borderRadius: 2.5 }}></View>
                        <Text>Chinese</Text>
                    </View>

                </View>
                <View style={styles.item2}>
                    <Image source={require('../media/anhLab4/x2.png')} />
                    <Text style={styles.txtThe}>The Halal Guys</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: 91 }}>
                        <Text>$$</Text>
                        <View style={{ width: 5, height: 5, backgroundColor: '#c2c2c2', borderRadius: 2.5 }}></View>
                        <Text>Chinese</Text>
                    </View>
                </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }} >
                <View style={styles.item1}>
                    <Image source={require('../media/anhLab4/x3.png')} />
                    <Text style={styles.txtThe}>The Halal Guys</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: 91 }}>
                        <Text>$$</Text>
                        <View style={{ width: 5, height: 5, backgroundColor: '#c2c2c2', borderRadius: 2.5 }}></View>
                        <Text>Chinese</Text>
                    </View>

                </View>
                <View style={styles.item2}>
                    <Image source={require('../media/anhLab4/x4.png')} />
                    <Text style={styles.txtThe}>The Halal Guys</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: 91 }}>
                        <Text>$$</Text>
                        <View style={{ width: 5, height: 5, backgroundColor: '#c2c2c2', borderRadius: 2.5 }}></View>
                        <Text>Chinese</Text>
                    </View>
                </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }} >
                <View style={styles.item1}>
                    <Image source={require('../media/anhLab4/x5.png')} />
                    <Text style={styles.txtThe}>The Halal Guys</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: 91 }}>
                        <Text>$$</Text>
                        <View style={{ width: 5, height: 5, backgroundColor: '#c2c2c2', borderRadius: 2.5 }}></View>
                        <Text>Chinese</Text>
                    </View>

                </View>
                <View style={styles.item2}>
                    <Image source={require('../media/anhLab4/x6.png')} />
                    <Text style={styles.txtThe}>The Halal Guys</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: 91 }}>
                        <Text>$$</Text>
                        <View style={{ width: 5, height: 5, backgroundColor: '#c2c2c2', borderRadius: 2.5 }}></View>
                        <Text>Chinese</Text>
                    </View>
                </View>
            </View>
            </ScrollView>
            <View style ={{flexDirection:'row',width:'100%',height:88,alignItems:'center',justifyContent:'space-around'}}>
                <View style={[styles.itemCon,{}]}>
                    <Image source={require('../media/anhLab4/home.png')} />
                </View>
                <View style={[styles.itemCon,{}]}>
                <Image source={require('../media/anhLab4/home.png')} />
                </View>
                <View style={[styles.itemCon,{}]}>
                <Image source={require('../media/anhLab4/home.png')} />
                </View>
                <View style={[styles.itemCon,{}]}>
                <Image source={require('../media/anhLab4/home.png')} />
                </View>

            </View>
        </View>
    )
}

export default Lab4Seach

const styles = StyleSheet.create({
    itemCon:{
        flexDirection:'column',
        alignItems:'center',

    },
    txtThe: {
        marginTop: 10,
        fontFamily: 'Yu Gothic UI',
        fontWeight: '300',
        fontSize: 16,
        lineHeight: 24,
        color: '#000000',
        letterSpacing: -0.28,

    },
    item2: {

        width: 160,
        height: 200,
        // borderWidth: 1,
        marginTop: 20,
    },
    item1: {
        width: 160,
        height: 200,
        // borderWidth: 1,
        marginTop: 20,
    },
    txtTop: {
        fontFamily: 'Yu Gothic UI',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 16,
        letterSpacing: -0.4,
        color: '#000000',
        marginTop: 34,
    },
    txtInput: {
        width: 200,
        height: 35,
    },
    iconSeach: {
        marginLeft: 16,
    },
    txtInput: {

    },
    txtSeach: {
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 28,
        lineHeight: 36,
        display: 'flex',
        letterSpacing: 0.18,
        color: '#000000',
    },
    Seach: {
        width: '100%',
        height: '100%',
        padding: 20,
    },
})