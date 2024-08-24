import { ScrollView, StyleSheet,SafeAreaView, Text, View } from 'react-native'
import React from 'react'
import AdvertiseCard from '../Components/AdvertiseCard'
import LatestCart from '../Components/LatestCart'
import LanguageMovie from '../Components/LanguageMovie'
import MostPopularShows from '../Components/MostPopularShows'
import BottomNavigation from '../../Navigation/BottomNavigation'

const HomeScreen = () => {
  return (
    <SafeAreaView>
    <ScrollView>
    <View>
      <ScrollView horizontal={true} style={styles.AdScrollView}>
        <AdvertiseCard />
        <AdvertiseCard />
        <AdvertiseCard />
      </ScrollView>
      <View >
        <Text style={styles.latest}>Latest</Text>
      </View>
      <View>
        <ScrollView horizontal={true} style={styles.AdScrollView}>
          <LatestCart />
          <LatestCart />
          <LatestCart />
        </ScrollView>
      </View>
      <View >
        <Text style={styles.latest}>Watch in your Language</Text>
      </View>
      <View>
        <ScrollView horizontal={true} style={styles.AdScrollView}>
          <LanguageMovie />
          <LanguageMovie />
          <LanguageMovie />
        </ScrollView>
      </View>
      <View >
        <Text style={styles.latest}>Most popular Show</Text>
      </View>
      <View>
        <ScrollView horizontal={true} style={styles.AdScrollView}>
        <MostPopularShows />
          <MostPopularShows />
          <MostPopularShows />
        </ScrollView>
      </View>
    </View>
    </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  AdScrollView: {
    marginHorizontal: 15,
    marginVertical: 15
  },
  latest: {
    color: '#fff',
    fontWeight: '800',
    fontSize: 18,
    marginStart: 10
  }
})