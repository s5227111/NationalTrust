import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import Map from "./screens/Map";

const Stack = createNativeStackNavigator();
const header = {
  headerTitle: (props) => (
    <Image style={styles.logo} source={require("assets/logo.png")} />
  ),
  headerStyle: {
    backgroundColor: "#22404c",
  },
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={header} name="Home" component={Home} />
        <Stack.Screen name="Map" component={Map} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    height: 50,
    width: 150,
  },
  header: {
    backgroundColor: "#22404c",
    width: "100%",
    justifyContent: "center",
    height: 110,
    paddingTop: 50,
  },
  centerLogo: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
});
