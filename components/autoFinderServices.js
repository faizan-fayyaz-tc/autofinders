import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const AutoFinderServices = ({
  onPremiumAdsPress,
  onFreeAdsPress,
  onManagedAdsPress,
  // onCarInspectionPress,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onPremiumAdsPress}>
        <Text style={styles.buttonText}>Car Listing Assist</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={onFreeAdsPress}>
        <Text style={styles.buttonText}>Car Buying Helper</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={onManagedAdsPress}>
        <Text style={styles.buttonText}>Vehicle Inspection Pro </Text>
      </TouchableOpacity>
      {/* <TouchableOpacity style={styles.button} onPress={onCarInspectionPress}>
        <Text style={styles.buttonText}>Auto Rental Solutions</Text>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 10,
  },
  button: {
    // backgroundColor: 'darkred',
    padding: 10,
    margin: 5,
    borderRadius: 5,
    width: 300,
    borderColor: "black",
    borderWidth: 1,
  },
  buttonText: {
    color: "#fc6f03",
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default AutoFinderServices;
