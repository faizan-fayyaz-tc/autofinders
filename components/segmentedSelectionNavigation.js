/* eslint-disable prettier/prettier */
//segmentedSelectionNavigation.js

import React, { useState } from 'react';
// import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Image } from 'react-native';

import { View, Text, Button, Modal, TouchableOpacity ,StyleSheet ,ScrollView , FlatList , Image } from 'react-native';
import GoogleLogo from "../assets/Googlelogo.jpeg";
import { brandData, modelData, optionsData } from '../data/optionsData';
// import manualCars from '../../assets/images/automatic_cars.png';
// import automaticCars from '../assets/images/automatic_cars.png';

const CategoriesScreen = ({ navigation }) => {
  // const [selectedSection, setSelectedSection] = useState('Categories');

  // // Define images and labels within the component
  // const data = {
  //   Categories: {
  //     images: {
  //       1: GoogleLogo,
  //       2: GoogleLogo,
  //       // Add more as needed
  //       // 3: require('../assets/images/family_cars.png'),
  //       // 4: require('../assets/images/old_cars.png'),
  //       // 5: require('../assets/images/small_car.png'),
  //       // 6: require('../assets/images/big_cars.png'),
  //       // 7: require('../assets/images/seater.png'),
  //       // 8: require('../assets/images/seater.png'),
  //       // 9: require('../assets/images/2seater.png'),
  //       // 10: require('../assets/images/imported_cars.png'),
  //       // 11: require('../assets/images/cc_cars.png'),
  //       // 12: require('../assets/images/cc_cars.png'),
  //       // 13: require('../assets/images/cc_cars.png'),
  //       // 14: require('../assets/images/japanese_cars.png'),
  //       // 15: require('../assets/images/low_mileage.png'),
  //       // 16: require('../assets/images/low_price.png'),
  //       // 17: require('../assets/images/hybrid_cars.png'),
  //       // 18: require('../assets/images/electric_cars.png'),
  //       // 19: require('../assets/images/commercial_cars.png'),
  //       // 20: require('../assets/images/diesel_cars.png'),
  //       // 21: require('../assets/images/low_price.png'),
  //       // 22: require('../assets/images/seater.png'),
  //       // 23: require('../../assets/images/modified_cars.png'),
  //       // 24: require('../../assets/images/auction.png'),
  //       // 25: require('../../assets/images/duplicate_file.png'),
  //       // 26: require('../../assets/images/duplicate_number.png'),
  //       // 27: require('../../assets/images/urgent.png'),
  //       // 28: require('../../assets/images/carry_daba.png'),
  //       // 29: require('../../assets/images/bank_auction.png'),
  //       // 30: require('../../assets/images/police_auction.png'),
  //       // 31: require('../../assets/images/armyy_auction.png'),
  //       // 32: require('../../assets/images/car-door.png'),
  //     },
  //    // labels: Array.from({ length: 32 }, (_, index) => `Category ${index + 1}`),
  //       labels: Array.from({ length: 32 }, (_, index) => {
  //       if (index === 0) {
  //         return 'Automatic Cars';
  //       }
  //       if (index === 1) {
  //         return 'Manual Cars';
  //       }
  //       if (index === 2) {
  //         return 'Family Cars';
  //       }
  //       if (index === 3) {
  //         return 'Old Cars';
  //       }
  //       if (index === 4) {
  //         return 'Small Cars';
  //       }
  //       if (index === 5) {
  //         return 'Big Cars';
  //       }
  //       if (index === 6) {
  //         return '5 Seater';
  //       }
  //       if (index === 7) {
  //         return '7 Seater';
  //       }
  //       if (index === 8) {
  //         return '2 Seater';
  //       }
  //       if (index === 9) {
  //         return 'Imported Cars';
  //       }
  //       if (index === 10) {
  //         return '1300cc Cars';
  //       }
  //       if (index === 11) {
  //         return '1000cc Cars';
  //       }
  //       if (index === 12) {
  //         return '660cc Cars';
  //       }
  //       if (index === 13) {
  //         return 'Japanese Cars';
  //       }
  //       if (index === 14) {
  //         return 'Low Mileage Cars';
  //       }
  //       if (index === 15) {
  //         return 'Low Priced Cars';
  //       }
  //      if (index === 16) {
  //         return 'Hybrid Cars';
  //       }
  //      if (index === 17) {
  //         return 'Electric Cars';
  //       }
  //      if (index === 18) {
  //         return 'Commercial Cars';
  //       }
  //      if (index === 19) {
  //         return 'Diesel Cars';
  //       }
  //      if (index === 20) {
  //         return 'Cheap Cars';
  //       }
  //      if (index === 21) {
  //         return '8 Seater';
  //       }
  //      if (index === 22) {
  //         return 'Modified Cars';
  //       }
  //      if (index === 23) {
  //         return 'Custom Auction';
  //       }
  //      if (index === 24) {
  //         return 'Duplicate File';
  //       }
  //      if (index === 25) {
  //         return 'Duplicate Number';
  //       }
  //      if (index === 26) {
  //         return 'Urgent';
  //       }
  //      if (index === 27) {
  //         return 'Carry Daba';
  //       }
  //      if (index === 28) {
  //         return 'Bank Auction';
  //       }
  //      if (index === 29) {
  //         return 'Police Auction';
  //       }
  //      if (index === 30) {
  //         return 'Army Auction';
  //       }
  //      if (index === 31) {
  //         return '2 Door';
  //       }
  //      if (index === 32) {
  //         return '3 Door';
  //       }
  //     }),
  //   },
  //   Brand: {
  //     images: {
  //       1: require('../assets/toyota.png'),
  //       2: require('../assets/suzuki.png'),
  //       3: require('../assets/honda.png'),
  //       4: require('../assets/honda.png'),
  //       5: require('../assets/nissan.png'),
  //       // 5: require('../assets/nissan.png'),
  //       6: require('../assets/hyndai.png'),
  //       7: require('../assets/daihatsu.png'),
  //       8: require('../assets/mitsubishi.png'),
  //       9: require('../assets/changan.png'),
  //       10: require('../assets/mercedes.png'),
  //       11: require('../assets/mg.png'),
  //       // Add more as needed
  //       12: require('../assets/audi.png'),
  //       13: require('../assets/proton.png'),
  //       14: require('../assets/BMW.png'),
  //       15: require('../assets/dfsk.png'),
  //       16: require('../assets/haval.png'),
  //       17: require('../assets/faw.png'),

  //       18: require('../assets/lexus.png'),
  //       19: require('../assets/mazda.png'),
  //       20: require('../assets/prince.png'),
  //       21: require('../assets/chevrolet.png'),
  //       22: require('../assets/chery.png'),
  //       23: require('../assets/jeep.png'),
  //       24: require('../assets/jeep.png'),
  //     },
  //     labels: Array.from({ length: 24 }, (_, index) => {
  //       if (index === 0) {
  //         return 'Toyota';
  //       }
  //       if (index === 1) {
  //         return 'Suzuki';
  //       }
  //       if (index  === 2) {
  //         return 'Honda';
  //       }
  //       if (index  === 3) {
  //         return 'KIA';
  //       }
  //       if (index === 4){
  //         return 'Nissan';
  //       }
  //       if (index === 5) {
  //         return 'Hyundai';
  //       }
  //       if (index === 6) {
  //         return 'Daihastsu';
  //       }
  //       if (index === 7) {
  //         return 'Mitsubishi';
  //       }
  //       if (index  === 8) {
  //         return 'Changan';
  //       }
  //       if (index  === 9) {
  //         return 'Mercedes';
  //       }
  //       if (index === 10) {
  //         return 'MG';
  //       }
  //       if (index === 11) {
  //         return 'Audi';
  //       }
  //       if (index  === 12) {
  //         return 'Proton';
  //       }
  //       if (index  === 13) {
  //         return 'BMW';
  //       }
  //       if (index === 14) {
  //         return 'DFSK';
  //       }
  //       if (index === 15) {
  //         return 'Haval';
  //       }
  //       if (index === 16) {
  //         return 'FAW';
  //       }
  //       if (index  === 17) {
  //         return 'Lexus';
  //       }
  //       if (index === 18) {
  //         return 'Mazda';
  //       }
  //       if (index  === 19) {
  //         return 'Prince';
  //       }
  //       if (index === 20) {
  //         return 'Chevrolet';
  //       }
  //       if (index  === 21) {
  //         return 'Cherry';
  //       }
  //       if (index  === 22) {
  //         return 'Jeep';
  //       }
  //       if (index === 23) {
  //         return 'Range Rover';
  //       }
  //       if (index === 24) {
  //         return 'Tesla';
  //       }

  //     }),
  //   },
  //   Budget: {
  //       labels: Array.from({ length: 12 }, (_, index) => {
  //       if (index === 0) {
  //         return 'Under 5 lakh';
  //       }
  //       if (index === 1) {
  //         return '5-10 lakh';
  //       }
  //       if (index === 2) {
  //         return '10-20 lakh';
  //       }
  //       if (index === 3) {
  //         return '20-30 lakh';
  //       }
  //       if (index === 4) {
  //         return '30-40 lakh';
  //       }
  //       if (index === 5) {
  //         return '40-50 lakh';
  //       }
  //       if (index === 6) {
  //         return '50-60 lakh';
  //       }
  //       if (index === 7) {
  //         return '60-80 lakh';
  //       }
  //       if (index === 8) {
  //         return '80lakh-1 Crore';
  //       }
  //       if (index === 9) {
  //         return '1-1.5 Crore';
  //       }
  //       if (index === 10) {
  //         return '1.5-2 Crore';
  //       }
  //       if (index === 11) {
  //         return 'Above 2 Crore';
  //       }
  //       if (index === 12) {
  //         return 'Bahawalpur';
  //       }
  //       if (index === 13) {
  //         return 'Mardan';
  //       }
  //       if (index === 14) {
  //         return 'Quetta';
  //       }
  //       if (index === 15) {
  //         return 'Wah cantt';
  //       }
  //      if (index === 16) {
  //         return 'Gujrat';
  //       }
  //      if (index === 17) {
  //         return 'Rahim Yar Khan';
  //       }
  //      if (index === 18) {
  //         return 'Attock';
  //       }
  //      if (index === 19) {
  //         return 'Sahiwal';
  //       }
  //      if (index === 20) {
  //         return 'Chakwal';
  //       }
  //      if (index === 21) {
  //         return 'Mandi bahauddin';
  //       }
  //      if (index === 22) {
  //         return 'Swabi';
  //       }
  //      if (index === 23) {
  //         return 'Jhelum';
  //       }
  //      if (index === 24) {
  //         return 'Mansehera';
  //       }
  //      if (index === 25) {
  //         return 'Haripur';
  //       }
  //      if (index === 26) {
  //         return 'Okara';
  //       }
  //      if (index === 27) {
  //         return 'D.G Khan';
  //       }
  //      if (index === 28) {
  //         return 'Mirpur A.K';
  //       }
  //      if (index === 29) {
  //         return 'Jhang';
  //       }
  //     }),
  //   },
  //   Model: {
  //     images: {
  //       1: require('../assets/toyota.png'),
  //       2: require('../assets/Honda.jpeg'),
  //       // Add more as needed
  //     },
  //           labels: Array.from({ length: 30 }, (_, index) => {
  //       if (index === 0) {
  //         return 'Corolla';
  //       }
  //       if (index === 1) {
  //         return 'Civic';
  //       }
  //       if (index  === 2) {
  //         return 'City';
  //       }
  //       if (index  === 3) {
  //         return 'Alto';
  //       }
  //       if (index === 4){
  //         return 'Mehran';
  //       }
  //       if (index === 5) {
  //         return 'Cultus';
  //       }
  //       if (index === 6) {
  //         return 'Wagon R';
  //       }
  //       if (index === 7) {
  //         return 'Vitz';
  //       }
  //       if (index  === 8) {
  //         return 'Swift';
  //       }
  //       if (index  === 9) {
  //         return 'Hilux';
  //       }
  //       if (index === 10) {
  //         return 'Mira';
  //       }
  //       if (index === 11) {
  //         return 'Prado';
  //       }
  //       if (index  === 12) {
  //         return 'Sportage';
  //       }
  //       if (index  === 13) {
  //         return 'Yaris';
  //       }
  //       if (index === 14) {
  //         return 'Vezel';
  //       }
  //       if (index === 15) {
  //         return 'Passo';
  //       }
  //       if (index === 16) {
  //         return 'Bolan';
  //       }
  //       if (index  === 17) {
  //         return 'Prius';
  //       }
  //       if (index === 18) {
  //         return 'Aqua';
  //       }
  //       if (index  === 19) {
  //         return 'Land Cruiser';
  //       }
  //       if (index === 20) {
  //         return 'Fortuner';
  //       }
  //       if (index  === 21) {
  //         return 'Cuore';
  //       }
  //       if (index  === 22) {
  //         return 'BR-V';
  //       }
  //       if (index === 23) {
  //         return 'Khyber';
  //       }
  //       if (index === 24) {
  //         return 'Dayz';
  //       }
  //       if (index === 25) {
  //         return 'Every';
  //       }
  //       if (index === 26) {
  //         return 'HS';
  //       }
  //       if (index === 27) {
  //         return 'Tucson';
  //       }
  //       if (index === 28) {
  //         return 'Santro';
  //       }
  //       if (index === 29) {
  //         return 'C-HR';
  //       }
  //     }),
  //   },

  //   City: {
  //     images: {
  //       // 1: require('../assets/images/locationPin_icon.png'),
  //       // 2: require('../../assets/images/locationPin_icon.png'),
  //       // 3: require('../../assets/images/locationPin_icon.png'),
  //       // 4: require('../../assets/images/locationPin_icon.png'),
  //       // 5: require('../../assets/images/locationPin_icon.png'),
  //       // 6: require('../../assets/images/locationPin_icon.png'),
  //       // 7: require('../../assets/images/locationPin_icon.png'),
  //       // 8: require('../../assets/images/locationPin_icon.png'),
  //       // 9: require('../../assets/images/locationPin_icon.png'),
  //       // 10: require('../../assets/images/locationPin_icon.png'),
  //       // 11: require('../../assets/images/locationPin_icon.png'),
  //       // 12: require('../../assets/images/locationPin_icon.png'),
  //       // 13: require('../../assets/images/locationPin_icon.png'),
  //       // 14: require('../../assets/images/locationPin_icon.png'),
  //       // 15: require('../../assets/images/locationPin_icon.png'),
  //       // 16: require('../../assets/images/locationPin_icon.png'),
  //       // 17: require('../../assets/images/locationPin_icon.png'),
  //       // 18: require('../../assets/images/locationPin_icon.png'),
  //       // 19: require('../../assets/images/locationPin_icon.png'),
  //       // 20: require('../../assets/images/locationPin_icon.png'),
  //       // 21: require('../../assets/images/locationPin_icon.png'),
  //       // 22: require('../../assets/images/locationPin_icon.png'),
  //       // 23: require('../../assets/images/locationPin_icon.png'),
  //       // 24: require('../../assets/images/locationPin_icon.png'),
  //       // 25: require('../../assets/images/locationPin_icon.png'),
  //       // 26: require('../../assets/images/locationPin_icon.png'),
  //       // 27: require('../../assets/images/locationPin_icon.png'),
  //       // 28: require('../../assets/images/locationPin_icon.png'),
  //       // 29: require('../../assets/images/locationPin_icon.png'),
  //       // 30: require('../../assets/images/locationPin_icon.png'),
  //     },
  //       labels: Array.from({ length: 29 }, (_, index) => {
  //       if (index === 0) {
  //         return 'Lahore';
  //       }
  //       if (index === 1) {
  //         return 'Karachi';
  //       }
  //       if (index === 2) {
  //         return 'Islambad';
  //       }
  //       if (index === 3) {
  //         return 'Rawalpindi';
  //       }
  //       if (index === 4) {
  //         return 'Peshawar';
  //       }
  //       if (index === 5) {
  //         return 'Faisalabad';
  //       }
  //       if (index === 6) {
  //         return 'Multan';
  //       }
  //       if (index === 7) {
  //         return 'Gujranwala';
  //       }
  //       if (index === 8) {
  //         return 'Sialkot';
  //       }
  //       if (index === 9) {
  //         return 'Abbottabad';
  //       }
  //       if (index === 10) {
  //         return 'Sarghoda';
  //       }
  //       if (index === 11) {
  //         return 'Hyderabad';
  //       }
  //       if (index === 12) {
  //         return 'Bahawalpur';
  //       }
  //       if (index === 13) {
  //         return 'Mardan';
  //       }
  //       if (index === 14) {
  //         return 'Quetta';
  //       }
  //       if (index === 15) {
  //         return 'Wah cantt';
  //       }
  //      if (index === 16) {
  //         return 'Gujrat';
  //       }
  //      if (index === 17) {
  //         return 'Rahim Yar Khan';
  //       }
  //      if (index === 18) {
  //         return 'Attock';
  //       }
  //      if (index === 19) {
  //         return 'Sahiwal';
  //       }
  //      if (index === 20) {
  //         return 'Chakwal';
  //       }
  //      if (index === 21) {
  //         return 'Mandi bahauddin';
  //       }
  //      if (index === 22) {
  //         return 'Swabi';
  //       }
  //      if (index === 23) {
  //         return 'Jhelum';
  //       }
  //      if (index === 24) {
  //         return 'Mansehera';
  //       }
  //      if (index === 25) {
  //         return 'Haripur';
  //       }
  //      if (index === 26) {
  //         return 'Okara';
  //       }
  //      if (index === 27) {
  //         return 'D.G Khan';
  //       }
  //      if (index === 28) {
  //         return 'Mirpur A.K';
  //       }
  //      if (index === 29) {
  //         return 'Jhang';
  //       }
  //     }),
  //   },
  // };

  // const handleSectionPress = (section) => {
  //   setSelectedSection(section);
  // };

  // const navigateToDetails = (section, label) => {
  //   navigation.navigate('Details', { section, label });
  // };

  // const renderLabels = (section) => {
  //   const { images, labels } = data[section];

  //   return (
  //     <ScrollView
  //       horizontal
  //       showsHorizontalScrollIndicator={false}
  //       style={styles.labelContainer}
  //     >
  //       <View style={styles.labelRow}>
  //         {labels.map((label, index) => (
  //           <TouchableOpacity
  //             key={index}
  //             style={styles.labelItem}
  //             onPress={() => navigateToDetails(selectedSection, label)}
  //           >
  //             {images && images[index + 1] && (
  //               <Image source={images[index + 1]} style={styles.labelImage} />
  //             )}
  //             <Text style={styles.labelText}>{label}</Text>
  //           </TouchableOpacity>
  //         ))}
  //       </View>
  //     </ScrollView>
  //   );
  // };

  // const renderSections = () => {
  //   const sections = ['Categories', 'Brand', 'Budget', 'Model', 'City'];

  //   return sections.map((section, index) => (
  //     <TouchableOpacity
  //       key={index}
  //       style={[
  //         styles.sectionButton,
  //         selectedSection === section && styles.selectedSection,
  //       ]}
  //       onPress={() => handleSectionPress(section)}
  //     >
  //       <Text style={styles.sectionText}>{section}</Text>
  //     </TouchableOpacity>
  //   ));
  // };

  // return (
  //   <View style={styles.container}>
  //     <View style={styles.sectionsContainer}>{renderSections()}</View>
  //     {selectedSection === 'Categories' && renderLabels('Categories')}
  //     {selectedSection === 'Brand' && renderLabels('Brand')}
  //     {selectedSection === 'Budget' && renderLabels('Budget')}
  //     {selectedSection === 'Model' && renderLabels('Model')}
  //     {selectedSection === 'City' && renderLabels('City')}
  //     {/* Add other sections as needed */}
  //   </View>
  // );
  const [selectedTab, setSelectedTab] = useState('brand');
  // const optionsData = [
  //   { id: '1', text: 'Option 1' ,image:""},
  //   { id: '2', text: 'Option 2' ,image:require("../assets/audi.png")},
  //   { id: '3', text: 'Option 3' ,image:require("../assets/lexus.png")},
  //   { id: '4', text: 'Option 4' ,image:require("../assets/nissan.png")},
  //   { id: '5', text: 'Option 5' ,image:require("../assets/nissan.png")},
  //   { id: '6', text: 'Option 6' ,image:require("../assets/nissan.png")},
  //   { id: '7', text: 'Option 7' ,image:require("../assets/nissan.png")},
  //   { id: '8', text: 'Option 8' ,image:require("../assets/nissan.png")},
  // ];
  return (
<View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, selectedTab === 'brand' && styles.selectedButton]}
          onPress={() => setSelectedTab('brand')}
        >
          <Text style={styles.buttonText}>Brand</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, selectedTab === 'model' && styles.selectedButton]}
          onPress={() => setSelectedTab('model')}
        >
          <Text style={styles.buttonText}>Model</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, selectedTab === 'year' && styles.selectedButton]}
          onPress={() => setSelectedTab('year')}
        >
          <Text style={styles.buttonText}>Year</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, selectedTab === 'color' && styles.selectedButton]}
          onPress={() => setSelectedTab('color')}
        >
          <Text style={styles.buttonText}>Color</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, selectedTab === 'price' && styles.selectedButton]}
          onPress={() => setSelectedTab('price')}
        >
          <Text style={styles.buttonText}>Price</Text>
        </TouchableOpacity>
      </View>

      {/* Options for browsing */}
      {selectedTab === 'brand' && (
        <FlatList
          horizontal
          data={brandData}
          keyExtractor={(item) => item.id}
          renderItem={({item }) => (
            <TouchableOpacity style={styles.optionCard}>
              {item.image && 
                <View style={styles.imageContainer}>
                  <Image source={item.image} style={styles.optionImage} resizeMode='contain'/>
                </View>
              }
              {/* <Image source={require("../assets/audi.png")} style={styles.optionImage} /> */}
            <Text style={styles.optionText}>{item.text}</Text>
          </TouchableOpacity>
          )}
          contentContainerStyle={styles.optionContainer}
        />
      )}
      {selectedTab === 'model' && (
        <FlatList
        horizontal
        data={modelData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.optionCard}>
            <View style={styles.imageContainer}>
              <Image source={require("../assets/audi.png")} style={styles.optionImage} resizeMode='contain'/>
            </View>
            {/* <Image source={require("../assets/audi.png")} style={styles.optionImage} /> */}
          <Text style={styles.optionText}>{item.text}</Text>
        </TouchableOpacity>
        )}
        contentContainerStyle={styles.optionContainer}
      />
      )}

      {selectedTab === 'year' && (
          <FlatList
          horizontal
          data={modelData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.optionCard}>
              <View style={styles.imageContainer}>
                <Image source={require("../assets/audi.png")} style={styles.optionImage} resizeMode='contain'/>
              </View>
              {/* <Image source={require("../assets/audi.png")} style={styles.optionImage} /> */}
            <Text style={styles.optionText}>{item.text}</Text>
          </TouchableOpacity>
          )}
          contentContainerStyle={styles.optionContainer}
        />
      )}

      {selectedTab === 'color' && (
          <FlatList
          horizontal
          data={modelData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.optionCard}>
              <View style={styles.imageContainer}>
                <Image source={require("../assets/audi.png")} style={styles.optionImage} resizeMode='contain'/>
              </View>
              {/* <Image source={require("../assets/audi.png")} style={styles.optionImage} /> */}
            <Text style={styles.optionText}>{item.text}</Text>
          </TouchableOpacity>
          )}
          contentContainerStyle={styles.optionContainer}
        />
      )}

      {selectedTab === 'price' && (
          <FlatList
          horizontal
          data={modelData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.optionCard}>
              <View style={styles.imageContainer}>
                <Image source={require("../assets/audi.png")} style={styles.optionImage} resizeMode='contain'/>
              </View>
              {/* <Image source={require("../assets/audi.png")} style={styles.optionImage} /> */}
            <Text style={styles.optionText}>{item.text}</Text>
          </TouchableOpacity>
          )}
          contentContainerStyle={styles.optionContainer}
        />
      )}
    </View>
  );

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent:"space-between",
    marginBottom: 20,
    // borderWidth: 1,
    // borderColor: 'black',
    width:"100%"
  },
  button: {
    flex:1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: 'white',
    // borderWidth: 1,
    // borderColor: 'black',
  },
  selectedButton: {
    // backgroundColor: 'white',
    borderBottomWidth: 2, 
    borderBottomColor: 'red', 
    
  },
  buttonText: {
    fontSize: 18,
    textAlign:"center"
  },
  optionContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  optionCard: {
    width: 100,
    height: 100,
    // margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    // borderWidth: 1,
    // borderColor: 'black',
  },
  imageContainer: {
    width: "100%",
    height: 50,
    // padding:20,
    // borderRadius: 40,
    overflow: 'hidden', // Ensure image is clipped to border radius
    // marginBottom: 10,
    // borderWidth: 1,
    // borderColor: 'black',
  },
  optionImage: {
    width: '100%',
    height: '100%',
    transform: [{ scale: 0.9 }],
    // borderWidth: 1,
    // borderColor: 'black',
  },
  optionText: {
    fontSize: 14,
    textAlign: 'center',
    // height:30,
    // borderWidth: 1,
    // borderColor: 'black',
  },
});


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 10,
//     backgroundColor:'white',
//   },
//   sectionsContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     marginBottom: 10,
//   },
//   sectionButton: {
//     paddingVertical: 10,
//   },
//   selectedSection: {
//     borderBottomWidth: 2,
//     borderColor: '#Ac3803',
//   },
//   sectionText: {
//     fontWeight: 'bold',
//     color: '#Ac3803',
//     fontSize:16,
//   },
//   labelContainer: {
//     flexDirection: 'row',
//     marginTop: 10,
//   },
//   labelRow: {
//     flexDirection: 'row',
//   },
// labelItem: {
//   width: 100,
//   height: 100,
//   margin: 5,
//   alignItems: 'center',
//   justifyContent: 'center',
//   backgroundColor: '#ffffff',
//   borderRadius: 8,
//   shadowColor: '#000',
//   shadowOffset: {
//     width: 4,
//     height: 5,
//   },
//   shadowOpacity: 0.25,
//   shadowRadius: 3.84,
//   elevation: 5, // For Android
// },
//   labelImage: {
//     width:55,
//     height: 40,
//     borderRadius: 5,/////
//     marginBottom: 5,
    
//   },
//   labelText: {
//     fontSize: 12,
//     color: 'black',
//     fontWeight: 'bold',
//   },
// });

export default CategoriesScreen;
