import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text, ScrollView } from 'react-native';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native'; // Import navigation hook from react-navigation
import HorizontalScrollItem from './horizontallScrollItems';
import ManagedByAutoFinder from '../components/managedByAutoFinder';
import FeaturedAd from '../components/featuredAd';
import AutoFinderServices from '../components/autoFinderServices';

const HomePremiumAds = () => {
    const navigation = useNavigation();
    const [selectedPackage, setSelectedPackage] = useState(null);

    const FeatureLine = ({ imageSource, text }) => (
        <View style={styles.featureLine}>
            <Image source={imageSource} style={styles.featureImage} />
            <Text style={styles.featureText}>{text}</Text>
        </View>
    );
    const WorksellForItForMe = ({ imageSource, text }) => (
        <View style={styles.worksellForItForMeLine}>
            <Image source={imageSource} style={styles.worksellForItForMeImage} />
            <Text style={styles.worksellForItForMeText}>{text}</Text>
        </View>
    );
    const handleBack = () => {
        // navigation.goBack(); // Go back when the back button is pressed
        navigation.goBack();
        // navigation.navigate('dashboard');
    };
    const handlePostAd = () => {
        navigation.navigate('freeAdsPostServices');
    };
    const handleListItForYouPress = () => {
        // Handle Premium Ads press
        console.log('Premium Ads pressed');
      };
    
      const handlePremiumAdsPress = () => {
        // Handle Free Ads press
        console.log('Free Ads pressed');
      };
    
      const handleCarInspectionPress = () => {
        // Handle Managed Ads press
        console.log('Managed Ads pressed');
      };
    
      const handleBoostAdsPress = () => {
        // Handle Car Inspection press
        console.log('Car Inspection pressed');
      };
    const handlerPostAdRightAway = () => {
        navigation.navigate('sellNowChoosePlan');
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

                    <Text style={styles.title}>Premium Ads Service</Text>
                </View>
            </View>
            <ScrollView>
                <Image
                    source={require('../assets/CarInspection.jpg')}
                    style={styles.image}
                />
                <Text style={styles.addText}>AutoFinder Premium Ads Service</Text>
                <TouchableOpacity
                    style={styles.button}
                    onPress={handlePostAd}
                >
                    <Text style={styles.buttonText}>Post Premium Ad</Text>
                </TouchableOpacity>

                <Text style={styles.sellWorkText}>How AutoFinder Premium Ads Service works?</Text>
                <WorksellForItForMe imageSource={require('../assets/number-1.png')} text="Sign Up for Premium ad services." />
                <WorksellForItForMe imageSource={require('../assets/number-2.png')} text="Providing details about vehicle you want to sell." />
                <WorksellForItForMe imageSource={require('../assets/number-3.png')} text="Your free ad will be displayed in the Premium ads section." />
                <WorksellForItForMe imageSource={require('../assets/number-3.png')} text="Interested buyers can contact the seller as well." />

                <Text style={styles.sellWorkText}>Advantage</Text>
                <Text style={styles.NoteText}>Autofinder offers premier ad placement for maximum exposure, ensuring your vehicle sells faster with 12 times the response rate of standard ads. Experience non-traditional advertising that extends visibility and provides ample space to showcase your listing.</Text>

                <Text style={styles.sellWorkText}>AutoFinder Services</Text>
                <AutoFinderServices
                    onPremiumAdsPress={handleListItForYouPress}
                    onFreeAdsPress={handlePremiumAdsPress}
                    onManagedAdsPress={handleBoostAdsPress}
                    onCarInspectionPress={handleCarInspectionPress}
                />

                {/* <Text style={styles.sellWorkText}>Managed By AutoFinder</Text> */}
                <View>
                    <ManagedByAutoFinder />
                </View>

                {/* <Text style={styles.sellWorkText}>Feature ad</Text> */}
                <View>
                    <FeaturedAd />
                </View>

                <Text style={styles.sellWorkText}>Looking to Sell Your Car?</Text>

                <View style={styles.roundedViewsContainer}>
                    <View style={styles.roundedView}>
                        <Text style={styles.roundedViewText}>Sell today!</Text>
                        <Text style={styles.subtext}>Place your ad to uncover the best offer from our potential buyers</Text>
                        <TouchableOpacity onPress={handlerPostAdRightAway}><Text style={styles.textButton}>Post an Ad right away</Text></TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        backgroundColor: '#Ac3803',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
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
    image: {
        width: '100%',
        height: 220,
        resizeMode: 'cover',
    },
    addText: {
        textAlign: 'center',
        padding: 10,
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10
    },
    button: {
        backgroundColor: '#Ac3803',
        padding: 15,
        margin: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    addTextChoose: {
        marginLeft: 10,
        padding: 10,
        color: 'firebrick',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10
    },
    featureLine: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        marginLeft: 20,

    },
    featureImage: {
        width: 30,
        height: 30,
        marginRight: 10,
    },
    featureText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black'
    },
    sellWorkText: {
        marginLeft: 10,
        padding: 5,
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10
    },
    worksellForItForMeLine: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        marginLeft: 20,
    },
    NoteText: {
        textAlign: 'center',
        color: 'grey',
        fontSize: 14,
        paddingHorizontal: 10,
        marginTop: 'auto',
        marginBottom: 'auto',
    },
    reportImage: {
        height: 250,
        width: 250,
        alignSelf: 'center'
    },
    worksellForItForMeImage: {
        width: 30,
        height: 30,
        marginRight: 10,
        tintColor: 'darkred'
    },
    worksellForItForMeText: {
        fontSize: 16,
        color: 'grey'
    },
    horizontalScroll: {
        marginTop: 10,
        marginRight: 5,
        marginLeft: 5,
    },
    roundedViewsContainer: {
        flexDirection: 'column',
        marginTop: 5,
        alignItems: 'center',
    },
    roundedView: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10,
        width: 350,
        height: 120,
        margin: 20,
    },
    roundedViewText: {
        fontSize: 16,
        color: 'firebrick',
        fontWeight: 'bold',
        marginTop: 1
    },
    subtext: {
        fontSize: 14,
        color: 'grey',
        marginTop: 10,
    },
    textButton: {
        marginTop: 20,
        color: 'royalblue'
    }
});

export default HomePremiumAds;
