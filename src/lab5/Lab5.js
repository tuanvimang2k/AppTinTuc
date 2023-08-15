import { View, Text, Image, StyleSheet,Pressable } from 'react-native'
import React from 'react'

const Lab5 = () => {
    return (
        <View style={styles.container}  >
            <View style={styles.header}>
                <View style={styles.viewIconBack}>
                    <Image style={styles.iconBack} source={require('../../media/iconback.png')} />
                </View>
                <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={styles.txtDelivery}>Delivery to</Text>
                    <Text style={styles.txtLekki}>lekki phase 1, Estate</Text>
                </View>
                <View style={styles.viewIconBack}>
                    <Image style={styles.imgPeople} source={require('../../media/imgPeople.png')} />
                </View>
            </View>
            <Text style={styles.txtYourCart}>Your cart</Text>
            <View style={styles.item}>
                <View style={{ borderWidth: 1, borderRadius: 10, width: 70, height: 70, alignItems: 'center', justifyContent: 'center', marginLeft: 11 }}>
                    <Image style={styles.imgHamburger} source={require('../../media/imgHambuger.png')} />
                </View>
                <View style={{ marginLeft: 11 }}>
                    <Text style={styles.txtTitle} >The Macdonalds </Text>
                    <Text style={styles.txtName}>Big Mac</Text>
                    <Text style={styles.txtPrice}>Price: $5.99</Text>
                </View>
                <View style={{flexDirection:"row",width:78,justifyContent:'space-between',marginLeft:20}}>
                    <Pressable style={styles.btnEdit}>
                        <Text style={styles.txt} >-</Text>
                    </Pressable >
                    <Pressable >
                        <Text style={styles.txt}>1</Text>
                    </Pressable>
                    <Pressable style={styles.btnEdit}>
                        <Text style={styles.txt}>+</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}

export default Lab5
const styles = StyleSheet.create({
    btnEdit: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12.5,
        width: 25,
        height: 25,
        backgroundColor: '#FE554A',
    },
    txtPrice: {
        color: '#FE554A',
        fontSize: 16,
        fontWeight: '500',
        lineHeight: 20,
        letterSpacing: 0.5,
    },
    txtName: {
        fontWeight: '400',
        fontSize: 12,
        color: '#3D3D3D',
    },
    txtTitle: {
        fontWeight: '700',
        fontSize: 16,
        lineHeight: 20,
        letterSpacing: 0.5,
        color: '#000000',
    },
    imgHamburger: {

    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 20,
        marginTop: 40,
        width: '100%',
        height: 112,
        position: 'relative',
    },
    txtYourCart: {
        fontWeight: '700',
        fontSize: 24,
        lineHeight: 31,
        color: '#000000',
        letterSpacing: 0.5,
        marginTop: 40,
    },
    imgPeople: {
        width: 50,
        height: 50,
    },
    txtLekki: {
        fontWeight: '400',
        fontSize: 15,
        lineHeight: 17,
        color: '#FE554A',
    },
    txtDelivery: {
        fontWeight: '400',
        fontSize: 15,
        lineHeight: 17,
        color: '#000000',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    viewIconBack: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
        height: 50,
        borderWidth: 1,
        borderRadius: 20,
    },
    iconBack: {
        width: 25,
        height: 25,
    },
    container: {
        width: '100%',
        height: '100%',
        padding: 21,
    },
})