import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Image,Platform  } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ActiveAds from './activeAds'; // Import ActiveAds component
import PendingAds from './pendingAds';
import RemovedAds from './removedAds';

const MyAds = () => {
    const navigation = useNavigation();
    const [activeAdsCount, setActiveAdsCount] = useState(0); // Number of active ads
    const [pendingAdsCount, setPendingAdsCount] = useState(0); // Number of pending ads
    const [removedAdsCount, setRemovedAdsCount] = useState(0); // Number of removed ads
    const [activeAds, setActiveAds] = useState([]); // Array of active ads
    const [pendingAds, setPendingAds] = useState([]); // Array of pending ads
    const [removedAds, setRemovedAds] = useState([]); // Array of removed ads
    const [selectedSection, setSelectedSection] = useState('Active Ads'); // Set default to Active Ads

    useEffect(() => {
        // Simulate fetching counts from an API
        fetchAdsCounts();
        // Simulate fetching active ads from an API
        fetchActiveAds();
    }, []);

    // useEffect(() => {
    //     // Simulate fetching counts from an API
    //     setActiveAdsCount(activeAds.length);
    //     setPendingAdsCount(0);
    //     setRemovedAdsCount(0);
    // }, [activeAds]);

    const fetchAdsCounts = () => {
        // Simulate fetching counts from an API
        // For now, let's assume the counts are 0
        setActiveAdsCount(0);
        setPendingAdsCount(0);
        setRemovedAdsCount(0);
    };

    const fetchActiveAds = () => {
        // Simulate fetching active ads from an API
        // Replace this with actual API call to fetch active ads
        const dummyActiveAds = [
            { id: 1, Name: 'Honda Civic', Price: '$3,2,32389', City: 'Rwalpindi', ModelYear: '2007', image: require('../assets/car.jpg') },
            { id: 2, Name: 'Honda Civic', Price: '$3,2,339', City: 'Rwalpindi', ModelYear: '2007', image: require('../assets/car2.jpg') },
            { id: 3, Name: 'Honda Civic', Price: '$3,2,32349', City: 'Rwalpindi', ModelYear: '2007', image: require('../assets/car.jpg') },
        ];
        setActiveAds(dummyActiveAds);
        fetchAdsCounts();
    };

    const handleRemovePress = (itemToRemove) => {
        // Remove the item from the activeAds array
        // const updatedActiveAds = activeAds.filter(item => item.id !== itemToRemove.id);
        // setActiveAds(updatedActiveAds);
        // // Update the count of active ads
        // setActiveAdsCount(updatedActiveAds.length);
        const updatedActiveAds = activeAds.filter(item => item.id !== itemToRemove.id);
        setActiveAds(updatedActiveAds);
        setRemovedAds([...removedAds, itemToRemove]); // Add removed ad to the removedAds array
        setActiveAdsCount(updatedActiveAds.length);
        setRemovedAdsCount(removedAds.length + 1); 

    };

    const handleBackPress = () => {
        navigation.goBack();
    };

    return ( 
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                {/* Back button */}
                <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
                    <Image
                        source={require('../assets/back-arrow.png')}
                        style={styles.backImage}
                    />
                </TouchableOpacity>
                {/* Title */}
                <Text style={styles.title}>
                    {selectedSection === 'Active Ads'
                        ? `Active Ads (${activeAdsCount})`
                        : selectedSection === 'Pending Ads'
                            ? `Pending Ads (${pendingAdsCount})`
                            : `Removed Ads (${removedAdsCount})`}
                </Text>
            </View>

            {/* Content */}
            <View style={styles.content}>
                <View style={styles.sectionsContainer}>
                    <TouchableOpacity
                        style={[
                            styles.sectionButton,
                            selectedSection === 'Active Ads' && styles.selectedSection,
                        ]}
                        onPress={() => setSelectedSection('Active Ads')}
                    >
                        <Text style={styles.sectionText}>Active Ads</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[
                            styles.sectionButton,
                            selectedSection === 'Pending Ads' && styles.selectedSection,
                        ]}
                        onPress={() => setSelectedSection('Pending Ads')}
                    >
                        <Text style={styles.sectionText}>Pending Ads</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[
                            styles.sectionButton,
                            selectedSection === 'Removed Ads' && styles.selectedSection,
                        ]}
                        onPress={() => setSelectedSection('Removed Ads')}
                    >
                        <Text style={styles.sectionText}>Removed Ads</Text>
                    </TouchableOpacity>
                </View>

                {/* Render Ads based on selected section */}
                {selectedSection === 'Active Ads' && activeAds.length > 0 ? (
                    <ActiveAds adData={activeAds} navigation={navigation} onRemoveItem={handleRemovePress} />
                ) : selectedSection === 'Pending Ads' && pendingAds.length > 0 ? (
                    <PendingAds />
                ) : selectedSection === 'Removed Ads' && removedAds.length > 0 ? (
                    <RemovedAds adData={removedAds} navigation={navigation} />
                ) : (
                    <Text style={styles.noAdsText}>No {selectedSection}</Text>
                )}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#Ac3803',
        padding: 15,
        height: 60,
    },
    backButton: {
        padding: 5,
    },
    backImage: {
        width: 30,
        height: 30,
        resizeMode: 'contain',
        tintColor: 'white',
    },
    title: {
        color: 'white',
        fontSize: 18,
        marginLeft: 10,
        fontWeight: 'bold',
    },
    content: {
        flex: 1,
        paddingTop: 10, // Add padding to account for header height
    },
    sectionsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 10,
    },
    sectionButton: {
        paddingVertical: 15,
    },
    selectedSection: {
        borderBottomWidth: 2,
        borderColor: 'black',
    },
    sectionText: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 20,
    },
    noAdsText: {
        textAlign: 'center',
        marginTop: 20,
        fontSize: 16,
        color: 'gray',
    },
});

export default MyAds;
