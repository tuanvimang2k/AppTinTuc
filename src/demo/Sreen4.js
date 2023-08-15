import {
    StyleSheet, Text, View,
    ScrollView, FlatList, Image
} from 'react-native'
import React, { useState } from 'react'


// adapter
// hiển thị 1 dòng item
const renderItem = (value) => {
    const { item } = value
    return (
        <View>
            <Text style={{ fontSize: 30 }}>
                {item.first_name}</Text>
        </View>
    )
}

const Screen4 = () => {
    const [refreshing, setRefreshing] = useState(false);
    const onRefresh = () => {
        setRefreshing(true);
        setTimeout(() => {
            DATA[5].first_name = 'Nguyen Van A'
            setRefreshing(false);
        }, 2000);
    }

    return (
        <View>
            <Text style={{ fontSize: 30 }}>Màn hình chính</Text>
            <FlatList
                onRefresh={onRefresh}
                refreshing={refreshing}
                horizontal={false}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                data={DATA}
                renderItem={renderItem}
                keyExtractor={(item, index) => item.id}
            />


            {/* <ScrollView
                horizontal={false}
                showsVerticalScrollIndicator={false}
                style={styles.scroll}>
                {
                    DATA.map((item, index) => {
                        return (
                            <View>
                                <Text style={{ fontSize: 30 }}>
                                    {item.first_name}</Text>
                            </View>
                        )
                    })
                }
            </ScrollView> */}
            <Text style={{ fontSize: 30 }}>Bottm</Text>
        </View>
    )
}

export default Screen4

const styles = StyleSheet.create({
    scroll: {
        backgroundColor: 'lightgray',
        width: '100%',
        height: 300,
    }
});


var DATA = [{
    "id": 1,
    "first_name": "Jard",
    "last_name": "Vaadeland"
}, {
    "id": 2,
    "first_name": "Emmit",
    "last_name": "Grebner"
}, {
    "id": 3,
    "first_name": "Jonathon",
    "last_name": "Hedditeh"
}, {
    "id": 4,
    "first_name": "Cello",
    "last_name": "Wessing"
}, {
    "id": 5,
    "first_name": "Rosalinda",
    "last_name": "Leyre"
}, {
    "id": 6,
    "first_name": "Angeline",
    "last_name": "Toulmin"
}, {
    "id": 7,
    "first_name": "Patty",
    "last_name": "Marcam"
}, {
    "id": 8,
    "first_name": "Flemming",
    "last_name": "Obispo"
}, {
    "id": 9,
    "first_name": "Levon",
    "last_name": "MacCleod"
}, {
    "id": 10,
    "first_name": "Rudiger",
    "last_name": "Penas"
}, {
    "id": 11,
    "first_name": "Domini",
    "last_name": "Jeaycock"
}, {
    "id": 12,
    "first_name": "Roderigo",
    "last_name": "Shouler"
}, {
    "id": 13,
    "first_name": "Witty",
    "last_name": "Rehm"
}, {
    "id": 14,
    "first_name": "Grayce",
    "last_name": "Vowels"
}, {
    "id": 15,
    "first_name": "Dun",}]