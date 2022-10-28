import { useEffect, useState } from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import { TextInput } from "react-native-paper";
import Card from "../components/Card/Card";
import Layout from "../components/Layout/Layout";
import places from "../services/places";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const FilterScreen = ({ navigation }) => {
  const [filter, setFilter] = useState("");
  const [results, setResults] = useState([]);

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
      <View>
        <SafeAreaView>
          {/* VERIFY MAGNIFY ICON FOR iOS */}
          <MaterialCommunityIcons name="magnify" color="black" size={26} />
          <TextInput
            inlineImageLeft="search_icon"
            value={filter}
            onChangeText={setFilter}
          />
        </SafeAreaView>
        <FlatList
          data={results}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </Layout>
  );
};

export default FilterScreen;
