import React from 'react';
import { StyleSheet, View } from 'react-native';
import Navigation from './src/Navigation/Navigation';
import MoviePage from './src/screen/Pages/MoviePage';
import ForgetPassword from './src/screen/Authentication/ForgetPassword';
import RegisterScreen from './src/screen/Authentication/RegisterScreen';


const App = () => {
  return (
    <View style={styles.container}>
      <Navigation />
      {/* <ForgetPassword/> */}
  
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1f1f1f', // Dark background color
  },
});
