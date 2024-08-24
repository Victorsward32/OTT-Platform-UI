import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const LanguageMovie = () => {
  return (
    <View style={styles.LanguageContainer}>
      <Text>Hindi</Text>
    </View>
  )
}

export default LanguageMovie

const styles = StyleSheet.create({
    LanguageContainer:{
        height:150,
        width:180,
        borderRadius:5,
        backgroundColor:'#DD730F',
        marginLeft:8,
        marginRight:8,
        marginBottom:20,
        justifyContent:'space-evenly',
        flexDirection:'row',
        overflow:'hidden',
    },
})