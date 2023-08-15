import { StyleSheet, Text, View } from 'react-native'
import React,{useState,useContext,createContext} from 'react'

// tạo context dung chung cho cac component con
const Screen8Context = createContext();
// tao provider dùng chung cho cac component
const Screen8Provider = (props) =>{
  const {children} =  props;
  const [name,setName]= useState('Vĩ');
  return(
    <Screen8Context.Provider value={{name,setName}}>
      {children}
    </Screen8Context.Provider>
  )

}
const Screen82 = () => {
  const {name} = useContext(Screen8Context)
  return (
    <View>
      <Text style={{fontWeight:'bold',fontSize:30}}>Screen82:{name}</Text>
    </View>
  )
}
const Screen83 = () => {
  return (
    <View>
      <Text>Screen83</Text>
    </View>
  )
}
const Screen8 = () => {
  return (
    <Screen8Provider>
      <Screen82/>
    </Screen8Provider>
  )
}


export default Screen8

const styles = StyleSheet.create({})