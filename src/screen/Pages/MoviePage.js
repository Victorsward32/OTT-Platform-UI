import { StyleSheet, Image, Text, View, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'

const MoviePage = () => {
    return (
        <SafeAreaView>

            <View >
                <ScrollView>
                    <View style={styles.Postercontainer}>
                        <Image style={styles.PosterImg} source={require("../../assests/Justice_league.png")} />
                    </View>
                    <View>
                        <Text style={styles.title}>Justice league</Text>
                    </View>
                    <View style={styles.ReviewBar}>
                        <TouchableOpacity>
                            <Text>Likes</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text>Dislikes</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text>Download</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text>WatchLater</Text>
                        </TouchableOpacity>
                    </View>

                    <Text style={{ fontWeight: 'bold', fontSize: 18, marginTop: 10, marginLeft: 10, }}> Description</Text>
                    <View style={styles.Description} >

                        <ScrollView>
                            <Text style={{ fontSize: 16, textAlign: 'justify' }} >
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                            </Text>
                        </ScrollView>


                    </View>
                    <View >
                        <TouchableOpacity style={styles.WatchNow}>
                            <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#ffff' }}>Watch Now</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 20, marginTop: 10, }}>Cast</Text>
                    <View style={styles.CastContainer}>
                        {/* <Image source={require('../../assests/Justice_league.png')}/> */}
                        <ScrollView horizontal={true}>
                            <View style={styles.CastImgView}></View>
                        </ScrollView>

                    </View>
                </ScrollView>
            </View>

        </SafeAreaView>
    )
}

export default MoviePage

const styles = StyleSheet.create({
    Postercontainer: {
        height: 300,
        width: "100%",
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 15
    },
    PosterImg: {
        height: 300,
        width: 200,
        borderRadius: 10,
        overflow: 'hidden',
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        paddingStart: 15,
        paddingTop: 10,
        fontStyle: 'normal'
    },
    ReviewBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 20,
        marginRight: 20,
        marginTop: 10,

    }, Description: {
        height: 200,
        borderWidth: 1,
        borderColor: "#FFFFFF4F",
        margin: 10,
        borderRadius: 8
    }, WatchNow: {
        height: 60,
        borderRadius: 1,
        borderColor: '#fff',
        backgroundColor: "#149ACF",
        borderRadius: 10,
        marginLeft: 20,
        marginRight: 20,
        alignItems: 'center',
        justifyContent: 'center',
    }, CastContainer: {
        height: 180,
        margin: 20,
        overflow: 'hidden'

    }, CastImgView: {
        height: 180,
        width: 120,
        backgroundColor: "#fff",
        borderRadius: 10,

    }
})