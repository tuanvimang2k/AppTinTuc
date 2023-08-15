import React, { } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from './screens/Login'
import Register from './screens/Register'
import NewsNavigation from '../news/NewsNavigation'
import EditProFile from './screens/EditProFile'

const Stack = createNativeStackNavigator();
const UserNavigation = () => {
  return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Register' component={Register} />
      </Stack.Navigator>
  )
}

export default UserNavigation