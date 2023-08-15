import { View, Text, StyleSheet, TextInput,Pressable, } from 'react-native'
import React from 'react'
// props: là 1 object
const Screen2 = (props) => {
  const { children, x } = props
  return (
    <View style={styles.container}>
      <Text style={styles.title
      }>Tuấn Vĩ</Text>
      <TextInput
        style={styles.input} >hhh</TextInput>
      <Pressable
      style={styles.button}>
        <Text>Đây là nút bấm</Text>
      </Pressable>
      {children}
    </View>
  )
}

export default Screen2
const styles = StyleSheet.create({
  button:{
    marginTop: 16,
    borderRadius:10,
    width:50,
    height:50,
      backgroundColor:'white',
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor:'white',
  },
  title: {
    color: 'white',
    fontSize: 50,
    fontWeight: 'bold',
    fontStyle: 'italic'
  },
  container: {
    backgroundColor: 'red',
    with: '100%',
    height: '100%',
  }

});