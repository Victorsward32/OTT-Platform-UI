import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screen/Items/HomeScreen';
import Downloads from '../screen/Items/Downloads';
import Search from '../screen/Items/Search';

const Bottom = createBottomTabNavigator();
const BottomNavigation = () => {
  return (
    <Bottom.Navigator>

      <Bottom.Screen   name='Home' component={HomeScreen} options={{ headerShown: false }} />
      <Bottom.Screen name='Download' component={Downloads} options={{ headerShown: false }} />
      <Bottom.Screen name='Search' component={Search} options={{ headerShown: false }} />
    </Bottom.Navigator>
  )
}

export default BottomNavigation

const styles = StyleSheet.create({})