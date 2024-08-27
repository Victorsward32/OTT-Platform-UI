import { StyleSheet, ImageBackground, TextInput, TouchableOpacity, Text, View, Alert } from 'react-native'
import React, { useState } from 'react'
import auth from '@react-native-firebase/auth'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  // const UserSignIn = () => {
  //   auth()
  //     .signInWithEmailAndPassword(email, password)
  //     .then(() => {
  //       // Alert.alert('User logged in!');
  //       navigation.replace('Auth'); // Navigate to Home Screen after successful login
  //     })
  //     .catch(error => {
  //       console.error(error);
  //       if (error.code === 'auth/user-not-found') {
  //         Alert.alert('No user found with this email.');
  //       } else if (error.code === 'auth/wrong-password') {
  //         Alert.alert('Incorrect password.');
  //       } else {
  //         Alert.alert('Login failed. Please try again.');
  //       }
  //     });
  // }
  const UserSignIn = () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(async (userCredential) => {
          const user = userCredential.user;
          // Save user data to AsyncStorage
          try {
              await AsyncStorage.setItem('userData', JSON.stringify(user));
              navigation.replace('Auth'); // Navigate to Auth check screen
          } catch (error) {
              console.error('Failed to save user data:', error);
          }
      })
      .catch(error => {
          console.error(error);
          if (error.code === 'auth/user-not-found') {
              Alert.alert('No user found with this email.');
          } else if (error.code === 'auth/wrong-password') {
              Alert.alert('Incorrect password.');
          } else {
              Alert.alert('Login failed. Please try again.');
          }
      });
}


  return (
    <ImageBackground source={require('../../assests/Background_1.jpg')} // Update with your image path
      style={styles.background}>

      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>

        <TextInput 
          style={styles.input}
          placeholder="Enter your email here"
          value={email}
          onChangeText={txt => setEmail(txt)} // Updated from onPress to onChangeText
        />
        <TextInput 
          style={styles.input} 
          placeholder="Enter your password here"
          secureTextEntry={true} 
          value={password}
          onChangeText={txt => setPassword(txt)} // Updated from onPress to onChangeText
        />

        <TouchableOpacity style={styles.button} onPress={UserSignIn}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>

        <View style={styles.signUpContainer}>
          <Text style={styles.text1}>Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
            <Text style={styles.signUpText}>Sign Up here</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  background: {
    height: '100%',
    resizeMode: 'cover', 
    justifyContent: 'center',
  },
  container: {
    flex: 0,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#eab676',
  },
  input: {
    height: 50,
    borderColor: '#7A7876',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 15,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#eab676',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  signUpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  text1: {
    color: '#fff',
    marginRight: 5,
  },
  signUpText: {
    color: '#eab676',
  },
})
