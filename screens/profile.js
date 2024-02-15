/* eslint-disable prettier/prettier */
//packages to be installed..dependencies in this screens
//npm i @react-native-community/datetimepicker

import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView,
  Modal,
} from 'react-native';
import {useState} from 'react';
import {useEffect} from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import {useNavigation} from '@react-navigation/native';

const CustomAlert = ({visible, message, onClose}) => {
  if (!visible) {
    return null;
  }
  return (
    <Modal
      transparent
      animationType="fade"
      visible={visible}
      onRequestClose={onClose}>
      <View style={styles.modalBackground}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.messageText}>{message}</Text>
            <TouchableOpacity style={styles.closeButton} onPress={onClose}>
              <Image
                source={require('../assets/updatedIcon.png')}
                style={styles.closeIcon}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const Profile = ({navigation}) => {
  useEffect(() => {
    setShowSuccessModal(false); // Reset showSuccessModal state when the component mounts or unmounts
  }, []);

  const [isEditable, setIsEditable] = useState(false);
  const [editButtonText, setEditButtonText] = useState('Edit Profile');
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [isSaveButtonClicked, setIsSaveButtonClicked] = useState(false);

  useEffect(() => {
    if (isSaveButtonClicked) {
      const timer = setTimeout(() => {
        setShowSuccessModal(false);
        setIsEditable(false);
        setEditButtonText('Edit Profile');
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [isSaveButtonClicked]);

  const handleLocationPress = () => {
    Alert.alert('Location Pressed');
  };
  const handlerBack = () => {
    navigation.navigate('more')
  };

  const handleGenderPress = () => {
    Alert.alert('Gender Pressed');
  };

  const handleBirthdayPress = () => {
    if (isEditable) {
      setShowDatePicker(true);
    }
  };
  const handleDateChange = (event, selected) => {
    setShowDatePicker(false);
    if (selected) {
      const selectedDateString = selected.toLocaleDateString(); // Customize date format if needed
      setSelectedDate(selectedDateString);
    }
  };

  const handleEditSaveChanges = () => {
    if (!isEditable) {
      setIsEditable(true);
      setEditButtonText('Save Changes');
    } else {
      setIsEditable(false);
      setEditButtonText('Edit Profile');
      // Perform logic to save changes here
      setShowSuccessModal(true);
      setIsSaveButtonClicked(true);
    }
  };

  const handleCloseSuccessModal = () => {
    setShowSuccessModal(false); // Close the success modal
    setIsEditable(false); // Set isEditable state to false after closing modal
    setEditButtonText('Edit Profile'); // Reset button text after closing modal
  };
  return (
    <View style={styles.container}>
      {/* Header */}

      <View style={styles.header}>
        <TouchableOpacity onPress={handlerBack}>
          <Image
            source={require('../assets/back-arrow.png')}
            style={styles.backButton}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <Text style={styles.title}>My Profile</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        {/* Background */}
        <View style={styles.background}>
          <View style={styles.textFieldsContainer}>
            <View style={styles.textFieldContainer}>
              <Text style={styles.placeholder}>Your Full Name</Text>
              <View style={styles.inputWithIcon}>
                <TextInput
                  style={styles.textField}
                  placeholder="Enter full name"
                  placeholderTextColor="gray"
                  editable={isEditable}
                />
              </View>
            </View>
            <View style={styles.textFieldContainer}>
              <Text style={styles.placeholder}>Your Location</Text>
              <View style={styles.inputWithIcon}>
                <TextInput
                  style={styles.textField}
                  placeholder="Select location"
                  placeholderTextColor="gray"
                  editable={isEditable}
                />
                <TouchableOpacity onPress={handleLocationPress}>
                  <Image
                    source={require('../assets/right-arrow.png')}
                    style={styles.arrowIcon}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.textFieldContainer}>
              <Text style={styles.placeholder}>Your Birthday</Text>
              <View style={styles.inputWithIcon}>
                <TextInput
                  style={[
                    styles.textField,
                    {
                      color: selectedDate ? 'black' : 'gray',
                    },
                  ]}
                  placeholder={
                    isEditable
                      ? 'Select birthday'
                      : selectedDate || 'Select birthday'
                  }
                  placeholderTextColor="gray"
                  value={selectedDate}
                  editable={isEditable}
                  onTouchStart={handleBirthdayPress}
                />
                <TouchableOpacity onPress={handleBirthdayPress}>
                  <Image
                    source={require('../assets/right-arrow.png')}
                    style={styles.arrowIcon}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
              </View>
              {showDatePicker && (
                <DateTimePicker
                  value={new Date()} // Initial value
                  mode="date" // Set the mode to 'date'
                  display="default" // Set the display mode
                  onChange={handleDateChange} // Event handler for date change
                />
              )}
            </View>
            <View style={styles.textFieldContainer}>
              <Text style={styles.placeholder}>Your Email Address</Text>
              <TextInput
                style={styles.textField}
                placeholder="Enter email address"
                placeholderTextColor="gray"
                editable={isEditable}
              />
            </View>
            <View style={styles.textFieldContainer}>
              <Text style={styles.placeholder}>Please Choose a Gender</Text>
              <View style={styles.inputWithIcon}>
                <TextInput
                  style={styles.textField}
                  placeholder="Select gender"
                  placeholderTextColor="gray"
                  editable={isEditable}
                />
                <TouchableOpacity onPress={handleGenderPress}>
                  <Image
                    source={require('../assets/down-arrow.png')}
                    style={styles.arrowIcon}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <TouchableOpacity
            style={styles.editProfileButton}
            onPress={handleEditSaveChanges}>
            <Text style={styles.editProfileButtonText}>{editButtonText}</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <CustomAlert
        visible={showSuccessModal}
        message="Update Successful!"
        onClose={handleCloseSuccessModal} // Close the modal when onClose is triggered
      />
    </View>
  );
};

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'darkred',
    padding: 15,
    zIndex: 1,
  },
  backButton: {
    width: 24,
    height: 24,
    tintColor: 'white',
    marginRight: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  background: {
    flex: 1,
    backgroundColor: 'ghostwhite',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textFieldsContainer: {
    width: '80%',
  },
  textFieldContainer: {
    marginBottom: 20,
  },
  placeholder: {
    color: 'darkred',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  textField: {
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 12,
    paddingRight: 40,
  },
  inputWithIcon: {
    position: 'relative',
  },
  arrowIcon: {
    position: 'absolute',
    right: 10,
    top: '50%',
    marginTop: -35,
    width: 20,
    height: 20,
    tintColor: 'darkred',
  },
  editProfileButton: {
    position: 'absolute',
    bottom: 20,
    left: 40,
    right: 40,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'darkred',
    borderRadius: 5,
    padding: 15,
    alignItems: 'center',
  },
  editProfileButtonText: {
    color: 'darkred',
    fontWeight: 'bold',
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    width: '60%',
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    padding: 20,
  },
  modalContent: {
    // Other styles for the modal content...
  },
  messageText: {
    // Styles for the message text...
  },
  closeButton: {
    // Styles for the close button...
  },
  closeIcon: {
    height: 30,
    width: 30,
    alignSelf: 'center', // Align the icon in the center horizontally
    marginTop: 20, // Adjust the top margin to create space between the text and the icon
  },
});

export default Profile;
