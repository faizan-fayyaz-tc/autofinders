import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './screens/AppNavigator';
//import MoreScreen from './screens/moreStack';

const App = () => {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
};

export default App;

/* eslint-disable prettier/prettier */
// import React from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   TextInput,
//   ScrollView,
//   TouchableOpacity,
//   Image,
//   Linking,
// } from 'react-native';

// const welcome = () => {
//   const handleTermsPress = () => {
//     Linking.openURL('https://example.com/terms');
//   };
//   const handlePrivacyPress = () => {
//     Linking.openURL('https://example.com/privacy');
//   };
//   const handleGoogleSignIn = () => {
//     // Handle Google Sign-In logic here
//     // For example: Google sign-in API integration
//   };

//   const handleFacebookSignIn = () => {
//     // Handle Facebook Sign-In logic here
//     // For example: Facebook sign-in API integration
//   };

//   const handleEmailSignIn = () => {
//     // Handle Email Sign-In logic here
//     // For example: Custom email sign-in implementation
//   };
//   return (
//     <ScrollView contentContainerStyle={styles.scrollContainer}>
//       <View style={styles.container}>
//         <Text style={styles.headerText}>Sign In To Continue</Text>
//         <Text style={styles.getStartedText}>Let's Get Started!.</Text>
//         <View style={styles.inputContainer}>
//           <Text style={styles.prefixText}>+92 |</Text>
//           <TextInput
//             style={styles.phoneNumberInput}
//             placeholder="Phone Number"
//             keyboardType="phone-pad"
//             placeholderTextColor="#A0A0A0"
//             underlineColorAndroid="transparent"
//           />
//         </View>
//         <Text style={styles.continueWithText}>Continue with Mobile Number</Text>
//         <View style={styles.buttonsContainer}>
//           <TouchableOpacity
//             style={[styles.button, styles.buttonGoogle]}
//             onPress={handleGoogleSignIn}>
//             <Image
//               source={require('./assets/Googlelogo.jpeg')}
//               style={styles.buttonIcon}
//             />
//             <Text style={styles.buttonText}>Continue with Google</Text>
//           </TouchableOpacity>

//           {/* Continue with Facebook */}
//           <TouchableOpacity
//             style={[styles.button, styles.buttonFacebook]}
//             onPress={handleFacebookSignIn}>
//             <Image
//               source={require('./assets/Googlelogo.jpeg')}
//               style={styles.buttonIcon}
//             />
//             <Text style={styles.buttonText}>Continue with Facebook</Text>
//           </TouchableOpacity>

//           {/* Continue with Email */}
//           <TouchableOpacity
//             style={[styles.button, styles.buttonEmail]}
//             onPress={handleEmailSignIn}>
//             <Image
//               source={require('./assets/Googlelogo.jpeg')}
//               style={styles.buttonIcon}
//             />
//             <Text style={styles.buttonText}>Continue with Email</Text>
//           </TouchableOpacity>
//         </View>
//         <View style={styles.agreementContainer}>
//           <Text style={styles.agreementText}>
//             By continuing you agree to our{'\n'}
//             <TouchableOpacity onPress={handleTermsPress}>
//               <Text style={styles.inlineUnderlineGray}>Terms of Use</Text>
//             </TouchableOpacity>
//             <Text style={styles.inlineText}> and </Text>
//             <TouchableOpacity onPress={handlePrivacyPress}>
//               <Text style={styles.inlineUnderlineBlack}>Privacy Policy</Text>
//             </TouchableOpacity>
//           </Text>
//         </View>
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   scrollContainer: {
//     flexGrow: 1,
//   },
//   container: {
//     flex: 1,
//   },
//   headerText: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginTop: 50,
//     textAlignVertical: 'center',
//     textAlign: 'center',
//     color: 'black',
//   },
//   getStartedText: {
//     fontSize: 38,
//     fontWeight: 'bold',
//     marginTop: 80,
//     marginLeft: 20,
//     color: 'coral', //(#ff7f50)
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     borderBottomColor: '#CCCCCC',
//     borderBottomWidth: 1,
//     marginTop: 50,
//     marginLeft: 20,
//     marginRight: 20,
//     paddingHorizontal: 15,
//   },
//   prefixText: {
//     marginRight: 10,
//     fontSize: 18,
//     color: '#333333',
//   },
//   phoneNumberInput: {
//     flex: 1,
//     fontSize: 15,
//     color: '#333333',
//   },
//   continueWithText: {
//     marginTop: 20,
//     fontSize: 16,
//     color: 'darkgrey',
//     fontWeight: 'bold',
//     textAlignVertical: 'center',
//     textAlign: 'center',
//   },
//   buttonsContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 50,
//   },
//   button: {
//     width: '80%',
//     height: 50,
//     borderRadius: 8,
//     padding: 15,
//     alignItems: 'center',
//     flexDirection: 'row',
//     marginTop: 20,
//     marginLeft: 20,
//     marginRight: 20,
//     backgroundColor: '#FFFFFF',
//     borderWidth: 1,
//     borderColor: '#000000',
//   },
//   buttonIcon: {
//     width: 24,
//     height: 24,
//     marginRight: 10,
//   },
//   buttonText: {
//     flex: 1,
//     fontSize: 16,
//     color: '#000000',
//     fontWeight: 'bold',
//     textAlign: 'center',
//     textAlignVertical: 'center',
//   },
//   buttonGoogle: {
//     borderColor: '#000000',
//   },
//   buttonFacebook: {
//     borderColor: '#000000',
//   },
//   buttonEmail: {
//     borderColor: '#000000',
//   },
//   agreementContainer: {
//     alignItems: 'center',
//     marginTop: 150,
//   },
//   agreementText: {
//     fontSize: 14,
//     color: 'gray',
//     textAlign: 'center',
//   },
//   inlineText: {
//     fontWeight: 'bold',
//     color: 'gray',
//   },
//   inlineUnderlineGray: {
//     fontWeight: 'bold',
//     textDecorationLine: 'underline',
//     color: 'gray',
//   },
//   inlineUnderlineBlack: {
//     fontWeight: 'bold',
//     textDecorationLine: 'underline',
//     color: 'black',
//   },
// });

// export default welcome;
