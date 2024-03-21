import React, { useState } from "react";
import {
  Modal,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  ScrollView,
  Dimensions,
} from "react-native";

const { height } = Dimensions.get("window");

const CarAvailabilityModel = ({ isVisible, onClose, onSave }) => {
  const [selectedDays, setSelectedDays] = useState([]);

  const handleDaySelection = (day) => {
    if (selectedDays.includes(day)) {
      setSelectedDays(
        selectedDays.filter((selectedDay) => selectedDay !== day)
      );
    } else {
      setSelectedDays([...selectedDays, day]);
    }
  };

  const handleSave = () => {
    onSave(selectedDays);
    setSelectedDays([]);
    onClose();
  };

  return (
    <Modal visible={isVisible} animationType="slide" transparent={true}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.headerText}>Select Available Days</Text>
          <ScrollView
            contentContainerStyle={styles.daysScrollView}
            showsVerticalScrollIndicator={false}
          >
            <View style={styles.daysContainer}>
              {[...Array(365)].map((_, index) => (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.dayButton,
                    selectedDays.includes(index + 1) &&
                      styles.selectedDayButton,
                  ]}
                  onPress={() => handleDaySelection(index + 1)}
                >
                  <Text>{index + 1}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
          <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
            <Text style={styles.saveButtonText}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    borderRadius: 10,
    width: "80%",
    maxHeight: height * 0.8, // Adjusting the modal height
    alignItems: "center",
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
  daysScrollView: {
    flexGrow: 1,
    alignItems: "center",
  },
  daysContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginBottom: 20,
  },
  dayButton: {
    borderWidth: 1,
    borderColor: "black",
    padding: 10,
    margin: 5,
    borderRadius: 5,
  },
  selectedDayButton: {
    backgroundColor: "lightblue",
  },
  saveButton: {
    padding: 10,
    backgroundColor: "#fc6f03",
    borderRadius: 5,
    marginBottom: 20,
  },
  saveButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default CarAvailabilityModel;
