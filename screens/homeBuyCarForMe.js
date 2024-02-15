import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text, ScrollView } from 'react-native';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native'; // Import navigation hook from react-navigation
import HorizontalScrollItem from './horizontallScrollItems';
import ManagedByAutoFinder from '../components/managedByAutoFinder';
// import InspectionIncludedComponentt from './InspectionIncludedComponent';
// import HorizontalScrollPackagee from './horizontalScrollPackage';

const homeBuyCarForMe = ({navigation}) => {

    // const navigation = useNavigation();

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
        navigation.navigate('home');
    };
    const handleFacilitateMyCarPurchase = () => {
        // handleFacilitateMyCarPurchase
        console.log("handleFacilitateMyCarPurchase");
        navigation.navigate('basic');
    };
    const handleHorizontalOfferingItemPress = (itemId) => {
        // Handle the press event for the specific item (optional)
        console.log(`Item ${itemId} pressed`);
    };
    // const handleHorizontalPackagesItemPress = (itemId) => {
    //     // Handle the press event for the specific item (optional)
    //     console.log(`Item ${itemId} pressed`);
    // };
    // const handlePackageButtonClick = (itemId) => {
    //     // Handle the button press event for the specific package
    //     console.log(`Button pressed for package ${itemId}`);
    //     console.log('package selected')
    //     setSelectedPackage(itemId);

        // if (itemId == 1) {
        //     // navigation.navigate('ABCScreenBasic');
        //     console.error('basic package');
        // } else if (itemId == 2) {
        //     // navigation.navigate('ABCScreenstandard');
        //     console.error('standrad package');
        // } else if (itemId == 3) {
        //     // navigation.navigate('ABCScreenPremium');
        //     console.error('premium package');
        // } else {
        //     // Handle the case when no package is selected
        //     console.error('No package selected');
        // }
    // };
    // const handleViewSampleInpectionReport = () => {
    //     // View sample inspection report
    // };
    const handlerPostAdRightAway = () => {
        // post an ad right away
        console.log("Post an Ad right away")
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
                    <Text style={styles.title}>Buy Car For Me</Text>
                </View>
            </View>

            <ScrollView>
                <Image
                    source={require('../assets/CarInspection.jpg')}
                    style={styles.image}
                />
                <Text style={styles.addText}>Buy Car For Me</Text>
                <TouchableOpacity
                    style={styles.button}
                    onPress={handleFacilitateMyCarPurchase}
                >
                    <Text style={styles.buttonText}>Facilitate My Car Purchase</Text>
                </TouchableOpacity>

                <Text style={styles.addTextChoose}>Why  AutoFinder  is  best  to  "Buy  Car  For You"? </Text>
                <FeatureLine imageSource={require('../assets/reports.png')} text="Personalized consultation" />
                <FeatureLine imageSource={require('../assets/staff.png')} text="Extensive vehicle search" />
                <FeatureLine imageSource={require('../assets/inspection.png')} text="Professional purchased executives" />
                <FeatureLine imageSource={require('../assets/inspection.png')} text="Tension free service" />

                <Text style={styles.sellWorkText}>How AutoFinder Buy Car For Me service works?</Text>
                <WorksellForItForMe imageSource={require('../assets/number-1.png')} text="Sign Up for Buy Car For Me service." />
                <WorksellForItForMe imageSource={require('../assets/number-2.png')} text="Our team will promptly contact you to collect information for your desired future car." />
                <WorksellForItForMe imageSource={require('../assets/number-3.png')} text="you have to pay initial payment through different channels available at your convenience." />


                {/* <Text style={styles.sellWorkText}>What's Included in the Car Inpection?</Text>
                <InspectionIncludedComponentt /> */}

                <Text style={styles.sellWorkText}>Summary</Text>
                <Text style={styles.summaryText}>Exciting News! Our new "Buy Car For Me" service
                    is here to streamline your car-buying journey. Simply share your preferences.
                    Our dedicated team will not only find your car but also ensure its quality with a thorough inspection.
                    Enjoy transparent pricing and let us negotiate the best deal for you.
                    Experience a stress-full car buying experience with Autofinder.
                </Text>

                {/* <Text style={styles.sellWorkText}>Sample AutoFinder Inpection Report</Text>
                <Image
                    source={require('../assets/inspectionReport.jpg')}
                    style={styles.reportImage}
                    resizeMode="contain"
                /> */}

                {/* <TouchableOpacity
                    style={styles.button}
                    onPress={handleViewSampleInpectionReport}
                >
                    <Text style={styles.buttonText}>View Sample Inspection Report</Text>
                </TouchableOpacity> */}

                {/* <Text style={styles.sellWorkText}>Inspection Packages</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
                    <HorizontalScrollPackagee
                        imageSource={require('../assets/carupto1000cc.jpg')}
                        title="Basic Package"
                        content="Upto 1000cc"
                        onPress={() => handleHorizontalPackagesItemPress(1)}
                        buttonText="PKR 4,800"
                        isSelected={selectedPackage === 1}
                        onButtonClick={() => handlePackageButtonClick(1)}
                    />
                    <HorizontalScrollPackagee
                        imageSource={require('../assets/carupto1000cc.jpg')}
                        title="Standard Package"
                        content="above 1000cc"
                        onPress={() => handleHorizontalPackagesItemPress(2)}
                        buttonText="PKR 6,800"
                        isSelected={selectedPackage === 2}
                        onButtonClick={() => handlePackageButtonClick(2)}
                    />
                    <HorizontalScrollPackagee
                        imageSource={require('../assets/carupto1000cc.jpg')}
                        title="Premium Package"
                        content="All 4*4, Jeeps & German cars"
                        onPress={() => handleHorizontalPackagesItemPress(3)}
                        buttonText="PKR 8,800"
                        isSelected={selectedPackage === 3}
                        onButtonClick={() => handlePackageButtonClick(3)}
                    //here i want to put that component
                    />
                </ScrollView> */}

                
                <View>
                <ManagedByAutoFinder />
                </View>

                <Text style={styles.sellWorkText}>AutoFinder Offerings</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
                    <HorizontalScrollItem
                        imageSource={require('../assets/Registration.png')}
                        title="AutoFinder Car Inspections"
                        content="200+ point inspections for peace of mind"
                        onPress={() => handleHorizontalOfferingItemPress(1)}
                    />
                    <HorizontalScrollItem
                        imageSource={require('../assets/Registration.png')}
                        title="Auction Sheet Verifications"
                        content="AutoFinder guarantees confidence with verified Japanese car auction sheets"
                        onPress={() => handleHorizontalOfferingItemPress(2)}
                    />
                    <HorizontalScrollItem
                        imageSource={require('../assets/Registration.png')}
                        title="Maintain Your Car"
                        content="Track your car's service history with SMS reminders"
                        onPress={() => handleHorizontalOfferingItemPress(3)}
                    />
                    <HorizontalScrollItem
                        imageSource={require('../assets/Registration.png')}
                        title="Car Finance"
                        content="Explore and apply for car loans effortlessly"
                        onPress={() => handleHorizontalOfferingItemPress(4)}
                    />
                    <HorizontalScrollItem
                        imageSource={require('../assets/Registration.png')}
                        title="Car Insurance"
                        content="Secure your ride with easy car insurance comparison and application"
                        onPress={() => handleHorizontalOfferingItemPress(5)}
                    />
                </ScrollView>

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
        backgroundColor: 'darkred',
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
        backgroundColor: 'darkred',
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
        padding: 10,
        color: 'firebrick',
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
    summaryText: {
        textAlign: 'center',
        color: 'grey',
        fontSize: 14,
        alignContent: 'center',
        alignSelf: 'center',
        paddingHorizontal : 20
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

export default homeBuyCarForMe;
