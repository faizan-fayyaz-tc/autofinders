/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  FlatList,
  ScrollView,
} from "react-native";
import FeaturedAd from "../components/featuredAd";
import SegmentedSelectionNavigation from "../components/segmentedSelectionNavigation";
import AutoFindersOffering from "../components/autoFinderOffering";
import { useNavigation } from "@react-navigation/native";
import MainHeader from "../components/mainHeader";
import ManagedByAutoFinder from "../components/managedByAutoFinder";
import AdvertisementCard from "../components/advertisementCard";
import SyncStorage from "sync-storage";
import { useContext } from "react";
import { UserContext } from "../context/userContext";
const home = ({ navigation }) => {
  const { user } = useContext(UserContext);
  useEffect(() => {
    console.log(SyncStorage.get("token"));
    console.log(user);
  }, [user]);

  const handleLearnMore = () => {
    navigation.navigate("homeRentACar");
  };

  return (
    <View style={styles.container}>
      {/* mainHeader sections */}
      <MainHeader />

      <ScrollView style={styles.container}>
        {/* Featured Ads Section */}
        <FeaturedAd navigation={navigation} />

        {/* Carousal */}
        <SegmentedSelectionNavigation
          navigation={navigation}
          style={{ marginBottom: 30 }}
        />

        {/* Auto Finders Offering Section */}
        <AutoFindersOffering navigation={navigation} />

        {/* Additional Main Screen Content */}
        <ManagedByAutoFinder />

        <AdvertisementCard
          title="Auto rental service"
          description="Find the perfect car for your next adventure."
          imageSource={require("../assets/rent.png")}
          buttonText="Learn More"
          onPress={handleLearnMore}
        />
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
    backgroundColor: "darkred",
    paddingTop: 10,
    paddingHorizontal: 10,
    height: 117,
  },
  topView: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: 10,
  },
  button: {
    // padding: 2,
    borderRadius: 20,
    backgroundColor: "#b22222",
    width: 80,
  },
  activeButton: {
    backgroundColor: "white",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  activeButtonText: {
    color: "red",
  },
  bottomView: {
    marginTop: 10,
  },
  searchBar: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    paddingHorizontal: 10,
    backgroundColor: "white",
    borderRadius: 20,
  },
  optionItem: {
    padding: 15,
    backgroundColor: "white",
  },
  optionText: {
    color: "gray",
    fontWeight: "bold",
  },
  separator: {
    height: 1,
    backgroundColor: "#dcdcdc",
  },
});

export default home;
