import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SellerProfile = ({ navigation }) => {
    const handleBack = () => {
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={handleBack} style={styles.backButton}>
                    <Image
                        source={require('../assets/back-arrow.png')}
                        style={styles.backIcon}
                    />
                </TouchableOpacity>
                <Text style={styles.title}>Seller Profile</Text>
            </View>

            {/* Content */}
            <View style={styles.content}>
                {/* Seller Information */}
                <View style={styles.infoContainer}>
                    <Text style={styles.label}>Name:</Text>
                    <Text style={styles.value}>Muhammad Faizan Fayyaz</Text>
                </View>
                <View style={styles.infoContainer}>
                    <Text style={styles.label}>Contact Info:</Text>
                    <Text style={styles.value}>ffayyaz8c@gmail.com</Text>
                </View>
                <View style={styles.infoContainer}>
                    <Text style={styles.label}>Location:</Text>
                    <Text style={styles.value}>chaklala, Rawalpindi</Text>
                </View>
                <View style={styles.infoContainer}>
                    <Text style={styles.label}>Timings for Contacting:</Text>
                    <Text style={styles.value}>9:00 AM - 5:00 PM (Mon-Fri)</Text>
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
        backgroundColor: '#fc6f03', // Tomato color
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        paddingHorizontal: 20,
    },
    backButton: {
        // paddingRight: 20,
    },
    backIcon: {
        width: 20,
        height: 20,
        tintColor: 'white',
    },
    title: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        flex: 1,
        textAlign: 'center',
    },
    content: {
        flex: 1,
        padding: 20,
    },
    infoContainer: {
        marginBottom: 15,
    },
    label: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
        color: '#fc6f03'
    },
    value: {
        fontSize: 14,
    },
});

export default SellerProfile;
