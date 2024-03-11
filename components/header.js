import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar, Image } from 'react-native';

const Header = ({ title, onPressBack }) => {
    
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#fc6f03" barStyle="light-content" />
      <View style={styles.header}>
        <TouchableOpacity onPress={onPressBack} style={styles.backButton}>
          <Image source={require('../assets/back.png')} style={styles.backImage} />
        </TouchableOpacity>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fc6f03',
    paddingTop: StatusBar.currentHeight - 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  backButton: {
    position: 'absolute',
    left: 10,
    padding: 10,
  },
  backImage: {
    width: 25,
    height: 25,
    tintColor: '#fff',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    flex: 1, // To make the title take up remaining space
  },
});

export default Header;
