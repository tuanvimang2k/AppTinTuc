import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'

const Them = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header} >
                <Image style={styles.back} source={require('../../media/iconback.png')} />
                <Text style={styles.txtBugers}>Burgers</Text>
                <Text style={styles.txtFilter}>Filter</Text>
            </View>

            <View style={styles.nav} >
                <Text style={[styles.txtDon, { width: 211 }]}>We have founds 80 results of Burger’s</Text>
                <Text style={styles.txtAgain}>Search Again</Text>
            </View>
            <ScrollView style={styles.scroll}>
                <View style={{flexDirection:'row',justifyContent:'space-between'}} >
                    <View style={{flexDirection:'column',width:'50%'}}>
                    <View style={{ position: 'relative', padding: 10 }} >
                        <Image source={require('../../media/BaiLamThem/anh1.png')} />
                        <Text style={styles.txtMC}>McDonald's</Text>
                        <View style={{ width: 155, flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text>Chinese</Text>
                            <Text>American</Text>
                        </View>
                    </View>
                    <View style={{ position: 'relative', padding: 10 }} >
                        <Image source={require('../../media/BaiLamThem/anh1.png')} />
                        <Text style={styles.txtMC}>McDonald's</Text>
                        <View style={{ width: 155, flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text>Chinese</Text>
                            <Text>American</Text>
                        </View>
                    </View>
                    
                    </View>
                    
                    <View style={{flexDirection:'column',width:'50%'}}>
                    <View style={{ position: 'relative', padding: 10 }} >
                        <Image source={require('../../media/BaiLamThem/anh2.png')} />
                        <Text style={styles.txtMC}>McDonald's</Text>
                        <View style={{ width: 155, flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text>Chinese</Text>
                            <Text>American</Text>
                        </View>
                    </View>
                    <View style={{ position: 'relative', padding: 10 }} >
                        <Image source={require('../../media/BaiLamThem/anh2.png')} />
                        <Text style={styles.txtMC}>McDonald's</Text>
                        <View style={{ width: 155, flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text>Chinese</Text>
                            <Text>American</Text>
                        </View>
                    </View>
                    </View>
                    
                    
                </View>
                
                

                
            </ScrollView>
        </View>
    )
}

export default Them
const styles = StyleSheet.create({
    scroll: {
        marginTop: 24,
    },
    txtMC: {
        fontWeight: '300',
        fontSize: 20,
        lineHeight: 27,
        letterSpacing: 0.4,
        color: '#010f07',
    },
    txtAgain: {
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: -0.4,
        color: '#EEA734',
    },
    txtDon: {
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: -0.4,
        color: '#010f07',
    },
    nav: {
        marginTop: 24,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    txtFilter: {
        fontWeight: '400',
        fontSize: 21,
        lineHeight: 21,
        letterSpacing: -0.4,
        color: '#010f07',
    },
    txtBugers: {
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 21,
        letterSpacing: -0.4,
        color: '#000000',
    },
    header: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    back: {
        width: 24,
        height: 24,
    },
    container: {
        width: '100%',
        height: '100%',
        padding: 16,
    },
})