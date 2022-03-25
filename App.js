import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { StyleSheet, Text, View, Button, StatusBar as AndroidStatusBar } from 'react-native';
import TodoList from './components/TodoList.jsx';
import Header from './components/Header.jsx';
import Home from './components/Home.jsx';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createDrawerNavigator } from '@react-navigation/drawer';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Header/>
        <Stack.Navigator 
          initialRouteName='Todo'
          screenOptions={{
            headerShown: false
          }}
        >
          <Stack.Screen name='Home' component={Home} />
          <Stack.Screen name='Todo' component={TodoList}/>
        </Stack.Navigator>
        
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