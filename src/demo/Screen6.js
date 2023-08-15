import { View, Text,Button } from 'react-native'
import React from 'react'

const Screen6 = (props) => {
  const {navigation} = props;
  return (
    <View>
      <Button title='Screen6'
      onPress={()=> navigation.navigate('Screen7')}/>
    </View>
  )
}

export default Screen6