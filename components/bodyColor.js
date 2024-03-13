import React from 'react';
import { View, Text, Modal, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

const bodyColors = [
    { name: 'White', color: '#FFFFFF' },
    { name: 'Black', color: '#000000' },
    { name: 'Silver', color: '#C0C0C0' },
    { name: 'Black', color: '#000000' },
    { name: 'Grey', color: ' #808080' },
    { name: 'blue', color: '#4169E1' },
    { name: 'Green', color: '#008000' },
    { name: 'red', color: '#FFFF00' },
    { name: 'gold', color: '#A52A2A' },
    { name: 'Orange', color: '#FFA500' },

    { name: 'White', color: '#FFFFFF' },
    { name: 'Black', color: '#000000' },
    { name: 'Silver', color: '#C0C0C0' },
    { name: 'Gray', color: '#808080' },
    { name: 'Blue', color: '#0000FF' },
    { name: 'Red', color: '#FF0000' },
    { name: 'Green', color: '#008000' },
    { name: 'Yellow', color: '#FFFF00' },
    { name: 'Brown', color: '#A52A2A' },
    { name: 'Orange', color: '#FFA500' },
    // Add more colors as needed
  ];
  

const BodyColorPicker = ({ isVisible, onClose, onSelectColor }) => {
  const handleColorSelect = (color) => {
    onSelectColor(color);
    onClose();
  };

  const renderColorItem = ({ item }) => (
    <TouchableOpacity
      style={[styles.colorItem, { backgroundColor: item.color }]}
      onPress={() => handleColorSelect(item.name)}
    >
      <Text style={styles.colorText}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <FlatList
            data={bodyColors}
            numColumns={6}
            renderItem={renderColorItem}
            keyExtractor={(item) => item.name}
          />
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    paddingBottom: 50,
  },
  colorItem: {
    width: 50, // Adjusted for smaller circles
    height: 50, // Adjusted for smaller circles
    borderRadius: 25, // Half of the width and height to create a circular shape
    margin: 5, // Adjusted to create spacing between colors
    justifyContent: 'center',
    alignItems: 'center',
  },
  colorText: {
    color: 'white',
  },
  closeButton: {
    alignItems: 'center',
    marginTop: 10,
  },
});

export default BodyColorPicker;
