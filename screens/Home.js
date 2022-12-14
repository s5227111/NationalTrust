import {
  View,
  Image,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";

import { TextInput } from "react-native-paper";
import { useState } from "react";

import Layout from "../components/Layout/Layout";
import Card from "../components/Card/Card";
import FilterModal from "../components/Filter";
import places from "../services/places";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Home = ({ navigation }) => {
  const [filter, setFilter] = useState("");
  const [petFriendly, setPetFriendly] = useState(false);
  const [activitiesItem, setActivitiesItem] = useState([]);
  const [isFilterModalVisible, setIsFilterModalVisible] = useState(false);

  const handleOpenFilterModal = () => {
    setIsFilterModalVisible(true);
  };

  const renderItem = ({ item }) => {
    if (item.empty) {
      return <View style={{ opacity: 0 }} />;
    }
    return (
      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate("Details", { place: item })}
        key={item.id}
      >
        <Card
          title={item.title}
          descr={item.description}
          lat={item.location.latitude}
          long={item.location.longitude}
        >
          <Image style={styles.cardImage} source={{ uri: item.imageUrl }} />
        </Card>
      </TouchableOpacity>
    );
  };

  // Handle filter modal
  const filterItems = () => {
    const placesList = Object.values(places);
    const filterByTitle = placesList.filter((element) =>
      element.title.toLowerCase().includes(filter.toLowerCase())
    );
    const filterByPetFriendly = placesList.filter((itemPlace) =>
      petFriendly ? itemPlace.petFriendly === true : itemPlace
    );

    const filterByTags = placesList.filter((item) => {
      for (let i = 0; i < activitiesItem.length; i++) {
        if (
          item.activityTagsAsCsv &&
          item.activityTagsAsCsv.search(activitiesItem[i]) !== -1
        ) {
          return item;
        }
      }
    });

    if (activitiesItem.length) {
      return filterByTags;
    } else if (petFriendly) {
      return filterByPetFriendly;
    } else if (filter) {
      return filterByTitle;
    } else {
      return placesList;
    }
  };

  const onApplyFilter = (petFriendly, activitiesItem) => {
    setPetFriendly(petFriendly);
    setActivitiesItem(activitiesItem);
    setIsFilterModalVisible(false);
  };

  function createRows(data, columns) {
    const rows = Math.floor(data.length / columns);
    let lastRowElements = data.length - rows * columns;
    while (lastRowElements !== columns) {
      data.push({
        id: `empty-${lastRowElements}`,
        name: `empty-${lastRowElements}`,
        empty: true,
      });
      lastRowElements += 1;
    }
    return data;
  }

  return (
    <View style={{ marginBottom: 235 }}>
      <Layout>
        <FilterModal
          isFilterModalVisible={isFilterModalVisible}
          setIsFilterModalVisible={setIsFilterModalVisible}
          onApplyFilter={(petFriendly, activitiesItem) =>
            onApplyFilter(petFriendly, activitiesItem)
          }
        />
        <View style={styles.inputSection}>
          <TextInput
            value={filter}
            onChangeText={setFilter}
            style={styles.input}
            placeholder="Type the place name"
            theme={{
              colors: {
                primary: "#8A8D8F",
                underlineColor: "transparent",
              },
            }}
          />
          <TouchableOpacity onPress={handleOpenFilterModal}>
            <MaterialCommunityIcons
              name="filter"
              size={30}
              color={"#22404c"}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>

        <FlatList
          numColumns="2"
          data={createRows(filterItems(), 2)}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </Layout>
    </View>
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
    height: 50,
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
    height: 47,
    backgroundColor: "white",
  },
  card: {
    width: "50%",
    padding: 10,
  },
  cardImage: {
    width: "100%",
    height: 100,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});

export default Home;
