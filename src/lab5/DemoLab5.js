import { StyleSheet, Text, View, FlatList, Image, Pressable, } from 'react-native'
import React, { useState } from 'react'



const DemoLab5 = () => {
    const [Data, setData] = useState([
        { id: 1, tiltle: 'The Macdonalds', name: 'Big Mac', price: 5, soluong: 1 },
        { id: 2, tiltle: 'The Macdonalds', name: 'Chease', price: 6, soluong: 1 },
        { id: 3, tiltle: 'The Macdonalds', name: 'potato', price: 7, soluong: 1 },

    ]);
    const [total, setTotal] = useState(Data.reduce((a, b) => a + b.price * b.soluong, 0));

    const updateItem = (itemId, newNumber) => {

        const newData = Data.map((item) => {
            if (item.id === itemId) {
                return { ...item, soluong: newNumber };
            }
            return item;

        });
        setData(newData);
        setTotal(newData.reduce((a, b) => a + b.price * b.soluong, 0));
    };

    const renderListItem = ({ item }) => (

        <View style={styles.item}>
            <View style={{ borderWidth: 1, borderRadius: 10, width: 70, height: 70, alignItems: 'center', justifyContent: 'center', marginLeft: 11 }}>
                <Image style={styles.imgHamburger} source={require('../../media/imgHambuger.png')} />
            </View>
            <View style={{ marginLeft: 11 }}>
                <Text style={styles.txtTitle} >{item.tiltle} </Text>
                <Text style={styles.txtName}>{item.name}</Text>
                <Text style={styles.txtPrice}>${item.price}</Text>
            </View>
            <View style={{ flexDirection: "row", width: 78, justifyContent: 'space-between', marginLeft: 20 }}>
                <Pressable style={styles.btnEdit}
                    onPress={() => updateItem(item.id, item.soluong - 1)}
                >
                    <Text style={styles.txt} >-</Text>
                </Pressable >
                <Pressable >
                    <Text style={styles.txt}>{item.soluong}</Text>
                </Pressable>
                <Pressable style={styles.btnEdit}
                    onPress={() => updateItem(item.id, item.soluong + 1)}
                >
                    <Text style={styles.txt}>+</Text>
                </Pressable>
            </View>
        </View>
    );
    return (

        <View style={styles.container}>
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
            <FlatList
                style={{ padding: 10, width: '100%', height: 415 }}
                data={Data}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderListItem}
            />
            <View style={{ marginTop: 80, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ width: 280, height: 31, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={styles.txtTotalTitle}>Total</Text>
                    <Text style={styles.txtTotal}>${total}</Text>
                </View>
            </View>
            <Pressable style={styles.btnPro}>
                <Text style={styles.txtPro}>Process to payment</Text>
            </Pressable>
        </View>
    )
}

export default DemoLab5

const styles = StyleSheet.create({
    txtPro: {
        fontWeight: '700',
        fontSize: 14,
        lineHeight: 18,
        color: '#FFFFFF',
    },
    btnPro: {
        marginTop: 40,
        width: '100%',
        height: 51,
        borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        backgroundColor: '#f9881f',
    },
    txtTotal: {
        fontWeight: '700',
        fontSize: 24,
        lineHeight: 31,
        color: '#000000',
    },
    txtTotalTitle: {
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 18,
        color: '#3D3D3D',
    },
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
        marginTop: 20,
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
        padding: 21,
    },
})