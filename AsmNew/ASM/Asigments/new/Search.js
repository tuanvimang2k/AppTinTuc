import { View, Text } from 'react-native'
import React from 'react'
import Detail from './Detail';
im
const Search = (props) => {

  const { navigation } = props;
  const ongoDetail = () => {
    navigation.navigate('HomeStack',{screen: 'Detail', params: {user: 'jane'}, });
  }
  return (
    <View>
      <Text onPress={()=> ongoDetail}>Search</Text>
    </View>
  )
}

export default Search