import { StyleSheet, ImageBackground,TextInput,TouchableOpacity,Text, View } from 'react-native'
import React from 'react'

const LoginScreen = () => {
  return (
    <ImageBackground source={require('../../assests/Background_1.jpg')} // Update with your image path
    style={styles.background}>    

  <View style={styles.container}>
    <Text style={styles.title} > Login </Text>

    <TextInput style={styles.input} placeholder="Enter your Username here" />
    <TextInput style={styles.input} placeholder="Enter your Password here" secureTextEntry={true} />


    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>Submit</Text>
    </TouchableOpacity>

    <View style={styles.signUpContainer}>
      <Text style={styles.text1}>Do you have an account?</Text>
      <TouchableOpacity>
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