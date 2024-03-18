import React, { useState, useEffect } from "react";
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Text,
  TextInput,
  ScrollView,
  StatusBar,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import PaymentDetailModal from "../components/paymentDetailModel";
// import MarqueeText from 'react-native-marquee';

const CheckoutCarInspection = ({ navigation }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");

  const handleBack = () => {
    navigation.goBack();
  };

  // const handlePaymentOptionPress = (paymentMethod) => {
  //     setSelectedPaymentMethod(paymentMethod);
  //     setShowModal(true);
  // };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  const handleContinue = () => {
    // Implement logic for handling the 'Continue' button press
  };

  const handlecontinue = () => {
    // Implement logic for handling the 'Next' button
  };
  const handlePaymentOptionPress = (paymentMethod) => {
    switch (paymentMethod) {
      case "Cheque":
        // Implement logic for handling cheque payment
        console.log("Cheque payment selected");
        setSelectedPaymentMethod(paymentMethod);
        setShowModal(true);
        break;
      case "Cash Deposit":
        // Implement logic for handling cash deposit payment
        console.log("Cash deposit payment selected");
        setSelectedPaymentMethod(paymentMethod);
        setShowModal(true);
        break;
      case "Online Deposit":
        // Implement logic for handling online deposit payment
        navigation.navigate("transactionApproval");
        break;
      case "EasyPaisa":
        // Implement logic for handling EasyPaisa payment
        console.log("EasyPaisa payment selected");
        break;
      case "JazzCash":
        // Implement logic for handling JazzCash payment
        console.log("JazzCash payment selected");
        break;
      default:
        console.log(`Unknown payment method selected: ${paymentMethod}`);
        break;
    }
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
          <Text style={styles.title}>Checkout</Text>
        </View>
      </View>
      <View style={styles.paymentBox}>
        <View style={styles.paymentContent}>
          <Image
            source={require("../assets/protected.png")}
            style={styles.secureIcon}
          />
          <Text style={styles.paymentText}>
            All payment methods are encrypted and secure
          </Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.paymentOption}
        onPress={() => handlePaymentOptionPress("Cheque")}
      >
        <View style={styles.paymentOptionContent}>
          <Image
            source={require("../assets/cheque.png")}
            style={styles.paymentOptionIcon}
          />
          <Text style={styles.paymentOptionText}>Cheque Deposit</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.paymentOption}
        onPress={() => handlePaymentOptionPress("Cash Deposit")}
      >
        <View style={styles.paymentOptionContent}>
          <Image
            source={require("../assets/money.png")}
            style={styles.paymentOptionIcon}
          />
          <Text style={styles.paymentOptionText}>Cash Deposit</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.paymentOption}
        onPress={() => handlePaymentOptionPress("Online Deposit")}
      >
        <View style={styles.paymentOptionContent}>
          <Image
            source={require("../assets/banktransfer.png")}
            style={styles.paymentOptionIcon}
          />
          <Text style={styles.paymentOptionText}>Online Bank Deposit</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.paymentOption}
        onPress={() => handlePaymentOptionPress("EasyPaisa")}
      >
        <View style={styles.paymentOptionContent}>
          <Image
            source={require("../assets/money.png")}
            style={styles.paymentOptionIcon}
          />
          <Text style={styles.paymentOptionText}>EasyPaisa</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.paymentOption}
        onPress={() => handlePaymentOptionPress("JazzCash")}
      >
        <View style={styles.paymentOptionContent}>
          <Image
            source={require("../assets/money.png")}
            style={styles.paymentOptionIcon}
          />
          <Text style={styles.paymentOptionText}>JazzCash</Text>
        </View>
      </TouchableOpacity>

      <PaymentDetailModal
        visible={showModal}
        paymentMethod={selectedPaymentMethod}
        onClose={handleCloseModal}
      />

      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total(incl.VAT): </Text>
        <Text style={styles.totalValue}>PKR 4,800</Text>
      </View>

      <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
        <Text style={styles.continueButtonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: "white",
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
    // paddingRight: 20,
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
    alignSelf: "center",
  },
  paymentContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  paymentBox: {
    backgroundColor: "#9aedd7",
    borderRadius: 10,
    padding: 15,
    margin: 20,
  },
  paymentText: {
    flex: 1, // Take remaining space
    fontSize: 12,
  },
  secureIcon: {
    marginRight: 5, // Add some spacing between image and text
    width: 20,
    height: 20,
  },
  paymentOption: {
    backgroundColor: "#ebedf2",
    // borderRadius: 10,
    padding: 15,
    margin: 10,
  },
  paymentOptionText: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    color: "black",
  },
  paymentOptionContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  paymentOptionIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  totalContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  totalText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#2884ec",
  },
  totalValue: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fc6f03",
  },
  continueButton: {
    backgroundColor: "#fc6f03",
    borderRadius: 10,
    paddingVertical: 15,
    marginHorizontal: 20,
    marginBottom: 20,
  },
  continueButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default CheckoutCarInspection;
