import React, { useState, useEffect } from 'react';
import {
    View,
    Image,
    StyleSheet,
    TouchableOpacity,
    Text,
    TextInput,
    ScrollView,

} from 'react-native';
import { useNavigation } from '@react-navigation/native';
// import MarqueeText from 'react-native-marquee';

const CheckoutCarInspection = ({ navigation }) => {
    
    const handleBack = () => {
        navigation.goBack();
    };

    const handlecontinue = () => {
        // Implement logic for handling the 'Next' button
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={handleBack} style={styles.backButton}>
                    <Image
                        source={require('../assets/back-arrow.png')}
                        style={styles.backIcon}
                    />
                </TouchableOpacity>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Checkout</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        backgroundColor: 'darkred',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        elevation: 3,
        zIndex: 2,
    },
    backButton: {
        paddingRight: 20,
        tintColor: 'white',
    },
    backIcon: {
        width: 20,
        height: 20,
        tintColor: 'white',
    },
    titleContainer: {
        flex: 1,
    },
    title: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default CheckoutCarInspection;
