import { Image, ScrollView, Text, StyleSheet, View } from "react-native";
import Layout from "../components/Layout/Layout";
import MapView, { Marker } from "react-native-maps";

const Details = ({ route }) => {
  const place = route.params.place;
  return (
    <Layout>
      <ScrollView>
        <Image
          style={{ width: "100%", height: 200 }}
          source={{ uri: place.imageUrl }}
        />
        <View>
          <Text style={styles.title}>{place.title}</Text>
          <Text>{place.imageDescription}</Text>
          <Text>{place.subTitle}</Text>
          <Text>{place.openingTimeStatus}</Text>
          <Text>{place.description}</Text>
          <Text>{place.websiteUrl}</Text>
          <Text>{place.type}</Text>
          <Text>{place.activityTagsAsCsv}</Text>
          {/* location/ mapinha (lat, long) */}
          <MapView
            initialRegion={{
              latitude: place.location.latitude,
              longitude: place.location.longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
            style={styles.map}
          >
            <Marker
              title={place.title}
              description={place.subTitle}
              coordinate={place.location}
            />
          </MapView>
        </View>
      </ScrollView>
    </Layout>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
  },
  map: {
    height: 200,
    width: "100%",
  },
});

export default Details;
