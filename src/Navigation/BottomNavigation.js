import { StyleSheet } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screen/Items/HomeScreen';
import Downloads from '../screen/Items/Downloads';
import Search from '../screen/Items/Search';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Bottom = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <Bottom.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
            return <AntDesign name={iconName} size={size} color={color} />;
          } else if (route.name === 'Download') {
            iconName = 'download';
            return <AntDesign name={iconName} size={size} color={color} />;
          } else if (route.name === 'Search') {
            iconName = 'search1';
            return <AntDesign name={iconName} size={size} color={color} />;
          }
        },
        tabBarActiveTintColor: '#149ACF', // Active icon color
        tabBarInactiveTintColor: 'gray',  // Inactive icon color
        tabBarStyle: { backgroundColor: '#1F1F1F' }, // Dark background for the tab bar
      })}
    >
      <Bottom.Screen
        name='Home'
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Bottom.Screen
        name='Download'
        component={Downloads}
        options={{ headerShown: false }}
      />
      <Bottom.Screen
        name='Search'
        component={Search}
        options={{ headerShown: false }}
      />
    </Bottom.Navigator>
  );
}

export default BottomNavigation;

const styles = StyleSheet.create({});
