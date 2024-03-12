import React, { useState } from "react";
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  ScrollView,
  FlatList,
  TextInput,
  StyleSheet,
} from "react-native";

const carModelsData = [
  {
    year: "2020",
    brands: [
      {
        name: "Toyota",
        model: [
          {
            name: "Corolla",
            varient: [
              {
                name: "1.5t",
              },
            ],
          },
        ],
      },
    ],
  },

  // Add more years, brands, and variants as needed
];

const CarModelPicker = ({
  isVisible,
  onClose,
  onSelectYear,
  onSelectBrand,
  onSelectVariant,
  onSelectModel,
}) => {
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [selectedVariant, setSelectedVariant] = useState("");

  const handleYearSelect = (year) => {
    setSelectedYear(year);
    setSelectedBrand("");
    setSelectedVariant("");
  };

  const handleBrandSelect = (brand) => {
    setSelectedBrand(brand);
  };
  const handleModelSelect = (model) => {
    setSelectedModel(model);
    setSelectedVariant("");
  };
  const handleVariantSelect = (variant) => {
    setSelectedVariant(variant);
    onSelectYear(selectedYear);
    onSelectBrand(selectedBrand);
    onSelectModel(selectedModel);
    onSelectVariant(variant);
    onClose();
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          {/* <ScrollView> */}
          {selectedYear === "" && (
            <>
              <Text style={styles.headerText}>Select Year</Text>
              <FlatList
                data={carModelsData}
                keyExtractor={(item) => item.year}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={styles.itemButton}
                    onPress={() => handleYearSelect(item.year)}
                  >
                    <Text>{item.year}</Text>
                  </TouchableOpacity>
                )}
              />
            </>
          )}
          {selectedYear !== "" && selectedBrand === "" && (
            <>
              <Text style={styles.headerText}>Select Brand</Text>
              <FlatList
                data={
                  carModelsData.find((data) => data.year === selectedYear)
                    .brands
                }
                keyExtractor={(item) => item.name}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={styles.itemButton}
                    onPress={() => handleBrandSelect(item.name)}
                  >
                    <Text>{item.name}</Text>
                  </TouchableOpacity>
                )}
              />
            </>
          )}

          {selectedBrand !== "" && selectedModel === "" && (
            <>
              <Text style={styles.headerText}>Select Model</Text>
              <FlatList
                data={
                  carModelsData
                    .find((data) => data.year === selectedYear)
                    .brands.find(
                      (brandData) => brandData.name === selectedBrand
                    )?.model || []
                } // Add a check for undefined before accessing models
                keyExtractor={(item) => item.name}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={styles.itemButton}
                    onPress={() => handleModelSelect(item.name)}
                  >
                    <Text>{item.name}</Text>
                  </TouchableOpacity>
                )}
              />
            </>
          )}

          {selectedModel !== "" && (
            <>
              <Text style={styles.headerText}>Select Variant</Text>
              <FlatList
                data={
                  carModelsData
                    .find((data) => data.year === selectedYear)
                    .brands.find(
                      (brandData) => brandData.name === selectedBrand
                    )
                    ?.model.find(
                      (modelData) => modelData.name === selectedModel
                    )?.varient || []
                }
                keyExtractor={(item) => item.name}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={styles.itemButton}
                    onPress={() => handleVariantSelect(item.name)}
                  >
                    <Text>{item.name}</Text>
                  </TouchableOpacity>
                )}
              />
            </>
          )}
          {/* </ScrollView> */}
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
    justifyContent: "flex-end",
  },
  modalContent: {
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    height: 350,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  itemButton: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  closeButton: {
    alignItems: "center",
    marginTop: 10,
  },
});

export default CarModelPicker;
