import { StyleSheet,TouchableOpacity,ScrollView,Image,AntDesign, Text, View } from 'react-native'
import React from 'react'

const AdminScreen = () => {
  return (
    <ScrollView>
    <View>
        <TouchableOpacity>
            <Image style={styles.userProfile} source={require('../../assests/userprofile.png')} />
        </TouchableOpacity>

        <View>
            <Text style={styles.username}>
                SeleomanBhai@Example.com
            </Text>
            <Text style={styles.PhoneNo} >+91 9029118228</Text>
        </View>
        <View style={styles.quickMenu}>
            <TouchableOpacity style={styles.TouchMenue}>
                <Text style={styles.trackorder}> Track Order</Text>
                <View>
                    {/* <AntDesign name='right' size={18} color={'#000'} /> */}
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.TouchMenue}>
                <Text style={styles.trackorder}> previous Order</Text>
                <View>
                    {/* <AntDesign name='right' size={18} color={'#000'} /> */}
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.TouchMenue}>
                <Text style={styles.trackorder}> Return & refund</Text>
                <View>
                    {/* <AntDesign name='right' size={18} color={'#000'} /> */}
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.TouchMenue}>
                <Text style={styles.trackorder}> Change Password</Text>
                <View>
                    {/* <AntDesign name='right' size={18} color={'#000'} /> */}
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.TouchMenue, { borderBottomWidth: 0.5 }]}>
                <Text style={[styles.trackorder]}> Logout</Text>
                <View>
                    {/* <AntDesign name='right' size={18} color={'#000'} /> */}
                </View>
            </TouchableOpacity>
        </View>

    </View>

</ScrollView>
  )
}

export default AdminScreen

const styles = StyleSheet.create({
  userProfile: {
        height: 200,
        width: 200,
        alignSelf: 'center',
        marginTop: 20
    },
    username: {
        color: "#000",
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center',
        marginTop: 10,

    },
    PhoneNo: {
        color: "#000",
        fontWeight: 'bold',
        fontSize: 14,
        marginTop: 5,
        textAlign: 'center',
        marginBottom: 30
    },
    trackorder: {
        color: '#000',
        fontSize: 16,



    },
    quickMenu:{
        paddingBottom:10,
    },
    TouchMenue: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',

        paddingHorizontal: 15,
        paddingVertical: 7,
        marginHorizontal: 15,
        borderBottomColor: '#eee3',
        borderTopWidth: 0.5,
        borderBottomWidth: 0.5
    }
})