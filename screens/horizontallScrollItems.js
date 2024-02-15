/* eslint-disable prettier/prettier */
// HorizontalScrollItem.js

import React from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';

const HorizontalScrollItem = ({imageSource, title, content, onPress}) => (
  <TouchableOpacity onPress={onPress}>
    <View style={styles.container}>
      <Image source={imageSource} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.content}>{content}</Text>
    </View>
  </TouchableOpacity>
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
    width: 30,
    height: 30,
    resizeMode: 'cover',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    margin: 5,
    color: 'firebrick',
  },
  content: {
    // margin: 5,
    marginBottom: 10,
    marginTop: 5,
    color: 'grey',
  },
});

export default HorizontalScrollItem;
