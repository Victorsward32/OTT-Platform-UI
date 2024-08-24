import React, { useState, useEffect } from 'react';
import { Image, StyleSheet, Text, TextInput, View, SafeAreaView, TouchableOpacity, BackHandler, Alert } from 'react-native';

const ForgetPassword = () => {
  const [email, setEmail] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [backPressCount, setBackPressCount] = useState(0);

  useEffect(() => {
    const backAction = () => {
      if (otpSent && backPressCount === 0) {
        Alert.alert(
          "Hold on!",
          "Do you really want to go back?",
          [
            {
              text: "Cancel",
              onPress: () => null,
              style: "cancel"
            },
            {
              text: "YES", onPress: () => {
                setOtpSent(false);
                setBackPressCount(0);
              }
            }
          ]
        );
        setBackPressCount(1);
        return true; // prevent default behavior (going back)
      } else if (otpSent && backPressCount === 1) {
        setOtpSent(false); // Go back to the email entry screen
        setBackPressCount(0); // Reset the back press count
        return true; // prevent default behavior (going back)
      }
      return false; // default back behavior (exit the screen)
    };

    const backHandler = BackHandler.addEventListener("hardwareBackPress", backAction);

    return () => backHandler.remove();
  }, [otpSent, backPressCount]);

  const handleSendOtp = () => {
    setOtpSent(true);
    setBackPressCount(0);
  };

  const handleResetPassword = () => {
    // Logic to reset password using OTP and new password
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <Image style={styles.image} source={require('../../assests/Icons/forgot.png')} />
        <Text style={styles.title}>Forgot Password</Text>
        <Text style={styles.description}>
          Provide your account's email address to reset your password.
        </Text>

        {!otpSent ? (
          <>
            <TextInput
              style={styles.input}
              placeholder="Enter your email"
              placeholderTextColor="#888"
              value={email}
              onChangeText={setEmail}
            />
            <TouchableOpacity style={styles.button} onPress={handleSendOtp}>
              <Text style={styles.buttonText}>Send OTP</Text>
            </TouchableOpacity>
          </>
        ) : (
          <>
            <TextInput
              style={styles.input}
              placeholder="Enter 6-digit OTP"
              placeholderTextColor="#888"
              value={otp}
              onChangeText={setOtp}
              keyboardType="numeric"
            />
            <TextInput
              style={styles.input}
              placeholder="Enter new password"
              placeholderTextColor="#888"
              value={newPassword}
              onChangeText={setNewPassword}
              secureTextEntry
            />
            <TouchableOpacity style={styles.button} onPress={handleResetPassword}>
              <Text style={styles.buttonText}>Reset Password</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </SafeAreaView>
  );
};

export default ForgetPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    width: '90%',
    alignItems: 'center',
  },
  image: {
    height: 120,
    width: 120,
    marginBottom: 30,
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    color: '#FFF',
    marginBottom: 20,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: '#FFF',
  },
  input: {
    width: '100%',
    padding: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    marginBottom: 20,
    // backgroundColor: '#FFF',
  },
  button: {
    width: '100%',
    paddingVertical: 15,
    backgroundColor: '#149ACF',
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '600',
  },
});
