/* eslint-disable prettier/prettier */
import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from 'react-native';

const GoogleSignin = ({
  userName = 'Muhammad Faizan Fayyaz',
  userEmail = 'ffayyaz8c@gmail.com',
}) => {
  const userProfilePic = require('../assets/profile.png'); // Replace with the user's profile picture

  const openPrivacyPolicy = () => {
    // Replace with your Privacy Policy URL
    Linking.openURL('https://your-privacy-policy-url.com');
  };

  const openTermsOfService = () => {
    // Replace with your Terms of Service URL
    Linking.openURL('https://your-terms-of-service-url.com');
  };
  const handleAddAccount = () => {
    // Handle adding another account
    // Add your logic here
  };
  return (
    <View style={styles.container}>
      <View style={styles.popup}>
        <Image
          source={require('../assets/logo.jpg')}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.headerText}>Choose an account</Text>
        <Text style={styles.subText}>to continue to AutoFinder</Text>
        <View style={styles.userInfoContainer}>
          <View style={styles.profileContainer}>
            <Image
              source={userProfilePic}
              style={styles.profilePic}
              resizeMode="cover"
            />
          </View>
          <View style={styles.userInfo}>
            <Text style={styles.userName}>{userName}</Text>
            <Text style={styles.userEmail}>{userEmail}</Text>
          </View>
        </View>
        <View style={styles.separator} />
        <View style={styles.additionalAccountContainer}>
          <Image
            source={require('../assets/adduser.png')} // Replace with your add icon
            style={styles.addAccountIcon}
            resizeMode="contain"
          />
          <TouchableOpacity onPress={handleAddAccount}>
            <Text style={styles.addAccountText}>Add another account</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.separator} />
        <View style={styles.additionalText}>
          <Text>
            To continue, Google will share your name, email address, and profile
            picture with AutoFinder. Before using this app, review{' '}
          </Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity onPress={openPrivacyPolicy}>
              <Text style={styles.linkText}> privacy policy</Text>
            </TouchableOpacity>
            <Text> and </Text>
            <TouchableOpacity onPress={openTermsOfService}>
              <Text style={styles.linkText}> terms of service</Text>
            </TouchableOpacity>
          </View>
          <Text>.</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // semi-transparent background
  },
  popup: {
    backgroundColor: 'white',
    width: 300, // Set a fixed width for the popup
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    // fontWeight: 'bold',
    color: 'black',
    marginBottom: 10,
  },
  subText: {
    fontSize: 16,
    color: 'black',
    marginBottom: 20,
  },
  userInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  profileContainer: {
    width: 30, // Fixed width for the profile container
    height: 30, // Fixed height for the profile container
    borderRadius: 25,
    overflow: 'hidden', // Ensure the image doesn't exceed the container
    marginRight: 10,
  },
  profilePic: {
    width: '100%',
    height: '100%',
  },
  userInfo: {
    flex: 1,
    marginLeft: 10,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'black',
  },
  userEmail: {
    fontSize: 14,
    color: 'grey',
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    width: '100%', // Adjust the width of the separator line
    marginTop: 20,
    marginBottom: 10,
  },
  additionalAccountContainer: {
    flexDirection: 'row',
    marginTop: 10, // Adjust the margin to your preference
    alignSelf: 'flex-start',
    alignItems: 'center',
  },
  addAccountText: {
    color: 'black',
    fontWeight: 'bold',
    marginLeft: 20,
    fontSize: 16,
  },
  addAccountIcon: {
    width: 30,
    height: 30,
  },
  additionalText: {
    marginTop: 10,
    fontSize: 16,
    color: 'gray',
  },
  linkText: {
    color: 'blue',
  },
});

export default GoogleSignin;
