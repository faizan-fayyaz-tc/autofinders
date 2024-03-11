/* eslint-disable prettier/prettier */
//segmentedSelectionNavigation.js

import React, { useState } from 'react';


import { View, Text, Button, Modal, TouchableOpacity ,StyleSheet ,ScrollView , FlatList , Image } from 'react-native';
import GoogleLogo from "../assets/Googlelogo.jpeg";
import { brandData, modelData, budgetData, citiesData, catogoriesData } from '../data/optionsData';


const CategoriesScreen = ({ navigation }) => {
  
  const [selectedTab, setSelectedTab] = useState('brand');
  
  return (
<View style={styles.container}>
      <View style={styles.buttonContainer}>
      <TouchableOpacity
          style={[styles.button, selectedTab === 'Catogories' && styles.selectedButton]}
          onPress={() => setSelectedTab('Catogories')}
        >
          <Text style={styles.buttonText}>Catogory</Text>
        </TouchableOpacity>
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
          style={[styles.button, selectedTab === 'cities' && styles.selectedButton]}
          onPress={() => setSelectedTab('cities')}
        >
          <Text style={styles.buttonText}>Cities</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, selectedTab === 'budget' && styles.selectedButton]}
          onPress={() => setSelectedTab('budget')}
        >
          <Text style={styles.buttonText}>Budget</Text>
        </TouchableOpacity>
      </View>

      {/* Options for browsing */}

      {selectedTab === 'Catogories' && (
          <FlatList
          horizontal
          data={catogoriesData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.optionCard}>
              <View style={styles.imageContainer}>
                <Image source={item.image} style={styles.optionImage} resizeMode='contain'/>
              </View>
              {/* <Image source={require("../assets/audi.png")} style={styles.optionImage} /> */}
            <Text style={styles.optionText}>{item.text}</Text>
          </TouchableOpacity>
          )}
          contentContainerStyle={styles.optionContainer}
        />
      )}

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

      {selectedTab === 'cities' && (
          <FlatList
          horizontal
          data={citiesData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.optionCard}>
              {/* <View style={styles.imageContainer}>
                <Image source={require("../assets/audi.png")} style={styles.optionImage} resizeMode='contain'/>
              </View> */}
              {/* <Image source={require("../assets/audi.png")} style={styles.optionImage} /> */}
            <Text style={styles.optionText}>{item.text}</Text>
          </TouchableOpacity>
          )}
          contentContainerStyle={styles.optionContainer}
        />
      )}

      {selectedTab === 'budget' && (
          <FlatList
          horizontal
          data={budgetData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.optionCard}>
              {/* <View style={styles.imageContainer}>
                <Image source={require("../assets/audi.png")} style={styles.optionImage} resizeMode='contain'/>
              </View> */}
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
    paddingHorizontal: 1,
    paddingVertical: 2,
    backgroundColor: 'white',
    // borderWidth: 1,
    // borderColor: 'black',
  },
  selectedButton: {
    // backgroundColor: 'white',
    borderBottomWidth: 2, 
    borderBottomColor: '#fc6f03', 
    
  },
  buttonText: {
    fontSize: 16,
    textAlign:"center",
    color: '#fc6f03',
    fontWeight: 'bold'
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
    // tintColor: 'black'
  },
  optionText: {
    fontSize: 14,
    textAlign: 'center',
    // height:30,
    // borderWidth: 1,
    // borderColor: 'black',
  },
});


export default CategoriesScreen;
