// /* eslint-disable prettier/prettier */
// /* eslint-disable no-dupe-keys */
// /* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
// import home_AutoFinderOffer_CarInspection from './stack/home_AutoFinderOffer_CarInspection';
import freeAds from '../assets/images/free_ads.png';
import premiumAds from '../assets/images/premium_ads.png';
import listItForYou from '../assets/images/list_it_for_you.png';
import carInspection from '../assets/images/car_inspection.png';
import buyCarForMe from '../assets/images/buy_car_for_me.png';
import rentCar from '../assets/images/rent_car.png';

const AutoFindersOffering = () => {

  const navigation = useNavigation();

  const data = [
    { id: 1, label: 'Autofinder Services', label2: 'Free Ads', image: freeAds },
    { id: 2, label: 'Autofinder Services', label2: 'Premium Ads', image: premiumAds },
    { id: 3, label: 'Autofinder Services', label2: 'List It For You', image: listItForYou},
    { id: 4, label: 'Autofinder Services', label2: 'Car Inspection', image: carInspection },
    { id: 5, label: 'Autofinder Services', label2: 'Buy Car For Me', image: buyCarForMe },
    { id: 6, label: 'Autofinder Services', label2: 'Rent A Car', image: rentCar},
  ];
  const renderTouchableOpacities = () => {
    const touchableOpacities = [];

    for (let i = 0; i < 3; i++) {
      const rowItems = [];
      for (let j = 0; j < 2; j++) {
        const index = i * 2 + j;
        if (index < data.length) {
          rowItems.push(
            <TouchableOpacity
              key={data[index].id}
              style={styles.touchableOpacity}
              // onPress={() => console.log(`Item ${data[index].id} pressed`)}
              onPress={() => handleItemPress(data[index])}
            >
              <Image source={data[index].image} style={styles.image} />
              <Text style={styles.label}>{data[index].label}</Text>
              <Text style={styles.label2}>{data[index].label2}</Text>
            </TouchableOpacity>
          );
        }
      }
      touchableOpacities.push(
        <View key={i} style={styles.row}>
          {rowItems}
        </View>
      );
    }
    return touchableOpacities;
  };

  const handleItemPress = (item) => {
    switch (item.id) {
      case 1:
        // Navigate to screen for id-1
        navigation.navigate('homeFreeAds');
        break;
      case 2:
        // Navigate to screen for id-2
        navigation.navigate('homePremiumAds');
        break;
      case 3:
        // Navigate to screen for id-3
        navigation.navigate('homeListItForYou');
        break;
      case 4:
        // Navigate to car inspections screen for id-4
        navigation.navigate('homeCarInspection');
        break;
      case 5:
        // Navigate to screen for id-5
        navigation.navigate('homeBuyCarForMe');
        break;
      case 6:
        // Navigate to screen for id-6
        navigation.navigate('homeRentACar');
        break;
      default:
        // Handle press for other items if needed
        console.log(`Item ${item.id} pressed`);
        break;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>AutoFinders Offering Services </Text>
        {/* <View style={styles.line} /> */}
      </View>
      {renderTouchableOpacities()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    // marginBottom: 40,
  },
  headerContainer: {
    marginBottom: 15,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: 'black', 
    marginTop: 5,
    width: 370,
  },
  row: {
    flexDirection: 'row',
  },
  touchableOpacity: {
    width: 170,
    height: 170,
    margin: 5,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    // borderColor: 'black',
    // borderWidth: 1
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    // Shadow properties for Android
    elevation: 5,
  },
  image: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  label: {
    marginTop: 5,
    fontSize: 12,
    //fontWeight: 'bold',
    color: '#000000',
  },
  label2: {
    marginTop: 2,
    fontSize: 20,
    color: 'gray',
    fontWeight: 'bold',
    color: '#Ac3803',
  },
});

export default AutoFindersOffering;

//#Ac3803 ≈ Fire
//#2884ec ≈ Royal Blue

//color: '#2884ec',
// #ebedf2

