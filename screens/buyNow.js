import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  ScrollView,
} from "react-native";
import Header from "../components/header"; // Corrected import with PascalCase
import { useNavigation } from "@react-navigation/core";
import { AntDesign } from "@expo/vector-icons"; // Importing AntDesign icons
import SearchBar from "../components/searchBar";
import BuyNowCard from "../components/buyNowCards";
import FeatureAdsCard from "../components/featureAdsCard";

const BuyNow = () => {
  const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleFilterPress = () => {
    // Implement your filter logic here
  };

  return (
    <View style={styles.container}>
      <Header title="Buy Now" onPressBack={handleBackPress} />

      <View style={styles.rowContainer}>
        {/* Search bar */}
        <View style={styles.searchBar}>
          {/* Your search bar component goes here */}
          <SearchBar />
        </View>

        <TouchableOpacity
          style={styles.filterButton}
          onPress={handleFilterPress}
        >
          <Text style={styles.filterText}>Filter</Text>
          <AntDesign name="filter" size={24} color="#fc6f03" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollView}>
        <BuyNowCard
          carImage={require("../assets/car2.jpg")}
          name="Toyota Camry"
          variant="2022 XLE"
          price="$25,000"
          year="2019"
          fuelType="petrol"
          kmReading="2,11,000"
          location="Islamabad"
          isInspected={false}
          isFeatured={true}
          isManagedByAutoFinder={false}
        />

        <FeatureAdsCard
          title="Car Inspection"
          subtitle="Get your car inspected by the our expert over 200 checkpoints"
          buttonText="Get my car inspected"
          imageSource={require("../assets/inspected.png")}
          onPressButton={() => {
            handleBackPress;
          }}
        />

        <BuyNowCard
          carImage={require("../assets/car2.jpg")}
          name="Toyota Camry"
          variant="2022 XLE"
          price="$25,000"
          year="2019"
          fuelType="petrol"
          kmReading="2,11,000"
          location="Islamabad"
          isInspected={true}
          isFeatured={true}
          isManagedByAutoFinder={true}
        />

        <BuyNowCard
          carImage={require("../assets/car2.jpg")}
          name="Toyota Camry"
          variant="2022 XLE"
          price="$25,000"
          year="2019"
          fuelType="petrol"
          kmReading="2,11,000"
          location="Islamabad"
          isInspected={false}
          isFeatured={true}
          isManagedByAutoFinder={true}
        />

        <BuyNowCard
          carImage={require("../assets/car2.jpg")}
          name="Toyota Camry"
          variant="2022 XLE"
          price="$25,000"
          year="2019"
          fuelType="petrol"
          kmReading="2,11,000"
          location="Islamabad"
          isInspected={true}
          isFeatured={true}
          isManagedByAutoFinder={false}
        />

        <BuyNowCard
          carImage={require("../assets/car2.jpg")}
          name="Toyota Camry"
          variant="2022 XLE"
          price="$25,000"
          year="2019"
          fuelType="petrol"
          kmReading="2,11,000"
          location="Islamabad"
          isInspected={false}
          isFeatured={false}
          isManagedByAutoFinder={false}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignItems: "center",
  },
  searchBar: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    borderRadius: 5,
    marginRight: 10,
    paddingHorizontal: 10,
  },
  filterButton: {
    flexDirection: "row",
    backgroundColor: "#2e8b57",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: "center",
  },
  filterText: {
    color: "#fff",
    marginRight: 5,
  },
});

export default BuyNow;
