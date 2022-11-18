import { Text, Dimensions, StyleSheet, TouchableOpacity } from "react-native";
import MapView, { Marker, Callout } from "react-native-maps";
import Layout from "../components/Layout/Layout";
import places from "../services/places";

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
        {Object.values(places).map((place) => (
          <Marker
            key={place.id}
            title={place.title}
            description={place.description}
            coordinate={{
              latitude: Number(place.location.latitude),
              longitude: Number(place.location.longitude),
            }}
          >
            <Callout tooltip={false}>
              <TouchableOpacity
                onPress={() => navigation.navigate("Details", { place })}
              >
                <Text>{place.title}</Text>
                <Text>{place.description}</Text>
              </TouchableOpacity>
            </Callout>
          </Marker>
        ))}
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
