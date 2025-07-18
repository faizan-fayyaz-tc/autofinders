import React, { useState, useEffect } from "react";
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Text,
  StatusBar,
  Platform,
  Alert,
} from "react-native";
import * as ImagePicker from "expo-image-picker";

const TransactionApproval = ({ navigation }) => {
  const [base64Image, setBase64Image] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const [pickerResult, setPickerResult] = useState(null);

  useEffect(() => {
    if (pickerResult && !pickerResult.cancelled) {
      console.log("Image URI:", pickerResult.uri);
    }
  }, [pickerResult]);

  const handleBack = () => {
    navigation.goBack();
  };

  const handleSelectImage = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    const pickerResult = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });

    console.log("Picker result:", pickerResult); // Log the picker result

    if (!pickerResult.cancelled && pickerResult.assets.length > 0) {
      const firstAsset = pickerResult.assets[0];
      setSelectedImage(firstAsset.uri);
      console.log("Image URI from picker result:", firstAsset.uri); // Log the selected image URI

      // Call convertImageToBase64 function to get the Base64 representation of the selected image
      const base64Image = await convertImageToBase64(firstAsset.uri);
      console.log("Base64 Image:", base64Image);
    }
  };

  const convertImageToBase64 = async (uri) => {
    const response = await fetch(uri);
    const blob = await response.blob();
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  };

  const handleContinue = () => {
    // Show confirmation popup
    Alert.alert(
      "Confirmation",
      "Your request will be approved by our officials. Are you sure you want to continue?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Continue",
          onPress: () => {
            // Handle navigation to the home screen
            navigation.navigate("Home"); // Replace "Home" with the name of your home screen component
          },
        },
      ]
    );
  };

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
          <Text style={styles.title}>Transaction Approval</Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={handleSelectImage}
        style={styles.selectImageButton}
      >
        <Image
          source={require("../assets/cameraIcon.png")}
          style={styles.imageIcon}
        />
        <Text style={styles.selectImageText}>
          {selectedImage ? "Change Image" : "Select Image from Gallery"}
        </Text>
      </TouchableOpacity>
      {selectedImage && (
        <View style={styles.imageContainer}>
          <Image source={{ uri: selectedImage }} style={styles.image} />
          <Text style={styles.uploadMessage}>Image successfully selected!</Text>
        </View>
      )}
      {base64Image && (
        <View style={styles.base64Container}>
          <Text style={styles.base64Text}>Base64 Image:</Text>
          <Text style={styles.base64Text}>{base64Image}</Text>
        </View>
      )}
      <TouchableOpacity onPress={handleContinue} style={styles.continueButton}>
        <Text style={styles.continueButtonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
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
    padding: 10,
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
    alignSelf: "center",
  },
  selectImageButton: {
    backgroundColor: "white",
    // padding: 10,
    marginRight: 50,
    marginLeft: 50,
    paddingVertical: 10,
    marginTop: 30,
    borderRadius: 5,
    alignItems: "center",
    borderColor: "#2884ec",
    borderWidth: 1,
    flexDirection: "row", // Add flexDirection to align image and text horizontally
  },
  imageIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
    marginLeft: 10,
  },
  selectImageText: {
    color: "#2884ec",
    fontSize: 16,
    fontWeight: "bold",
    alignSelf: "center",
  },
  imageContainer: {
    // flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: "contain",
    alignSelf: "center",
  },
  uploadMessage: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: "bold",
    color: "green",
  },
  base64Container: {
    margin: 20,
    padding: 10,
    backgroundColor: "#eee",
    borderRadius: 5,
  },
  base64Text: {
    fontSize: 14,
  },
  continueButton: {
    backgroundColor: "#2884ec",
    paddingVertical: 10,
    marginHorizontal: 50,
    marginTop: 20,
    borderRadius: 5,
    alignItems: "center",
  },
  continueButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default TransactionApproval;
