import { SafeAreaView, ScrollView, StyleSheet,Alert, Image, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import BottomNavigation from '../../Navigation/BottomNavigation';

const Downloads = () => {
  const handleDelete=()=>{
    Alert.alert(
      "Delete Download",
      "Are you Sure you want to delete this download?",[ 
        {
          text:'No',
          style:'cancel'
        },{
          text:'Yes',
          onPress:()=> console.log('Deleted'),
          style:'Destructive'
        }
      ]
    )
  }
  return (
    <SafeAreaView style={styles.safeArea}>
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.card}>
        <Image style={styles.movieImg} source={require('../../assests/Justice_league.png')} /> 
        <View style={styles.details}>
          <Text style={styles.title}>Justice League</Text>
          <TouchableOpacity style={styles.watchButton}>
            <Text style={styles.watchButtonText}>Watch</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.deleteButton} onPress={handleDelete}>
            <Text style={styles.deleteButtonText}>Delete</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  </SafeAreaView>
  );
};

export default Downloads;

const styles = StyleSheet.create({
  // safeArea: {
  //   flex: 1,
  //   backgroundColor: '#121212',
  // },
  scrollContainer: {
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  card: {
    backgroundColor: '#1f1f1f',
    borderRadius: 10,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    elevation: 5,
  },
  movieImg: {
    height: 100,
    width: 80,
    borderRadius: 10,
    marginRight: 15,
  },
  details: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 15,
  },
  watchButton: {
    backgroundColor: '#3498db',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
    alignItems: 'center',
  },
  watchButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  deleteButton: {
    backgroundColor: '#e74c3c',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
  deleteButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
});
