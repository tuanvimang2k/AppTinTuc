import { StyleSheet, Text, View, Image, } from 'react-native'

import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from './Home'
import Add from './Add'
import Seach from './Seach'
import Detail from './Detail'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import EditProFile from '../users/screens/EditProFile'
import Profile from './Profile'
const Stack = createNativeStackNavigator();
const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='Detail' component={Detail} />
    </Stack.Navigator>
  )
}
const ProfileStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Profile' component={Profile} />
      <Stack.Screen name='EditProFile' component={EditProFile} />
      <Stack.Screen name='Add' component={Add} />
    </Stack.Navigator>
  )
}
const Tab = createBottomTabNavigator();
const NewsNavigation = () => {
  const screenOptions = ({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
      let iconName;

      if (route.name === 'HomeStack') {
        if (focused) {
          return <Image source={require('../../../media/homeBlue.png')} />
        } else {
          return <Image source={require('../../../media/homeWhite.png')} />
        }

      } else if (route.name === 'Seach') {
        if (focused) {
          return <Image source={require('../../../media/seachBlue.png')} />
        } else {
          return <Image source={require('../../../media/seachWhite.png')} />
        }
      } else if (route.name === 'ProfileStack') {
        if (focused) {
          return <Image source={require('../../../media/profileBlue.png')} />
        } else {
          return <Image source={require('../../../media/profileWhite.png')} />
        }
      }
    },
    tabBarLabel: ({ focused, color, size }) => {

    },
  })
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen name='HomeStack' component={HomeStack} />
      <Tab.Screen name='Seach' component={Seach} />
      {/* <Tab.Screen name='EditProFile' component={EditProFile}/> */}
      {/* <Tab.Screen name='Add' component={Add}/> */}
      <Tab.Screen name='ProfileStack' component={ProfileStack} />

    </Tab.Navigator>
  )
}

export default NewsNavigation