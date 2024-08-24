import { StyleSheet, Text,Image, View } from 'react-native'
import React from 'react'

const LatestCart = () => {
  return (
    <View style={styles.AdContainer}>
   <Image style={styles.BackImg} source={require('../../assests/Justice_league.png')}/>
     
   </View>
  )
}

export default LatestCart

const styles = StyleSheet.create({
    AdContainer:{
        height:100,
        width:160,
        borderRadius:10,
        backgroundColor:'#F8EDE3',
        marginLeft:8,
        marginRight:8,
        marginBottom:15,
        justifyContent:'space-evenly',
        flexDirection:'row',
        overflow:'hidden',
    },
    BackImg:{
        height:'100%',
        width:'100%'

    }
})