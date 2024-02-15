
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const AutoFinderServices = ({ onPremiumAdsPress, onFreeAdsPress, onManagedAdsPress, onCarInspectionPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onPremiumAdsPress}>
        <Text style={styles.buttonText}>List it for you</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={onFreeAdsPress}>
        <Text style={styles.buttonText}>Premium Ads</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={onManagedAdsPress}>
        <Text style={styles.buttonText}>Boost your Ads</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={onCarInspectionPress}>
        <Text style={styles.buttonText}>Car Inspection</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 10,
  },
  button: {
    // backgroundColor: 'darkred',
    padding: 10,
    margin: 5,
    borderRadius: 5,
    width: 300,
    borderColor : 'darkred',
    borderWidth: 1
  },
  buttonText: {
    color: 'firebrick',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default AutoFinderServices;
