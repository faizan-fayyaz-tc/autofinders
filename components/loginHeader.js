// LoginHeader.js
import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from "react-native";

import { useContext } from "react";
import { UserContext } from "../context/userContext";

const LoginHeader = ({ onLoginPress }) => {
  const { user } = useContext(UserContext);
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onLoginPress} style={styles.button}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: StatusBar.currentHeight,
    backgroundColor: "#fc6f03",
    flexDirection: "row",
    justifyContent: "center", // Center the button horizontally
    alignItems: "center",
  },
  button: {
    paddingHorizontal: 100, // Add padding to the button
    padding: 10,
    backgroundColor: "white", // White background color for the button
    borderRadius: 5, // Optional: Add border radius for rounded corners
    marginTop: 30,
  },
  loginText: {
    fontSize: 16,
    color: "blue",
  },
});

export default LoginHeader;
