import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity,Platform  } from 'react-native';

const PendingAds = ({ adData, navigation }) => {
  // Render function for each item in the FlatList
  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleCellPress(item)}>
      <View style={styles.cell}>
        <Image source={item.image} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.name}>{item.Name}</Text>
          <Text style={styles.price}>{item.Price}</Text>
          <Text style={styles.city}>{item.City}</Text>
          <Text style={styles.model}>{item.ModelYear}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  const handleCellPress = (item) => {
   
    navigation.navigate('home', { itemId: item.id });
  };

  return (
    <FlatList
      data={adData}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()} // Assuming each ad has a unique ID
    />
  );
};

const styles = StyleSheet.create({
    cell: {
      flexDirection: 'row',
      backgroundColor: 'white',
      borderRadius: 5,
      height: 120,
      elevation: 2, // Add elevation for shadow effect
      shadowColor: '#000', // Shadow color
      shadowOffset: { width: 0, height: 2 }, // Shadow offset
      shadowOpacity: 0.25, // Shadow opacity
      shadowRadius: 3, // Shadow radius
      marginVertical: 5,
      marginLeft: 10,
      marginRight: 10,
    },
    image: {
      width: 150,
      height: 120,
      resizeMode: 'cover',
      borderRadius: 5,
      marginRight: 10,
    },
    textContainer: {
      marginTop: 10,
      flex: 1,
    },
    name: {
      fontSize: 14,
      color: '#Ac3803',
    },
    price: {
      fontSize: 16,
      color: 'black',
      fontWeight: 'bold',
    },
    city: {
      fontSize: 14,
      color: 'gray',
    },
    model: {
      fontSize: 14,
      color: 'gray',
    },
  });

export default PendingAds;
