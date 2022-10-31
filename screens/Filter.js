import { useEffect, useState } from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
  Text,
} from "react-native";
import { RadioButton, TextInput } from "react-native-paper";
import Card from "../components/Card/Card";
import Layout from "../components/Layout/Layout";
import places from "../services/places";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { AntDesign } from "@expo/vector-icons";

const FilterScreen = ({ navigation }) => {
  const [filter, setFilter] = useState("");
  const [results, setResults] = useState([]);
  const [petFriendly, setPetFriendly] = useState(false);

  const handlePetFriendly = () => {
    if (petFriendly === false) {
      setPetFriendly(true);
    } else {
      setPetFriendly(false);
    }
  };

  useEffect(() => {
    if (filter !== "") {
      let content = Object.values(places);
      let items = content.filter((value) => value.title.includes(filter));
      setResults(items);
    } else {
      setResults([]);
    }
  }, [filter]);

  const renderItem = ({ item }) => {
    return (
      // Container clickable, button nao permite elementos. Touchable...
      <TouchableOpacity
        onPress={() => navigation.navigate("Details", { place: item })}
        key={item.id}
      >
        <Card title={item.title} descr={item.description}>
          <Image
            style={{ width: "100%", height: 200 }}
            source={{ uri: item.imageUrl }}
          />
        </Card>
      </TouchableOpacity>
    );
  };

  return (
    <Layout>
      <View style={styles.inputSection}>
        <TextInput
          value={filter}
          onChangeText={setFilter}
          style={styles.input}
        />

        <MaterialCommunityIcons
          name="magnify"
          size={30}
          color={"#22404c"}
          style={styles.icon}
        />
      </View>

      <TouchableOpacity onPress={handlePetFriendly}>
        <Text>
          Pet Friendly
          <RadioButton
            value={petFriendly}
            label="Pet Friendly"
            status={petFriendly === true ? "checked" : "unchecked"}
          />
        </Text>
      </TouchableOpacity>

      <View>
        <FlatList
          data={results}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </Layout>
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
});

export default FilterScreen;
