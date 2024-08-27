import { StyleSheet, Text, ImageBackground, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import auth from '@react-native-firebase/auth'
import LoginScreen from './LoginScreen'
import { useNavigation } from '@react-navigation/native'

const RegisterScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const createUser = () => {
    auth()
      .createUserWithEmailAndPassword(
        email,
        password
      )
      .then(() => {
        console.log('User account created & signed in!');
        navigation.navigate('LoginScreen'); // Navigate to the login Screen 
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }
        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  }
  return (
    <ImageBackground source={require('../../assests/Background_1.jpg')} // Update with your image path
      style={styles.background}>

      <View style={styles.container}>
        <Text style={styles.title} > Sign Up </Text>

        <TextInput
          style={styles.input}
          placeholder="Enter your Username here"
          value={email}
          onChangeText={txt => setEmail(txt)}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter your Password here"
          secureTextEntry={true}
          value={password}
          onChangeText={txt => setPassword(txt)}
        />



        <TouchableOpacity style={styles.button} onPress={() => {
          createUser();
        }}>
          <Text style={styles.buttonText}>Create Account</Text>
        </TouchableOpacity>

        <View style={styles.signUpContainer}>
          <Text style={styles.text1}>Do you have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
            <Text style={styles.signUpText}>Sign In here</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({
  background: {
    height: '100%',
    resizeMode: 'cover', // or 'stretch'
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
  forgotPasswordContainer: {
    alignItems: 'flex-end',
    marginBottom: 30,
  },
  forgotPasswordText: {
    color: '#eab676',
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