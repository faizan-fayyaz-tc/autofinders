import React, { useEffect, useState } from "react";
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
import axios from "axios"
const BuyNow = () => {
  const navigation = useNavigation();
  const [filterOptions , setFilterOptions] = useState({})
  const [isLoading , setIsloading] = useState(true)
  const  [data , setData ]=useState([])
  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleFilterPress = () => {
    // Implement your filter logic here
  };

  useEffect(() => {
    async function getData(){
      try {
        const response = await axios.post("http://192.168.18.16:8000/api/carAd/",{})
        setData(response.data.data)
        // console.log(response.data)
        setIsloading(false)
      } catch (error) {
        console.log(error.response.data)
        setIsloading(false)
      }
    }
    getData()
  }, []);


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
        {isLoading && <Text>Loading ...</Text>}

        {!isLoading && data.length===0 && <Text>No Cars To show</Text>}

        {!isLoading && data.length>0 && data.map((item)=>(
            <BuyNowCard
            key={item._id}
            carImage={item.images[0]}
            name={item.brand}
            variant={item.varient}
            price="$25,000"
            year="2019"
            fuelType="petrol"
            kmReading="2,11,000"
            location="Islamabad"
            isInspected={item.inspected}
            isFeatured={item.featured}
            isManagedByAutoFinder={item.ManagedByAutoFinder}
          />
        ))}

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
