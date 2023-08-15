/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { Component } from 'react';
import { SafeAreaView, } from 'react-native';
import { UserProvider } from './src/conponents/users/UserContext';
import { NewsProvider } from './src/conponents/news/NewsContext';
 import AppNavigation from './src/conponents/navigations/AppNavigation';

function App(): JSX.Element {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <UserProvider>
        <NewsProvider>
          <AppNavigation />
        </NewsProvider>
      </UserProvider>
     
      
    </SafeAreaView>
  );
}


export default App;
