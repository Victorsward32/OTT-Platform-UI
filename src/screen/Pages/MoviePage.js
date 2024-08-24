import { useState } from 'react';
import React from 'react';
import { StyleSheet, Image, Text, View, TouchableOpacity, SafeAreaView, ScrollView, ToastAndroid } from 'react-native';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';

const MoviePage = ({ route }) => {
    const { movie } = route.params; // Retrieve the movie data passed from the Search page

    const [isLiked, setIsLiked] = useState(false);
    const [isDisliked, setIsDisliked] = useState(false);
    const [isDownloaded, setIsDownloaded] = useState(false);
    const [watchLater, setWatchLater] = useState(false);

    const handleWatchLater = () => {
        setWatchLater(!watchLater);
        if (!watchLater) {
            ToastAndroid.show("Added to Watch Later", ToastAndroid.SHORT);
        } else {
            ToastAndroid.show("Removed from Watch Later", ToastAndroid.SHORT);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.PosterContainer}>
                    <Image style={styles.PosterImg} source={{ uri: movie.poster_path }} />
                </View>
                <Text style={styles.title}>{movie.original_title}</Text>
                <View style={styles.ReviewBar}>
                    <TouchableOpacity
                        style={styles.reviewButton}
                        onPress={() => setIsLiked(!isLiked)}
                    >
                        <AntDesign name='like2' size={20} color={isLiked ? '#149ACF' : '#FFF'} />
                        <Text style={styles.reviewButtonText}>28.k</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.reviewButton}
                        onPress={() => setIsDisliked(!isDisliked)}
                    >
                        <AntDesign name='dislike2' size={20} color={isDisliked ? '#149ACF' : '#FFF'} />
                        <Text style={styles.reviewButtonText}>18.k</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.reviewButton}
                        onPress={() => setIsDownloaded(!isDownloaded)}
                    >
                        <AntDesign name='download' size={20} color={isDownloaded ? '#149ACF' : '#FFF'} />
                        <Text style={styles.reviewButtonText}>Download</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.reviewButton} onPress={handleWatchLater}>
                        <MaterialIcons name='watch-later' size={20} color={watchLater ? '#149ACF' : '#FFF'} />
                        <Text style={[styles.reviewButtonText, { color: '#FFF' }]}>
                            Watch Later
                        </Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.sectionTitle}>Description</Text>
                <View style={styles.Description}>
                    <ScrollView>
                        <Text style={styles.descriptionText}>
                            {movie.overview}
                        </Text>
                    </ScrollView>
                </View>
                <TouchableOpacity style={styles.WatchNow}>
                    <Text style={styles.watchNowText}>Watch Now</Text>
                </TouchableOpacity>
                <Text style={styles.sectionTitle}>Cast</Text>
                <View style={styles.CastContainer}>
                    <ScrollView horizontal={true} contentContainerStyle={styles.CastContentContainer}>
                        {movie.casts.map((cast, index) => (
                            <View key={index} style={styles.CastImgView}>
                                <Image source={{ uri: cast.profile_path }} style={styles.castImage} />
                                <Text style={styles.castName}>{cast.name}</Text>
                            </View>
                        ))}
                    </ScrollView>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default MoviePage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    PosterContainer: {
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 10,
    },
    PosterImg: {
        height: 280,
        width: 190,
        borderRadius: 10,
    },
    title: {
        fontSize: 28,
        fontWeight: '800',
        textAlign: 'center',
        marginVertical: 10,
        color: '#FFFF',
    },
    ReviewBar: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginVertical: 10,
    },
    reviewButton: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 5,
        flexDirection: 'column',
        alignItems: 'center',
    },
    reviewButtonText: {
        marginLeft: 5,
        color: '#FFF',
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: '600',
        marginHorizontal: 20,
        color: '#FFFF',
        marginBottom: 10,
    },
    Description: {
        backgroundColor: '#333',
        marginHorizontal: 20,
        padding: 15,
        borderRadius: 10,
        marginBottom: 20,
    },
    descriptionText: {
        fontSize: 16,
        color: '#FFF',
        lineHeight: 24,
    },
    WatchNow: {
        marginHorizontal: 20,
        paddingVertical: 15,
        borderRadius: 10,
        alignItems: 'center',
        backgroundColor: '#149ACF',
        marginBottom: 20,
    },
    watchNowText: {
        fontSize: 18,
        fontWeight: '700',
        color: '#FFF',
    },
    CastContainer: {
        flexDirection: 'row',
        marginHorizontal: 20,
        marginBottom: 20,
    },
    CastContentContainer: {
        alignItems: 'center',
    },
    CastImgView: {
        height: 180,
        width: 120,
        borderRadius: 10,
        overflow: 'hidden',
        marginRight: 15,
        alignItems: 'center',
        justifyContent: 'center', // Center the name text
    },
    castImage: {
        height: '80%',
        width: '100%',
        borderRadius: 10,
    },
    castName: {
        marginTop: 5,
        fontSize: 14,
        color: '#FFF',
        textAlign: 'center',
    },
});
