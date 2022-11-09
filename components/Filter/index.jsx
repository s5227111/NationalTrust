import { useEffect, useState } from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
  Text,
  Modal,
} from "react-native";
// Imports Design Framework
import { RadioButton, TextInput } from "react-native-paper";
import Card from "../Card/Card";
import places from "../../services/places";
import activities from "../../services/activities";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const FilterModal = ({
  isFilterModalVisible,
  setIsFilterModalVisible,
  onApplyFilter,
}) => {
  const [filter, setFilter] = useState("");
  // const [results, setResults] = useState([]);
  const [petFriendly, setPetFriendly] = useState(false);
  const [activitiesItem, setActivitiesItem] = useState([]);

  const handlePetFriendly = () => {
    if (petFriendly === false) {
      setPetFriendly(true);
    } else {
      setPetFriendly(false);
    }
  };

  // activities
  const selectItem = (item) => {
    if (activitiesItem.includes(item)) {
      const filterActivities = activitiesItem.filter((e) => e !== item);
      setActivitiesItem(filterActivities);
    } else {
      setActivitiesItem([...activitiesItem, item]);
    }
  };

  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={isFilterModalVisible}
      onRequestClose={() => {
        setIsFilterModalVisible(false);
      }}
    >
      {/* pet friendly */}
      <View style={styles.modalView}>
        <TouchableOpacity
          onPress={() => setIsFilterModalVisible(false)}
          style={styles.btnExit}
        >
          <Text style={styles.btnExitText}>X</Text>
        </TouchableOpacity>
        <Text style={styles.heading}>Filter places</Text>
        <Text style={styles.subheading}>Suitability:</Text>
        <TouchableOpacity onPress={handlePetFriendly} style={styles.btnPet}>
          <Text>Pet Friendly</Text>
          <RadioButton
            value={petFriendly}
            label="Pet Friendly"
            status={petFriendly === true ? "checked" : "unchecked"}
            style={styles.suitabilityText}
          />
        </TouchableOpacity>

        {/* activities */}
        <View style={styles.viewActivities}>
          <Text style={styles.subheading}>Activities:</Text>
          {activities.map((item) => (
            <TouchableOpacity
              key={item}
              onPress={() => selectItem(item)}
              style={styles.btnActivity}
            >
              <Text>{item}</Text>
              <RadioButton
                value={item}
                label={item}
                status={activitiesItem.includes(item) ? "checked" : "unchecked"}
              />
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.viewBtnApply}>
          {/* TouchableOpacity eh mais customizavel */}
          <TouchableOpacity
            onPress={() => onApplyFilter(petFriendly, activitiesItem)}
            style={styles.btnApply}
          >
            <Text style={styles.btnApplyText}>APPLY</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  icon: {
    marginRight: 15,
    marginLeft: 15,
  },
  inputSection: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    paddingHorizontal: 0,
    height: 67,
    width: "100%",
    borderWidth: 2,
    borderColor: "grey",
  },
  input: {
    flex: 1,
    fontSize: 20,
    paddingTop: 0,
    paddingRight: 10,
    paddingBottom: 0,
    backgroundColor: "white",
  },
  modalView: {
    flex: 1,
    margin: 20,
    backgroundColor: "#e1e0db",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  btnPet: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between",
  },
  btnActivity: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  viewActivities: {
    width: "100%",
  },
  heading: {
    marginTop: 40,
    marginBottom: 20,
    alignSelf: "flex-start",
    fontSize: 22,
    fontWeight: "bold",
  },
  subheading: {
    marginTop: 20,
    marginBottom: 20,
    alignSelf: "flex-start",
    fontSize: 15,
    fontWeight: "bold",
  },
  viewBtnApply: {
    flex: 1,
    justifyContent: "flex-end",
  },
  btnApply: {
    backgroundColor: "#051E23",
    padding: 15,
    borderRadius: 200,
    paddingHorizontal: 30,
  },
  btnApplyText: {
    textAlign: "center",
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
  },
  btnExit: {
    backgroundColor: "#87003c",
    padding: 10,
    borderRadius: 200,
    paddingHorizontal: 15,
    alignSelf: "flex-end",
  },
  btnExitText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  suitabilityText: {
    textDecorationStyle: "solid",
  },
});

export default FilterModal;
