import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";
import Layout from "../components/Layout/Layout";
import companies from "../services/company";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Company = ({ navigation }) => {
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate("CompanyDetails", { company: item })}
        key={item.id}
      >
        <View style={styles.itemList}>
          <MaterialCommunityIcons
            name="arrow-right-thin"
            size={30}
            color={"#22404c"}
            style={styles.icon}
          />
          <Text style={styles.itemListText}>{item.name}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <Layout>
      <FlatList
        data={Object.values(companies)}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </Layout>
  );
};

const styles = StyleSheet.create({
  itemList: {
    padding: 30,
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    flexDirection: "row",
    justifyContent: "left",
    alignItems: "left",
  },
  itemListText: {
    fontSize: 20,
  },
  icon: {
    marginRight: 15,
  },
});

export default Company;
