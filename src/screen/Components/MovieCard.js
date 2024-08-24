import React from 'react';
import { ImageBackground, StyleSheet, View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const MovieCard = ({ movie }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <ImageBackground
                    style={styles.image}
                    source={{ uri: movie.poster_path }}
                    resizeMode="cover"
                >
                    <View style={styles.textContainer}>
                        <Text style={styles.title}>{movie.original_title}</Text>
                    </View>
                </ImageBackground>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#ffffff",
        height: 200,
        width: '45%',
        borderRadius: 10,
        marginBottom: 15,
        marginRight: 10,
        overflow: 'hidden',
    },
    image: {
        height: '100%',
        width: '100%',
        justifyContent: 'flex-end',
    },
    textContainer: {
        padding: 5,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    title: {
        color: 'white',
        fontSize: 16,
    },
});

export default MovieCard;
