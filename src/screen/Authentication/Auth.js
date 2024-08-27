import { StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';

const Auth = () => {
    const navigation = useNavigation();
    const [authChecked, setAuthChecked] = useState(false);

    useEffect(() => {
        const checkUserData = async () => {
            try {
                const userData = await AsyncStorage.getItem('userData');
                if (!userData) {
                    navigation.replace('LoginScreen');
                } else {
                    navigation.replace('BottomNavigation');
                }
            } catch (error) {
                console.error('Error checking user data:', error);
            } finally {
                setAuthChecked(true);
            }
        };

        checkUserData();
    }, [navigation]);

    if (!authChecked) {
        return null;  // Render nothing or a loading spinner while checking
    }

    return (
        <View style={styles.container}>
            <Text>Auth Loading Screen</Text>
        </View>
    )
}

export default Auth

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})
