import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Screen3 = () => {
  return (
    <View style = {myStyles.body}>
      <Text>Screen3</Text>
      <View style= {myStyles.view1} ></View>
      <View style= {myStyles.view2} ></View>
      <View style= {myStyles.view3} ></View>
      <View style= {myStyles.view4} ></View>
      <View style= {myStyles.view5} ></View>
    </View>
  )
}

export default Screen3 
const myStyles = StyleSheet.create({
    view1:{backgroundColor:'red',width:50,height:50},
    view2:{backgroundColor:'green',width:50,height:50},
    view3:{backgroundColor:'blue',width:50,height:50},
    view4:{backgroundColor:'black',width:50,height:50},
    view5:{backgroundColor:'orange',width:50,height:50},


    body:{
        flexBasis:'row',
        backgroundColor:'yellow',
        width:'100%',
        height: '100%',
        padding:16
    }
})