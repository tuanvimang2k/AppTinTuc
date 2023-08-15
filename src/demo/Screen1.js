import { View, Text, StyleSheet, Button } from 'react-native'
import React, { useState } from 'react'

const Screen1 = () => {
    
    const [name, setName] = useState('xin chào')
    const [color, setColor] = useState('red')
    const Click = () => {
        setName('hello')
        console.log(name)
    }
    const ChangeColor = () => {
        const arr = ['red', 'yellow', 'green']
        const random = Math.floor(Math.random() * arr.length)
        setColor(arr[random])
    }
    return (
        <View>
            <View style={{
                backgroundColor: color,
                width: 100,
                height: 100,
                

            }}>

            </View>
            <Button
                title='Đổi màu'
                onPress={ChangeColor}
            />
            <Text>{name}</Text>
            <Button
            title='Đổi tên'
            onPress={Click}
            />
        </View>
    )
}
export default Screen1