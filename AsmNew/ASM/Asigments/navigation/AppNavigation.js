import { View, Text } from 'react-native'
import React, { useContext } from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { UserContext } from '../user/UserContext'
import UserNavigation from '../user/UserNavigation'
import NewNavigation from '../new/NewNavigation'


import { createNativeStackNavigator } from '@react-navigation/native-stack'

const AppNavigation = () => {
    const { user } = useContext(UserContext);
    return (
        <NavigationContainer>
            {
                user ? <NewNavigation />
                    : <UserNavigation />
            }
            {/* <NewNavigation /> */}
        </NavigationContainer>
    )
}

export default AppNavigation