import React from "react";
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Text,
  ScrollView,
  StatusBar,
  Animated,
} from "react-native";

import { useNavigation } from "@react-navigation/native"; // Import navigation hook from react-navigation
import HorizontalScrollItem from "./horizontallScrollItems";
import ManagedByAutoFinder from "../components/managedByAutoFinder";
import FeaturedAd from "../components/featuredAd";
import AutoFinderServices from "../components/autoFinderServices";
import AdvertisementCard from "../components/advertisementCard";
import { useState } from "react";
import { useEffect, useRef } from "react";

import backArrow from "../assets/back-arrow.png";
import carInspection from "../assets/CarInspection.jpg";
import numberOne from "../assets/one.png";
import numberTwo from "../assets/two.png";
import numberThree from "../assets/three.png";
import numberFour from "../assets/four.png";

const HomeFreeAds = () => {
  const navigation = useNavigation();
  const [selectedPackage, setSelectedPackage] = useState(null);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

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
    navigation.navigate("freeAdsPostService");
  };
  const handleListItForYouPress = () => {
    // Handle Premium Ads press
    console.log("Premium Ads pressed");
  };

  const handlePremiumAdsPress = () => {
    // Handle Free Ads press
    console.log("Free Ads pressed");
  };

  // const handleCarInspectionPress = () => {
  //   // Handle Managed Ads press
  //   console.log("Managed Ads pressed");
  // };

  const handleBoostAdsPress = () => {
    // Handle Car Inspection press
    console.log("Car Inspection pressed");
  };
  const handlerPostAdRightAway = () => {
    navigation.navigate("sellNowChoosePlan");
  };

  const inspectionAd = () => {
    navigation.navigate("basicInfoCarInspection");
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBack} style={styles.backButton}>
          <Image source={backArrow} style={styles.backIcon} />
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Free Ads Service</Text>
        </View>
      </View>
      <ScrollView>
        <Image source={carInspection} style={styles.image} />
        <Text style={styles.addText}>AutoFinder Free Ads Service</Text>
        <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
          <TouchableOpacity style={styles.button} onPress={handlePostAd}>
            <Text style={styles.buttonText}>Post Ad</Text>
          </TouchableOpacity>
        </Animated.View>

        <Text style={styles.sellWorkText}>
          How AutoFinder Free Ad Service Works?
        </Text>
        <WorksellForItForMe
          imageSource={numberOne}
          text="Sign Up for free ad services."
        />
        <WorksellForItForMe
          imageSource={numberTwo}
          text="Providing details about vehicle you want to sell."
        />
        <WorksellForItForMe
          imageSource={numberThree}
          text="Your free ad will be displayed in the free ad area."
        />
        <WorksellForItForMe
          imageSource={numberFour}
          text="Interested buyers can contact the seller as well."
        />

        <Text style={styles.sellWorkText}>Note</Text>
        <Text style={styles.NoteText}>
          It's important to note that while the regular ad listing on Autofinder
          is typically free, we offer additional paid services such as "List if
          for you, Premium Ads Service, Car Inspection Service, Boost your Ads
          Service", to enhace the visibilty and promotion of your ad.
        </Text>

        <Text style={styles.sellWorkText}>AutoFinder Services</Text>
        <AutoFinderServices
          onPremiumAdsPress={handleListItForYouPress}
          onFreeAdsPress={handlePremiumAdsPress}
          onManagedAdsPress={handleBoostAdsPress}
          // onCarInspectionPress={handleCarInspectionPress}
        />

        {/* <Text style={styles.sellWorkText}>Managed By AutoFinder</Text> */}
        <View>
          <ManagedByAutoFinder />
        </View>

        <AdvertisementCard
          title="Car Inspection"
          description="Get Your Car Inspected By Our Experts."
          imageSource={require("../assets/inspectionCar.png")}
          buttonText="Get My Car Inspected"
          onPress={inspectionAd}
        />

        {/* <Text style={styles.sellWorkText}>Feature ad</Text> */}
        <View>
          <FeaturedAd />
        </View>

        <Text style={styles.sellWorkText}>Looking to Sell Your Car?</Text>

        <View style={styles.roundedViewsContainer}>
          <View style={styles.roundedView}>
            <Text style={styles.roundedViewText}>Sell today!</Text>
            <Text style={styles.subtext}>
              Place your ad to uncover the best offer from our potential buyers
            </Text>
            <TouchableOpacity onPress={handlerPostAdRightAway}>
              <Text style={styles.textButton}>Post an Ad right away</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    backgroundColor: "#fc6f03",
    flexDirection: "row",
    alignItems: "center",
    paddingTop: StatusBar.currentHeight,
    // alignContent: "center",
    // alignItems: "center",
  },
  backButton: {
    // paddingRight: 20,
    tintColor: "white",
    marginLeft: 5,
  },
  backIcon: {
    width: 25,
    height: 25,
    tintColor: "white",
  },
  titleContainer: {
    flex: 1,
  },
  title: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    alignSelf: "center",
  },
  image: {
    width: "100%",
    height: 220,
    resizeMode: "cover",
  },
  addText: {
    textAlign: "center",
    padding: 10,
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
  button: {
    backgroundColor: "#fc6f03",
    padding: 15,
    margin: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
  },
  addTextChoose: {
    marginLeft: 10,
    padding: 10,
    color: "firebrick",
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
  featureLine: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    marginLeft: 20,
  },
  featureImage: {
    width: 20,
    height: 20,
    marginRight: 10,
    tintColor: "#fc6f03",
  },
  featureText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "black",
  },
  sellWorkText: {
    marginLeft: 10,
    padding: 5,
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
  worksellForItForMeLine: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    marginLeft: 20,
  },
  NoteText: {
    textAlign: "center",
    color: "grey",
    fontSize: 12,
    paddingHorizontal: 10,
    marginTop: "auto",
    marginBottom: "auto",
  },
  reportImage: {
    height: 250,
    width: 250,
    alignSelf: "center",
  },
  worksellForItForMeImage: {
    width: 20,
    height: 20,
    marginRight: 5,
    // tintColor: "#fc6f03",
  },
  worksellForItForMeText: {
    fontSize: 14,
    color: "grey",
  },
  horizontalScroll: {
    marginTop: 10,
    marginRight: 5,
    marginLeft: 5,
  },
  roundedViewsContainer: {
    flexDirection: "column",
    marginTop: 5,
    alignItems: "center",
  },
  roundedView: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    width: 320,
    height: 120,
    margin: 20,
  },
  roundedViewText: {
    fontSize: 14,
    color: "#fc6f03",
    fontWeight: "bold",
    marginTop: 1,
  },
  subtext: {
    fontSize: 14,
    color: "grey",
    marginTop: 10,
  },
  textButton: {
    marginTop: 20,
    color: "royalblue",
  },
});

export default HomeFreeAds;
