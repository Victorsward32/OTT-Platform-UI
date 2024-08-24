import { ScrollView, StyleSheet,Image, Text, View } from 'react-native'
import React from 'react'

const AdvertiseCard = () => {
  return (
   <View style={styles.AdContainer}>
   <Image style={styles.BackImg} source={require('../../assests/Justice_league.png')}/>
     
   </View>
  )
}

export default AdvertiseCard

const styles = StyleSheet.create({
    AdContainer:{
        height:200,
        width:320,
        borderRadius:10,
        backgroundColor:'#F8EDE3',
        marginLeft:20,
        marginRight:20,
        marginBottom:20,
        marginTop:25,
        justifyContent:'space-evenly',
        flexDirection:'row',
        overflow:'hidden',
    },
    BackImg:{
        height:'100%',
        width:'100%'

    }
})