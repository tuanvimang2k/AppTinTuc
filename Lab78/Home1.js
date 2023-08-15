import { StyleSheet, Text, View, TextInput, Pressable, Image, ScrollView } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
import Detail1 from './Detail1'
import Thongtin from './Thongtin'
const HomeStack = () => {

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Detail1" component={Detail1} />
      <Stack.Screen name="Thongtin" component={Thongtin} />

    </Stack.Navigator>
  );
}

const Home1 = () => {
  const options = ({route}) => ({
    tabBarIcon: ({ focused, color, size }) => {
      if (route.name === 'Home') {
        return focused ?
          <Image source={require('../media1/Star.png')}/>
          : <Image source={require('../media1/Star.png')} />
          
      }else if (route.name === 'Thongtin') {
        if (focused) {
          return <Image source={require('../media1/gi.png')} />
        }
        return <Image source={require('../media1/gi.png')} />
      }
    },
    tabBarLabel: ({ focused, color, size }) => {
      if (route.name === 'Home') {
        return focused ? <Text style={{ color: 'blue' }}></Text>
          : <Text></Text>
      } else if (route.name === 'Thongtin') {
        return focused ? <Text style={{ color: 'blue' }}></Text>
          : <Text></Text>
      }
      
    }
  })
  return (
    <NavigationContainer>

      <View style={styles.container}>
        <Tab.Navigator screenOptions={options}>

          <Tab.Screen name='Home' component={HomeStack} />
          <Tab.Screen name='Thongtin' component={Thongtin} />

        </Tab.Navigator>

      </View>




    </NavigationContainer>

  )
}

export default Home1

const styles = StyleSheet.create({
  container: {
    headerShown:false,
    width: '100%',
    height: '100%',
    flex: 0,
    borderRadius: 20,
    justifyContent:'center'
  },
 

})