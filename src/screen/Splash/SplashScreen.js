import React, { useEffect, useRef } from 'react';
import { StyleSheet, Text, Image, View, Animated } from 'react-native';
import BottomNavigation from '../../Navigation/BottomNavigation'

const SplashScreen = ({ navigation }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial opacity value is 0
  const scaleAnim = useRef(new Animated.Value(0.8)).current; // Initial scale value is 0.8

  useEffect(() => {
    // Simultaneous fade-in and scale-up animation for logo
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 2500,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 2500,
        useNativeDriver: true,
      }),
    ]).start();

    // Navigate to the Home screen after the animation completes
    setTimeout(() => {
      navigation.navigate('Home');
    }, 3000);
  }, [fadeAnim, scaleAnim, navigation]);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.logoContainer, { opacity: fadeAnim, transform: [{ scale: scaleAnim }] }]}>
        <Image source={require('../../assests/SplashLogo.png')} style={styles.logo} />
      </Animated.View>
      <Animated.Text style={[styles.appName, { opacity: fadeAnim }]}>
        MovieStream
      </Animated.Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1f1f1f', // Dark background
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    marginBottom: 20,
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain', // Adjust logo size and appearance
  },
  appName: {
    color: '#ffffff',
    fontSize: 30,
    fontWeight: '700',
    textAlign: 'center',
    letterSpacing: 2, // Spacing between letters for a more modern look
  },
});
