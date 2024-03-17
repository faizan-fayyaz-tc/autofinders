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
  StatusBar,
} from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import LocationPicker from "../components/locationPicker";
import CarModelPicker from "../components/carModelPicker";
import RegisteredPicker from "../components/registeredPicker";
import BodyColorPicker from "../components/bodyColor";
import DescribeYourCar from "../components/describeYourCar";
import FuelTypePicker from "../components/fuelTypePicker";
import PremiumAdCharges from "../components/premiumAdCharges";
import ImagePickerComponent from "../components/imagePicker";
import axios from "axios";
import { useContext } from "react";
import { UserContext } from "../context/userContext";
const freeAdsPostService = () => {
  const { user } = useContext(UserContext);
  // let A = '';
  const navigation = useNavigation();
  const [locationModalVisible, setLocationModalVisible] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [carModelModalVisible, setCarModelModalVisible] = useState(false);
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedVariant, setSelectedVariant] = useState("");

  const [registeredModalVisible, setRegisteredModalVisible] = useState(false);
  const [selectedRegisteredLocation, setSelectedRegisteredLocation] =
    useState("");
  const [bodyColorModalVisible, setBodyColorModalVisible] = useState(false);
  const [selectedBodyColor, setSelectedBodyColor] = useState("");
  const [selectedKmDriven, setSelectedKmDriven] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");
  const [selectedDescription, setSelectedDescription] = useState("");

  const [describeYourCarModalVisible, setDescribeYourCarModalVisible] =
    useState(false);
  const [selectedSuggestions, setSelectedSuggestions] = useState([]);
  const [fuelTypeModalVisible, setFuelTypeModalVisible] = useState(false);
  const [selectedFuelType, setSelectedFuelType] = useState("");
  const [selectedTransmission, setSelectedTransmission] = useState("");
  const [selectedAssembly, setSelectedAssembly] = useState("");
  const [isFeaturePickerVisible, setIsFeaturePickerVisible] = useState(false);
  const [selectedFeatures, setSelectedFeatures] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedEngineCapcity, setEngineCapacity] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedModel, setSelectedModel] = useState("");

  const [isVisible, setIsVisible] = useState(false);

  const handleBack = () => {
    navigation.goBack();
  };

  // const handleSelectImage = () => {
  //   // Handle the image selection (to be implemented later)
  //   console.log('Image selected');
  // };

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

  const handleVariantSelect = (variant) => {
    setSelectedVariant(variant);
    handleCloseCarModelPicker();
  };
  const handleModelSelect = (model) => {
    setSelectedModel(model);
    handleCloseCarModelPicker();
  };

  const handleOpenRegisteredPicker = () => {
    setRegisteredModalVisible(true);
  };

  const handleCloseRegisteredPicker = () => {
    setRegisteredModalVisible(false);
  };

  const handleRegisteredSelect = (location) => {
    setSelectedRegisteredLocation(location);
    handleCloseRegisteredPicker();
  };

  const handleOpenBodyColorPicker = () => {
    setBodyColorModalVisible(true);
  };

  const handleCloseBodyColorPicker = () => {
    setBodyColorModalVisible(false);
  };

  const handleBodyColorSelect = (color) => {
    setSelectedBodyColor(color);
    handleCloseBodyColorPicker();
  };

  const handleViewSuggestions = () => {
    setDescribeYourCarModalVisible(true);
  };
  const [selectedFeaturess, setSelectedFeaturess] = useState([]);
  const handleDescribeYourCarDone = (selectedOptions) => {
    setSelectedDescription(selectedOptions.join(", "));
    setSelectedFeaturess(selectedOptions);
    setDescribeYourCarModalVisible(false);
  };

  const handleOpenFuelTypePicker = () => {
    setFuelTypeModalVisible(true);
  };

  const handleCloseFuelTypePicker = () => {
    setFuelTypeModalVisible(false);
  };

  const handleFuelTypeSelect = (fuelType) => {
    setSelectedFuelType(fuelType);
    handleCloseFuelTypePicker();
  };

  const handleAssemblySelect = (assemblyType) => {
    setSelectedAssembly(assemblyType);
  };

  const handleFeaturePickerDone = (selectedFeatures) => {
    setSelectedFeatures(selectedFeatures);
    setIsFeaturePickerVisible(false);
  };

  const handleCloseModall = () => {
    setIsVisible(false);
  };

  const [isError, setIsError] = useState(false);
  const [error, setError] = useState("");
  const [imagesBase64, setImagesBase64] = useState([]);
  const handlePostYourAd = async () => {
    // Handle the logic for posting the ad
    console.log("Ad posted!");
    console.log(selectedFeaturess.length);
    const adData = {
      images: imagesBase64,
      location: selectedLocation,
      year: selectedYear,
      brand: selectedBrand,
      varient: selectedVariant,
      registeredIn: selectedRegisteredLocation,
      bodyColor: selectedBodyColor,
      kmDriven: selectedKmDriven,
      price: selectedPrice,
      description: selectedDescription,
      fuelType: selectedFuelType,
      transmission: selectedTransmission,
      assembly: selectedAssembly,
      engineCapacity: selectedEngineCapcity,
      name: name,
      phoneNumber: phoneNumber,
      user: user._id,
    };
    // console.log(adData);
    try {
      const response = await axios.post(
        "http://192.168.10.9:8000/api/carAd/upload",
        adData
      );
      console.log(response.data);
      if (response.data.ok) {
        setIsVisible(true);
      }
    } catch (error) {
      console.log(error.response.data);
      setIsError(true);
      setError(error.response.data.error);
    }
  };

  // const handlePremiumAdService = () => {
  //   // Handle the logic for navigating to Premium Ad Service or any other action
  //   navigation.navigate('premiumAdCharges');
  //   console.log('Navigate to Premium Ad Service');

  // };
  const handlePremiumAdService = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const handleImagesSelection = (selectedImages) => {
    // Do something with the selected images
    console.log(selectedImages);
  };
  const [carDescription, setCarDescription] = useState("");
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
          <Text style={styles.title}>Post Free Ad</Text>
        </View>
      </View>
      {/* <View style={styles.MarqueeContainer}>
        <MarqueeText
          style={styles.marqueeText}
          speed={1}
          marqueeOnStart={true}
          loop={true}
          delay={1200}
        >
          The first two ads are free of charge, but starting from the third ad, there will be a fee of PKR 525.00 per ad in ''free Ads Service''.
        </MarqueeText>
      </View> */}
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {/* Button to select images */}

        <View style={styles.Imageborder}>
          <ImagePickerComponent
            onSelectedImagesBase64Change={setImagesBase64}
          />
        </View>

        <TouchableOpacity
          style={styles.selectLocationButton}
          onPress={handleOpenLocationPicker}
        >
          <Image
            source={require("../assets/locationIcon.png")}
            style={styles.locationIcon}
          />
          <Text style={styles.selectLocationText}>
            {selectedLocation || "Select Your Location"}
          </Text>
        </TouchableOpacity>
        <LocationPicker
          isVisible={locationModalVisible}
          onClose={handleCloseLocationPicker}
          onSelectLocation={handleLocationSelect}
        />

        <TouchableOpacity
          style={styles.selectCarModelButton}
          onPress={handleOpenCarModelPicker}
        >
          <Image
            source={require("../assets/carFrontIcon.png")}
            style={styles.carModelIcon}
          />
          <Text style={styles.selectCarModelText} placeholder="Car Model">
            {selectedYear ? `${selectedYear} ` : ""}
            {selectedBrand ? `${selectedBrand} ` : ""}
            {selectedModel ? `${selectedModel}` : ""}
            {selectedVariant ? `${selectedVariant}` : ""}
          </Text>
        </TouchableOpacity>

        <CarModelPicker
          isVisible={carModelModalVisible}
          onClose={handleCloseCarModelPicker}
          onSelectYear={handleYearSelect}
          onSelectBrand={handleBrandSelect}
          onSelectVariant={handleVariantSelect}
          onSelectModel={handleModelSelect}
        />

        <TouchableOpacity
          style={styles.selectRegisteredButton}
          onPress={handleOpenRegisteredPicker}
        >
          <Image
            source={require("../assets/registered.png")}
            style={styles.locationIcon}
          />
          <Text style={styles.selectLocationText}>
            {selectedRegisteredLocation || "Registration Site"}
          </Text>
        </TouchableOpacity>
        <RegisteredPicker
          isVisible={registeredModalVisible}
          onClose={handleCloseRegisteredPicker}
          onSelectCity={handleRegisteredSelect}
        />

        <TouchableOpacity
          style={styles.selectBodyColorButton}
          onPress={handleOpenBodyColorPicker}
        >
          <Image
            source={require("../assets/bodycolour.png")}
            style={styles.bodyColorIcon}
          />
          <Text style={styles.selectBodyColorText}>
            {selectedBodyColor || "Body Shade"}
          </Text>
        </TouchableOpacity>

        <BodyColorPicker
          isVisible={bodyColorModalVisible}
          onClose={handleCloseBodyColorPicker}
          onSelectColor={handleBodyColorSelect}
        />

        <View style={styles.selectKmDrivenButton}>
          <Image
            source={require("../assets/distanceKM.png")}
            style={styles.kmIcon}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Kilometers Travelled"
            value={selectedKmDriven}
            onChangeText={(text) => {
              const numericValue = text.replace(/[^0-9]/g, "");
              const formattedValue = parseInt(numericValue, 10).toLocaleString(
                "en-IN"
              );
              setSelectedKmDriven(formattedValue);
            }}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.selectPriceButton}>
          <Image
            source={require("../assets/priceTag.png")}
            style={styles.priceIcon}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Selling Price (PKR)"
            value={selectedPrice}
            onChangeText={(text) => {
              const numericValue = text.replace(/[^0-9]/g, "");
              const formattedValue = parseInt(numericValue, 10).toLocaleString(
                "en-IN"
              );
              setSelectedPrice(formattedValue);
            }}
            keyboardType="numeric"
          />
        </View>

        <View style={styles.selectPriceButton}>
          <Image
            source={require("../assets/powerIcon.png")}
            style={styles.priceIcon}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Engine Capacity"
            value={selectedEngineCapcity ? `${selectedEngineCapcity} CC` : ""}
            // value={selectedPrice ? `${selectedPrice} CC` : ''} // Include "CC" after the entered value if not empty
            onChangeText={(text) => {
              const numericValue = text.replace(/[^0-9]/g, "");
              const formattedValue = parseInt(numericValue, 10).toLocaleString(
                "en-IN"
              );
              setEngineCapacity(formattedValue);
            }}
            keyboardType="numeric"
          />
        </View>

        {/* <View style={styles.selectDescriptionButton}>
          <Image
            source={require("../assets/descriptionIcon.png")}
            style={styles.descriptionIcon}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Select Features"
            value={selectedDescription}
            onChangeText={(text) => setSelectedDescription(text)}
            readOnly
          />
        </View> */}

        <TouchableOpacity
          style={styles.selectFuelTypeButton}
          onPress={handleOpenFuelTypePicker}
        >
          <Image
            source={require("../assets/fuelIcon.png")}
            style={styles.fuelTypeIcon}
          />
          <Text style={styles.selectFuelTypeText}>
            {selectedFuelType || "Fuel Category"}
          </Text>
        </TouchableOpacity>

        <FuelTypePicker
          isVisible={fuelTypeModalVisible}
          onClose={handleCloseFuelTypePicker}
          onSelectFuelType={handleFuelTypeSelect}
        />

        <TouchableOpacity
          style={styles.viewSuggestionsButton}
          onPress={handleViewSuggestions}
        >
          <Text style={styles.viewSuggestionsText}>
            Tap for Feature Selection
          </Text>
        </TouchableOpacity>
        <View style={styles.featureContainer}>
          {selectedFeaturess.length > 0 &&
            selectedFeaturess.map((item) => (
              <Text style={styles.bulletPointText}>• {item}</Text>
            ))}
        </View>

        <DescribeYourCar
          isVisible={describeYourCarModalVisible}
          onClose={() => setDescribeYourCarModalVisible(false)}
          onDone={handleDescribeYourCarDone}
        />

        {/* ////////////////////////////////////// */}

        <View style={styles.selectPriceButton}>
          <Image
            source={require("../assets/descriptionIcon.png")}
            style={styles.descriptionIcon}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Description"
            multiline={true} // Allow multiline input
            numberOfLines={4}
            value={carDescription}
            onChange={(text) => setCarDescription(text)}
          />
        </View>

        <View style={styles.selectTransmissionContainer}>
          <Text style={styles.selectTransmissionText}>Gear Transmission</Text>
          <View style={styles.toggleButtonContainer}>
            <TouchableOpacity
              style={[
                styles.toggleButton,
                selectedTransmission === "Automatic" && styles.selectedButton,
              ]}
              onPress={() => setSelectedTransmission("Automatic")}
            >
              <Text
                style={[
                  styles.toggleButtonText,
                  selectedTransmission === "Automatic" &&
                    styles.selectedButtonText,
                ]}
              >
                Automatic
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.toggleButton,
                selectedTransmission === "Manual" && styles.selectedButton,
              ]}
              onPress={() => setSelectedTransmission("Manual")}
            >
              <Text
                style={[
                  styles.toggleButtonText,
                  selectedTransmission === "Manual" &&
                    styles.selectedButtonText,
                ]}
              >
                Manual
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.selectAssemblyContainer}>
          <Text style={styles.selectAssemblyText}>Assembly Integrated</Text>
          <View style={styles.toggleButtonContainer}>
            <TouchableOpacity
              style={[
                styles.toggleButton,
                selectedAssembly === "Imported" && styles.selectedButton,
              ]}
              onPress={() => handleAssemblySelect("Imported")}
            >
              <Text
                style={[
                  styles.toggleButtonText,
                  selectedAssembly === "Imported" && styles.selectedButtonText,
                ]}
              >
                Imported
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.toggleButton,
                selectedAssembly === "Local" && styles.selectedButton,
              ]}
              onPress={() => handleAssemblySelect("Local")}
            >
              <Text
                style={[
                  styles.toggleButtonText,
                  selectedAssembly === "Local" && styles.selectedButtonText,
                ]}
              >
                Local
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* <View style={styles.selectPriceButton}>
          <Image source={require('../assets/powerIcon.png')} style={styles.priceIcon} />
          <TextInput
            style={styles.textInput}
            placeholder="Engine Capacity"
            value={selectedEngineCapcity ? `${selectedEngineCapcity} CC` : ''} // Include "CC" after the entered value if not empty
            onChangeText={(text) => {
              const numericValue = text.replace(/[^0-9]/g, '');
              const formattedValue = parseInt(numericValue, 10).toLocaleString('en-IN');
              setEngineCapacity(formattedValue);
            }}
            keyboardType="numeric"
          />
        </View> */}

        {/* "Contact Info" section */}
        <View style={styles.contactInfoContainer}>
          <Text style={styles.contactInfoText}>Contact Info</Text>
          {/* Add two text fields below "Contact Info" */}
          <TextInput
            style={styles.contactInput}
            placeholder="Enter your name"
            onChangeText={(text) => setName(text)}
            placeholderTextColor="black"
            value={user.name}
            readOnly
          />
          <TextInput
            style={styles.contactInput}
            placeholder="Enter your phone number"
            keyboardType="numeric"
            onChangeText={(text) => setPhoneNumber(text)}
            placeholderTextColor="black"
            value={user.phoneNumber}
            readOnly
          />
        </View>

        <TouchableOpacity style={styles.Postbutton} onPress={handlePostYourAd}>
          <Text style={styles.PostbuttonText}>Post Ad</Text>
        </TouchableOpacity>
        <Text>Add Dealer Packages</Text>

        {/* <View style={styles.noteContainer}>
          <Text style={styles.noteHeading}>Note</Text>
          <Text style={styles.noteText}>
            If you will buy 3rd standard free ad, and then willing to buy
            Premium ad service, your paid 525/- amount will be adjusted in
            Premium ad service.
          </Text>
        </View> */}

        <TouchableOpacity
          style={styles.PremiumAdButton}
          onPress={handlePremiumAdService}
        >
          <Text style={styles.PremiumAdButtonText}>
            {" "}
            Choose premium ad service
          </Text>
        </TouchableOpacity>

        <PremiumAdCharges isVisible={modalVisible} onClose={handleCloseModal} />

        {/* aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa */}

        <View style={styless.container}>
          <Modal
            visible={isVisible}
            animationType="slide"
            transparent={true}
            onRequestClose={handleCloseModall}
          >
            <View style={styless.modalContainer}>
              <View style={styless.modalContent}>
                <Text>Ad Posted Successfully!!</Text>
                <TouchableOpacity onPress={handleCloseModall}>
                  <Text>Close Modal</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>

        {/* aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa */}

        <View style={styless.container}>
          <Modal
            visible={isError}
            animationType="slide"
            transparent={true}
            onRequestClose={() => setIsError(false)}
          >
            <View style={styless.modalContainer}>
              <View style={styless.modalContent}>
                <Text>{error}</Text>
                <TouchableOpacity onPress={() => setIsError(false)}>
                  <Text>Close Modal</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>
      </ScrollView>
    </View>
  );
};

const styless = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    backgroundColor: "white",
  },
  Imageborder: {
    // borderWidth: 1,
    // borderColor: 'black',
    borderRadius: 10,
    padding: 20,
  },
  header: {
    backgroundColor: "#fc6f03",
    flexDirection: "row",
    alignItems: "center",
    paddingTop: StatusBar.currentHeight,
  },
  backButton: {
    // paddingRight: 20,
    tintColor: "white",
  },
  backIcon: {
    width: 25,
    height: 25,
    tintColor: "white",
    marginLeft: 5,
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
  scrollViewContent: {
    flexGrow: 1,
    alignItems: "center",
  },

  MarqueeContainer: {
    // marginBottom: 20, // Increased margin for better spacing
    marginTop: 20,
  },
  marqueeText: {
    fontSize: 16,
    color: "#2884ec",
    fontWeight: "500",
  },

  selectImageButton: {
    alignItems: "center",
    height: 250,
    width: 320,
    borderColor: "#Ac3803",
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 20,
  },
  imageIcon: {
    width: 50,
    height: 50,
    marginTop: 30,
    tintColor: "#Ac3803",
  },
  selectImageText: {
    fontSize: 14,
    color: "grey",
  },
  selectLocationButton: {
    flexDirection: "row",
    height: 50,
    width: 300,
    borderColor: "#fc6f03",
    borderBottomWidth: 1,
    // borderRadius: 5,
    marginTop: 40,
  },
  locationIcon: {
    width: 20,
    height: 20,
    marginLeft: 10,
    marginTop: 15,
    tintColor: "lightgrey",
  },
  selectLocationText: {
    fontSize: 14,
    color: "grey",
    marginLeft: 15,
    marginTop: 13,
  },
  selectCarModelButton: {
    flexDirection: "row",
    height: 50,
    width: 300,
    // borderColor: "grey",
    // borderWidth: 1,
    // // borderRadius: 5,
    borderColor: "#fc6f03",
    borderBottomWidth: 1,
    marginTop: 10,
    alignItems: "center",
  },
  carModelIcon: {
    width: 20,
    height: 20,
    marginLeft: 10,
    tintColor: "lightgrey",
  },
  selectCarModelText: {
    fontSize: 13,
    color: "grey",
    marginLeft: 15,
    // Other text styles
  },
  selectRegisteredButton: {
    flexDirection: "row",
    height: 50,
    width: 300,
    // borderColor: "grey",
    // borderWidth: 1,
    borderColor: "#fc6f03",
    borderBottomWidth: 1,
    // borderRadius: 5,
    marginTop: 10,
    // justifyContent: 'center',
  },
  selectBodyColorButton: {
    flexDirection: "row",
    height: 50,
    width: 300,
    // borderColor: "grey",
    // borderWidth: 1,
    borderColor: "#fc6f03",
    borderBottomWidth: 1,
    // borderRadius: 5,
    marginTop: 10,
    alignItems: "center",
  },
  bodyColorIcon: {
    width: 20,
    height: 20,
    marginLeft: 10,
    tintColor: "lightgrey",
  },
  selectBodyColorText: {
    fontSize: 14,
    color: "grey",
    marginLeft: 15,
  },
  selectKmDrivenButton: {
    flexDirection: "row",
    height: 50,
    width: 300,
    // borderColor: "grey",
    // borderWidth: 1,
    borderColor: "#fc6f03",
    borderBottomWidth: 1,
    // borderRadius: 5,
    marginTop: 10,
    alignItems: "center",
  },
  kmIcon: {
    width: 30,
    height: 30,
    marginLeft: 5,
    justifyContent: "center",
    tintColor: "lightgrey",
  },
  textInput: {
    flex: 1,
    height: "100%",
    // borderColor: "white",
    // borderWidth: 1, // Remove the border to make it look like other fields
    // borderRadius: 5,
    // borderColor: "black",
    // borderBottomWidth: 1,
    paddingLeft: 10,
    fontSize: 14,
  },
  selectPriceButton: {
    flexDirection: "row",
    height: 50,
    width: 300,
    // borderColor: "grey",
    // borderWidth: 1,
    borderColor: "#fc6f03",
    borderBottomWidth: 1,
    // borderRadius: 5,
    marginTop: 10,
    alignItems: "center",
  },
  priceIcon: {
    width: 25,
    height: 25,
    marginLeft: 5,
    justifyContent: "center",
    tintColor: "lightgrey",
  },

  selectDescriptionButton: {
    flexDirection: "row",
    height: 50,
    width: 300,
    // borderColor: "grey",
    // borderWidth: 1,
    borderColor: "#fc6f03",
    borderBottomWidth: 1,
    // borderRadius: 5,
    marginTop: 10,
    alignItems: "center",
  },
  descriptionIcon: {
    width: 20,
    height: 20,
    marginLeft: 5,
    justifyContent: "center",
    tintColor: "lightgrey",
  },
  viewSuggestionsText: {
    color: "#2884ec",
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 30,
    padding: 10,
    textAlign: "center",
    borderColor: "#fc6f03",
    borderWidth: 1,
    borderRadius: 25,
  },
  selectFuelTypeButton: {
    flexDirection: "row",
    height: 50,
    width: 300,
    // borderColor: "grey",
    // borderWidth: 1,
    borderColor: "#fc6f03",
    borderBottomWidth: 1,
    // borderRadius: 5,
    marginTop: 15,
    alignItems: "center",
  },
  fuelTypeIcon: {
    width: 20,
    height: 20,
    marginLeft: 5,
    justifyContent: "center",
    tintColor: "lightgrey",
  },
  selectFuelTypeText: {
    fontSize: 14,
    color: "grey",
    marginLeft: 15,
    // marginTop: 13,
  },
  selectTransmissionContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  selectTransmissionText: {
    fontSize: 16,
    marginRight: 30,
    fontWeight: "bold",
    color: "black",
  },
  toggleButtonContainer: {
    flexDirection: "column",
  },
  toggleButton: {
    backgroundColor: "white",
    borderColor: "#fc6f03",
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginRight: 20,
  },
  toggleButtonText: {
    fontSize: 14,
    color: "#Ac3803",
    textAlign: "center",
    fontWeight: "bold",
  },
  selectedButton: {
    backgroundColor: "#Ac3803",
  },
  selectedButtonText: {
    color: "white",
  },
  selectAssemblyContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    marginLeft: 20,
  },
  selectAssemblyText: {
    fontSize: 16,
    marginRight: 30,
    fontWeight: "bold",
    color: "black",
  },
  toggleButtonContainer: {
    flexDirection: "column",
  },
  toggleButton: {
    backgroundColor: "white",
    borderColor: "#fc6f03",
    borderWidth: 1,
    borderRadius: 30,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginRight: 20,
    marginTop: 10,
  },
  toggleButtonText: {
    fontSize: 14,
    color: "#Ac3803",
    textAlign: "center",
  },
  selectedButton: {
    backgroundColor: "#fc6f03",
  },
  selectedButtonText: {
    color: "white",
  },

  selectFeatureButton: {
    flexDirection: "row",
    height: 50,
    width: 370,
    borderColor: "#Ac3803",
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 10,
    alignItems: "center",
  },
  featureIcon: {
    width: 20,
    height: 20,
    marginLeft: 10,
    tintColor: "#Ac3803",
  },
  selectFeatureText: {
    fontSize: 14,
    color: "grey",
    marginLeft: 15,
  },

  contactInfoContainer: {
    backgroundColor: "ghostwhite", // Set your desired background color
    padding: 10,
    borderRadius: 5,
    width: "100%", // Ensure it spans the full width
    marginBottom: 10, // Add margin at the bottom
    marginTop: 20,
  },
  contactInfoText: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 10,
    color: "black",
  },
  contactInput: {
    height: 40,
    borderBottomColor: "black", // Set the bottom border color
    borderBottomWidth: 1, // Set the bottom border width
    borderRadius: 5,
    marginTop: 5,
    paddingLeft: 15,
  },
  Postbutton: {
    backgroundColor: "#fc6f03",
    width: 300,
    padding: 15,
    margin: 5,
    borderRadius: 5,
    marginTop: 10,
  },
  PostbuttonText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
  },
  noteContainer: {
    backgroundColor: "white",
    padding: 10,
    marginTop: 10,
  },
  noteHeading: {
    color: "black",
    fontSize: 16,
    marginLeft: 10,
    fontWeight: "bold",
  },
  noteText: {
    color: "grey",
    fontSize: 12,
    marginLeft: 10,
  },
  PremiumAdButton: {
    backgroundColor: "#fc6f03",
    width: 300,
    padding: 15,
    margin: 5,
    borderRadius: 5,
    marginTop: 10,
  },
  PremiumAdButtonText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
  },
  featureContainer: {
    alignItems: "flex-start",
    // paddingLeft: 50,
    marginTop: 20,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#fc6f03",
    display: "flex",
    borderStyle: "dashed",
    flex: 1,
    gap: 10,
    width: 300,
  },
  bulletPointsContainer: {
    backgroundColor: "black",
    flexDirection: "row", // Display bullet points in a row
    alignItems: "flex-start", // Align bullet points at the top
    marginVertical: 30,
    paddingHorizontal: 20,
  },
  bulletPointText: {
    fontSize: 12,
    // marginBottom: 2,
    marginRight: 20, // Add margin to create space between bullet points
    marginLeft: 10,
    color: "black",
  },
});

export default freeAdsPostService;

//#2884ec
