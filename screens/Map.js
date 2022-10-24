import { Button, View, Text, Dimensions, StyleSheet } from "react-native";
import Layout from "../components/Layout/Layout";
import MapView, { Marker } from "react-native-maps";

export default function Map({ navigation }) {
  return (
    <Layout>
      <MapView
        initialRegion={{
          latitude: 50.719391,
          longitude: -1.98114,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        style={styles.map}
      >
        <Marker
          title="map title test"
          description="map descr test"
          coordinate={{ latitude: 50.719391, longitude: -1.98114 }}
        />
      </MapView>
    </Layout>
  );
}

const styles = StyleSheet.create({
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
