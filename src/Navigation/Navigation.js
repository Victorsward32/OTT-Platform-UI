import React from 'react';
import { DarkTheme, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../screen/Splash/SplashScreen';
import HomeScreen from '../screen/Items/HomeScreen';
import BottomNavigation from './BottomNavigation';
import MoviePage from '../screen/Pages/MoviePage';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer theme={DarkTheme}>
      <Stack.Navigator initialRouteName='BottomNavigation'>
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BottomNavigation"
          component={BottomNavigation} // Add BottomNavigation as a screen
          options={{ headerShown: false }} // Optional: Hide header for BottomNavigation
        />
         <Stack.Screen
          name="MoviePage"
          component={MoviePage} // Add BottomNavigation as a screen
          options={{ headerShown: false }} // Optional: Hide header for BottomNavigation
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
