import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Screen6 from './Screen6';
import Screen7 from './Screen7';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Screen5 = () => {
  return (
    <NavigationContainer>
      {/* <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Screen6') {
              if (focused) {
                return <Image source={require('../../media/BookmarkIcon.png')} />
              } else {
                return <Image source={require('../../media/explore.png')} />
              }

            } else if (route.name === 'Screen7') {

            }
          },
          tabBarLabel: ({ focused, color, size }) => {
            if (route.name === 'Screen6') {
              return focused ? <Text style={{ color: 'blue' }}>Home</Text> : <Text>Home</Text>
            } else if (route.name === 'Screen7') {
              return focused ? <Text style={{ color: 'blue' }}>Home</Text> : <Text>Home2</Text>
            }
          }

        })}
      >
        <Tab.Screen name="Screen6" component={Screen6} />
        <Tab.Screen name="Screen7" component={Screen7} />
      </Tab.Navigator> */}
      <Stack.Navigator>
        <Stack.Screen name='Screen6' component={Screen6} />
        <Stack.Screen name='Screen7' component={Screen7} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Screen5