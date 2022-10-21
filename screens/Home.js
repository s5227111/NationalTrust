import { Button, View, Text } from "react-native";

const Home = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button title="Go to Maps" onPress={() => navigation.navigate("Map")} />
    </View>
  );
};

export default Home;
