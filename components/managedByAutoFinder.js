/* eslint-disable prettier/prettier */
// FeaturedAd.js
import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Image } from 'react-native';

const managedByAutoFinder = () => {
  // Mock data for 10 items
  const items = Array.from({ length: 10 }, (_, index) => ({
    id: index + 1,
    name: `Item ${index + 1}`,
    price: `$${(index + 1) * 1000}`,
    city: 'City Name',
    model: 'Model Name',
    kmDriven: `${(index + 1) * 5000} km`,
    // Image source will be provided by the user during upload
    // For now, using a placeholder image
    //imageSource: require('./path/to/placeholder-image.jpg'), // Replace with your placeholder image path
  }));

  return (
    <View style={styles.featuredAdsContainer}>
      <Text style={styles.featuredAdsLabel}>Managed Ads By AutoFinder</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.container}>
        {items.map((item) => (
          <TouchableOpacity key={item.id} style={styles.itemContainer}>
            {/* Image container */}
            <View style={styles.imageContainer}>
              {/* Placeholder for user-uploaded image */}
              {/* You can replace this with your actual image upload component */}
              <Image source={item.imageSource} style={styles.image} />
            </View>
            {/* Content container */}
            <View style={styles.contentContainer}>
              {/* Item details */}
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.price}>{item.price}</Text>
              <Text style={styles.city}>{item.city}</Text>
              <Text style={styles.modelKmDriven}>{`${item.model} / ${item.kmDriven}`}</Text>
              {/* Add more details or customize as needed */}
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  featuredAdsContainer: {
    marginBottom: 20,
    paddingLeft: 10,
  },
  featuredAdsLabel: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    marginLeft:10,
    marginTop: 20,
    padding: 5
  },
  container: {
    flexDirection: 'row',
  },
  itemContainer: {
    width: 180,
    height: 220,
    borderRadius: 20,
    backgroundColor: '#ffffff',
    margin: 5,
    flexDirection: 'column',
    // Shadow properties for iOS
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
  imageContainer: {
    flex: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    overflow: 'hidden',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    // Make sure to handle image dimensions appropriately
  },
  contentContainer: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#f4f0ec',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  name: {
    color: '#Ac3803',
    fontWeight: 'bold',
    fontSize: 12,
  },
  price: {
    color: '#000000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  city: {
    color: '#8b8c8c',
    fontSize: 12,
  },
  modelKmDriven: {
    color: '#8b8c8c',
    fontSize: 12,
  },
});

export default managedByAutoFinder;
