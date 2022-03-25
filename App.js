
import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react'
import { StyleSheet, Text, View, Button, StatusBar as AndroidStatusBar } from 'react-native';
import TodoList from './components/TodoList.jsx';
import Header from './components/Header.jsx';
import Home from './components/Home.jsx';
import Register from './components/Register.jsx';
import Login from './components/Login.jsx';
import Account from './components/Account.jsx';
import { NavigationContainer } from '@react-navigation/native';
import { app } from './firebase-config.js';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {getAuth, onAuthStateChanged } from 'firebase/auth';
const Drawer = createDrawerNavigator();




export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    console.log('state changed');
    if (!user) {
      setLoggedIn(false);
    } else {
      setLoggedIn(true);
    }
  });

    let accountOptions;
    if (!loggedIn){
      accountOptions=(
      <>
        <Drawer.Screen name='Login' component={Login}/>
        <Drawer.Screen name='Register' component={Register}/>
      </>
      );
    } else {
      accountOptions=(
        <>
          <Drawer.Screen name='Account' component={Account}/>
        </>
      );
    }

  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Header/>
        <Drawer.Navigator 
          initialRouteName='Todo'
          screenOptions={{
            headerShown: false
          }}
        >
          <Drawer.Screen name='Home' component={Home} />
          <Drawer.Screen name='Todo' component={TodoList}/>   
          {accountOptions}
        </Drawer.Navigator>
        
      </View>
    </NavigationContainer>
  );
}
  
const styles = StyleSheet.create({
  container: {
    paddingTop: AndroidStatusBar.currentHeight,
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
  },

  
});