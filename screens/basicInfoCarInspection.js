import React from "react";
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Text,
  ScrollView,
  TextInput,
  Modal,
  FlatList,
  StatusBar,
} from "react-native";
import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native"; // Import navigation hook from react-navigation
import CarModelPicker from "../components/carModelPicker";
import LocationPicker from "../components/locationPicker";

const basicInfoCarInspection = ({ navigation }) => {
  const numColumns = 3;
  const numColumn = 4;
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedCity, setSelectedCity] = useState(null);
  const [isCityModalVisible, setCityModalVisible] = useState(false);
  const [selectedYear, setSelectedYear] = useState(null);
  const [isYearModalVisible, setYearModalVisible] = useState(false);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [isBrandModalVisible, setBrandModalVisible] = useState(false);
  const [filteredBrands, setFilteredBrands] = useState(brands);
  const [carSummary, setCarSummary] = useState("");
  const [carModelModalVisible, setCarModelModalVisible] = useState(false);
  const [selectedVariant, setSelectedVariant] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [locationModalVisible, setLocationModalVisible] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [emptyFields, setEmptyFields] = useState([]);
    const [emptyNameError , setEmptyNameError] = useState(false)
    
  const handleBrandSearch = (text) => {
    const filtered = brands.filter((brand) =>
      brand.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredBrands(filtered);
  };

  /// for refreshing page
  useEffect(() => {
    // This block of code will run when the component mounts
    clearData();
  }, []); // Empty dependency array means it only runs once on mount

  const clearData = () => {
    setSelectedCity(null);
    setSelectedYear(null);
    setSelectedBrand(null);
    setFilteredBrands([]);
    setCarSummary("");
  };

  const handleBack = () => {
    // navigation.goBack(); // Go back when the back button is pressed
    clearData(); //refreshing page
    navigation.goBack();
  };
  const handleNext = () => {

    if(fullName.length<=3){
        setEmptyNameError(true);
    }
    
    const data = {
        fullName,
      phoneNumber,
        selectedLocation,
        selectedYear,
        selectedBrand,
        selectedModel,
        selectedVariant,
        carSummary,
      };
      console.log(data);
    navigation.navigate("bookExpertVisitCarInspection");
  };
  const handleCitySelection = (city) => {
    setSelectedCity(city);
    setCityModalVisible(false);
  };

  const openCityModal = () => {
    setCityModalVisible(true);
  };

  const closeCityModal = () => {
    setCityModalVisible(false);
  };
  //
  const handleYearSelection = (year) => {
    setSelectedYear(year);
    setYearModalVisible(false);
  };

  const openYearModal = () => {
    setYearModalVisible(true);
  };

  const closeYearModal = () => {
    setYearModalVisible(false);
  };

  const handleBrandSelection = (brand) => {
    setSelectedBrand(brand);
    setBrandModalVisible(false);
  };

  const openBrandModal = () => {
    setBrandModalVisible(true);
  };

  const closeBrandModal = () => {
    setBrandModalVisible(false);
  };

  const handleOpenCarModelPicker = () => {
    setCarModelModalVisible(true);
  };

  const handleCloseCarModelPicker = () => {
    setCarModelModalVisible(false);
  };

  const handleYearSelect = (year) => {
    setSelectedYear(year);
    handleCloseCarModelPicker();
    // Implement logic to open brand picker
  };

  const handleBrandSelect = (brand) => {
    setSelectedBrand(brand);
    handleCloseCarModelPicker();
    // Implement logic to open variant picker
  };

  const handleModelSelect = (model) => {
    setSelectedModel(model);
    handleCloseCarModelPicker();
  };

  const handleVariantSelect = (variant) => {
    setSelectedVariant(variant);
    handleCloseCarModelPicker();
  };

  const handleOpenLocationPicker = () => {
    setLocationModalVisible(true);
  };

  const handleCloseLocationPicker = () => {
    setLocationModalVisible(false);
  };

  const handleLocationSelect = (location) => {
    setSelectedLocation(location);
    // A = location;
    handleCloseLocationPicker();
    // console.log(A);
  };

  const cities = [
    "Faisalabad",
    "Gujranwala",
    "Hyderabad",
    "Islamabad",
    "Karachi",
    "Lahore",
    "Multan",
    "Peshawar",
    "Rawalpindi",
  ];
  const year = [
    "2024",
    "2023",
    "2022",
    "2021",
    "2020",
    "2019",
    "2018",
    "2017",
    "2016",
    "2015",
    "2014",
    "2013",
    "2012",
    "2011",
    "2010",
    "2009",
    "2008",
    "2007",
    "2006",
    "2005",
    "2004",
    "2003",
    "2002",
    "2001",
    "2000",
    "1999",
    "1998",
    "1997",
    "1996",
    "1995",
    "1994",
    "1993",
    "1992",
    "1991",
    "1990",
    "1989",
  ];
  const brands = [
    "Toyota",
    "Suzuki",
    "Honda",
    "KIA",
    "Nissan",
    "Hyndai",
    "Daihastsu",
    "Mitsubishi",
    "Changan",
    "Mercedes",
    "MG",
    "Audi",
    "Proton",
    "BMW",
    "DFSK",
    "Haval",
    "FAW",
    "Lexus",
    "Mazda",
    "Prince",
    "Chevrolet",
    "Cherry",
    "Jeep",
    "Range Rover",
    "Tesla",
  ];
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBack} style={styles.backButton}>
          <Image
            source={require("../assets/back-arrow.png")}
            style={styles.backIcon}
          />
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Basic info</Text>
        </View>
      </View>

      <ScrollView style={styles.scrollContainer}>
        <View style={styles.contentContainer}>
          <Text style={styles.getStartedText}>Let's get you started</Text>
          {/* Name Input Field */}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Your full name*</Text>
            <TextInput
              style={styles.textField}
              placeholder="Enter full name"
              placeholderTextColor="#999" // Lighter text color when the field is empty
              onChangeText={setFullName} // Update fullName state
            value={fullName} // Bind value to fullName state
            />
           {emptyNameError && <Text>Please enter your name.</Text>}
          </View>
          

          {/* Phone Number Input Field */}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Your phone number</Text>
            <TextInput
              style={styles.textField}
              placeholder="03xxxxxxxxx"
              placeholderTextColor="#999" // Lighter text color when the field is empty
              keyboardType="phone-pad" // Opens numeric keyboard on mobile devices
              onChangeText={setPhoneNumber} // Update phoneNumber state
              value={phoneNumber} // Bind value to phoneNumber state
            />
            {emptyFields.includes("phonenumber") && (
            <Text style={styles.errorText}>Please enter your phone number</Text>
          )}
          </View>
          

          {/* City Selection Input Field */}
          <TouchableOpacity
            style={styles.inputContainer}
            onPress={handleOpenLocationPicker}
          >
            <Text style={styles.label}>Where do you live</Text>
            <View style={styles.citySelectionField}>
              <Text style={styles.selectedCity}>
                {selectedLocation || "Select city"}
              </Text>
              <Image
                source={require("../assets/right-arrow.png")}
                style={styles.arrowIcon}
              />
            </View>
          </TouchableOpacity>

          <LocationPicker
            isVisible={locationModalVisible}
            onClose={handleCloseLocationPicker}
            onSelectLocation={handleLocationSelect}
          />

          {/* Tell us about your car model (year) */}
          {/* <TouchableOpacity
            style={styles.inputContainer}
            onPress={openYearModal}
          >
            <Text style={styles.label}>
              Tell us about your car model (year)
            </Text>
            <View style={styles.citySelectionField}>
              <Text style={styles.selectedCity}>
                {selectedYear || "Select year"}
              </Text>
              <Image
                source={require("../assets/right-arrow.png")}
                style={styles.arrowIcon}
              />
            </View>
          </TouchableOpacity> */}

          <TouchableOpacity
            style={styles.inputContainer}
            onPress={handleOpenCarModelPicker}
          >
            <Text style={styles.label}>Tell us about your car brand</Text>
            <View style={styles.citySelectionField}>
              <Text style={styles.selectedCity}>
                {/* {selectedBrand || "Select brand"} */}
                <Text style={styles.selectCarModelText}>
                  {selectedYear ? `${selectedYear} ` : ""}
                  {selectedBrand ? `${selectedBrand} ` : ""}
                  {selectedModel ? `${selectedModel} ` : ""}
                  {selectedVariant || "Car Model"}
                </Text>
              </Text>

              <Image
                source={require("../assets/right-arrow.png")}
                style={styles.arrowIcon}
              />
            </View>
          </TouchableOpacity>

          {/* //////////////////////// */}
          {/* 
          <TouchableOpacity
            style={styles.selectCarModelButton}
            onPress={handleOpenCarModelPicker}
          >
            <Image
              source={require("../assets/carFrontIcon.png")}
              style={styles.carModelIcon}
            />
            <Text style={styles.selectCarModelText}>
              {selectedYear ? `${selectedYear} ` : ""}
              {selectedBrand ? `${selectedBrand} ` : ""}
              {selectedModel ? `${selectedModel} ` : ""}
              {selectedVariant || "Car Model"}
            </Text>
          </TouchableOpacity> */}

          <CarModelPicker
            isVisible={carModelModalVisible}
            onClose={handleCloseCarModelPicker}
            onSelectYear={handleYearSelect}
            onSelectBrand={handleBrandSelect}
            onSelectVariant={handleVariantSelect}
            onSelectModel={handleModelSelect}
          />

          {/* //////////////////////// */}

          <View style={styles.inputContainer}>
            <Text style={styles.label}>
              Vehicle Description 
            </Text>
            <TextInput
              style={styles.summaryInput}
              placeholder="Write a summary about your car..."
              placeholderTextColor="grey"
              multiline
              numberOfLines={4}
              onChangeText={(text) => setCarSummary(text)}
            />
          </View>
          <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
            <Text style={styles.nextButtonText}>Next</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* City Selection Modal */}
      {/* <Modal
        animationType="slide"
        transparent={true}
        visible={isCityModalVisible}
        onRequestClose={closeCityModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <FlatList
              data={cities}
              keyExtractor={(item, index) => item + index}
              numColumns={numColumns}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.cityButton}
                  onPress={() => handleCitySelection(item)}
                >
                  <Text>{item}</Text>
                </TouchableOpacity>
              )}
            />
            <TouchableOpacity
              style={styles.closeButton}
              onPress={closeCityModal}
            >
              <Text>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal> */}
      {/* Tell us about your car  */}
      {/* Tell us about your car year */}
      {/* <Modal
        animationType="slide"
        transparent={true}
        visible={isYearModalVisible}
        onRequestClose={closeYearModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <FlatList
              data={year}
              keyExtractor={(item, index) => item + index}
              numColumns={numColumn}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.cityButton}
                  onPress={() => handleYearSelection(item)}
                >
                  <Text>{item}</Text>
                </TouchableOpacity>
              )}
            />
            <TouchableOpacity
              style={styles.closeButton}
              onPress={closeYearModal}
            >
              <Text>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal> */}

      {/* Tell us about your car brand Modal */}
      {/* <Modal
        animationType="slide"
        transparent={true}
        visible={isBrandModalVisible}
        onRequestClose={closeBrandModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}> */}
            {/* Search Bar */}
            {/* <TextInput
              style={styles.searchInput}
              placeholder="Search brand here!."
              onChangeText={handleBrandSearch}
            /> */}

            {/* Brand List */}
            {/* <FlatList
              data={filteredBrands}
              keyExtractor={(item, index) => item + index}
              numColumns={numColumn}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.cityButton}
                  onPress={() => handleBrandSelection(item)}
                >
                  <Text>{item}</Text>
                </TouchableOpacity>
              )}
            /> */}
            {/* <TouchableOpacity
              style={styles.closeButton}
              onPress={closeBrandModal}
            >
              <Text>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal> */}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  header: {
    backgroundColor: "#fc6f03",
    flexDirection: "row",
    alignItems: "center",
    paddingTop: StatusBar.currentHeight,
    elevation: 3,
    zIndex: 2,
  },
  backButton: {
    // paddingLeft: 10,
    tintColor: "white",
  },
  backIcon: {
    width: 20,
    height: 20,
    tintColor: "white",
  },
  titleContainer: {
    flex: 1,
  },
  title: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    alignSelf: 'center'
  },
  scrollContainer: {
    flex: 1,
  },
  contentContainer: {
    padding: 20,
  },
  getStartedText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#fc6f03",
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: "bold",
    color: "black",
    marginBottom: 8,
  },
  textField: {
    height: 50,
    borderColor: "#ddd", // Light gray border
    borderWidth: 1,
    padding: 15,
    borderRadius: 8,
    fontSize: 14,
    color: "#333", // Dark text color
  },
  citySelectionField: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 8,
    padding: 15,
  },
  selectedCity: {
    flex: 1,
    color: "#333",
  },
  arrowIcon: {
    width: 20,
    height: 20,
    tintColor: "#333",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: "center",
  },
  cityButton: {
    marginVertical: 10,
    // marginHorizontal: 10,
    marginLeft: 20,
    marginRight: 20,
    padding: 5,
    backgroundColor: "#e0e0e0",
    borderRadius: 5,
  },
  closeButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "green",
    borderRadius: 5,
    // color: 'blue'
  },
  searchInput: {
    height: 40,
    width: 200,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 8,
    fontSize: 14,
    color: "#333",
    textAlign: "center",
  },
  summaryInput: {
    height: 120,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 8,
    padding: 15,
    fontSize: 16,
    color: "#333",
    textAlignVertical: "top", // Allows vertical alignment of text to the top
  },
  nextButton: {
    backgroundColor: "#fc6f03",
    borderRadius: 8,
    padding: 15,
    alignItems: "center",
    marginTop: 20,
  },

  nextButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  errorText: {
    color: "red",
    fontSize: 14,
  },
});

export default basicInfoCarInspection;
