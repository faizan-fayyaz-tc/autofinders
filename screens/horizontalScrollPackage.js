/* eslint-disable prettier/prettier */
// HorizontalScrollPackage.js

import React from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';

const HorizontalScrollPackage = ({
  imageSource,
  title,
  content,
  buttonText,
  onButtonClick,
}) => (
  <View style={styles.container}>
    <Image source={imageSource} style={styles.image} />
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.content}>{content}</Text>
    <TouchableOpacity onPress={onButtonClick} style={styles.packagePriceButton}>
      <Text style={styles.packagePrice}>{buttonText}</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: 150,
    margin: 10,
    borderRadius: 10,
    overflow: 'hidden',
    height: 160,
  },
  image: {
    width: 50,
    height: 50,
    resizeMode: 'cover',
    alignSelf: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'firebrick',
    alignSelf: 'center',
  },
  content: {
    color: 'grey',
    alignSelf: 'center',
    marginBottom: 10,
  },
  packagePriceButton: {
    backgroundColor: 'white',
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    padding: 5,
    borderWidth: 1,
    borderColor: 'darkred',
  },
  packagePrice: {
    color: 'darkred',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default HorizontalScrollPackage;
