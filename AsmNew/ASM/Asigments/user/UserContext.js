
import React, { createContext, useState } from 'react'
import { login } from './userSevice';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const UserContext = createContext();

export const UserProvider = (props) => {
  const { children } = props;
  const [user, setUser] = useState(null)
  const [infouser, setifoUser] = useState({})
  const onLogin = async (email, password) => {
    try {
      const result = await login(email, password);
      console.log('login result', result);
      if (result.statusCode == 200) {
        setUser(result.data.user);
        await AsyncStorage.setItem('token', result.data.token);
        setifoUser(result.data.user);
        return true;
      }
    } catch (error) {
      console.log('login result', error);
    }
    return false;
  }

  return (
    <UserContext.Provider value={{ 
    user,
     setUser, 
     onLogin,infouser, setifoUser}}>
      {children}
    </UserContext.Provider>

  )
}
