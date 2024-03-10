import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; // Importing AntDesign icons

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  return (
    <View style={styles.container}>
      <AntDesign name="search1" size={20} color="gray" style={styles.searchIcon} />
      <TextInput
        style={styles.input}
        placeholder="Search..."
        onChangeText={setSearchQuery}
        value={searchQuery}
        onSubmitEditing={handleSearch}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 5,
    borderColor : '#fc6f03',
    borderWidth: 1
  },
  searchIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 16,
    color: 'black',
  },
});

export default SearchBar;
