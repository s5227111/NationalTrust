import {
  Image,
  ScrollView,
  Text,
  StyleSheet,
  View,
  Button,
} from "react-native";
import { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import OpenURLButton from "../components/OpenURLButton/OpenURLButton";
import MapView, { Marker } from "react-native-maps";
import Icon from "react-native-vector-icons/FontAwesome";

// pegar a key do Weather API
let KEY = "4afebf9d393081ab2dab09c0c0879c16";

const Details = ({ route }) => {
  const place = route.params.place;
  const [temperature, setTemperature] = useState("");
  const [condition, setCondition] = useState("");
  const [icon, setIcon] = useState("");

  function fetchWeather(lat, lon) {
    let url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${KEY}&units=metric`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setTemperature(data.main.temp);
        setCondition(data.weather[0].main);
        setIcon(data.weather[0].icon);
      })
      .catch(function (error) {
        console.log(error.message);
        // ADD THIS THROW error
        throw error;
      });
  }
  useEffect(() => {
    async function getData() {
      try {
        await fetchWeather(place.location.latitude, place.location.longitude);
      } catch (e) {
        console.log(e);
      }
    }
    getData();
  }, []);

  return (
    <Layout>
      <ScrollView>
        <Image
          style={{ width: "100%", height: 200 }}
          source={{ uri: place.imageUrl }}
        />
        <View style={styles.boxRight}>
          <View style={styles.boxTitle}>
            <Text style={styles.title}>{place.title}</Text>
            <Text style={styles.subTitle}>{place.subTitle}</Text>
            <OpenURLButton url={place.websiteUrl}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>
                  Website <Icon name="external-link" />
                </Text>
              </View>
            </OpenURLButton>
          </View>

          <View style={styles.weather}>
            <Image
              source={{
                uri: `https://openweathermap.org/img/wn/${icon}@2x.png`,
              }}
              style={{ width: 80, height: 80 }}
            ></Image>
            <Text>{Math.round(parseFloat(temperature))} ºC</Text>
            <Text>{condition}</Text>
          </View>
        </View>

        <View style={styles.box}>
          <OpenURLButton
            url={`https://www.nationaltrust.org.uk/place-pages/${place.id}/pages/opening-times-calendar`}
          >
            <Text style={styles.buttonOpeningTimes}>
              Opening times <Icon name="external-link" />
            </Text>

            {/* {place.openingTimeStatus} */}
          </OpenURLButton>
          <Text style={styles.description}>{place.description}</Text>
          <Text style={styles.subTitle}>
            Suitability: {place.activityTagsAsCsv}
          </Text>

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
    marginBottom: 5,
  },
  map: {
    height: 200,
    width: "90%",
    borderRadius: 50,
  },
  box: {
    margin: 20,
    width: "100%",
    flexBasis: 0,
    flexGrow: 1,
    position: "relative",
  },
  boxTitle: {
    width: "70%",
  },
  subTitle: {
    fontSize: 17,
    fontWeight: "bold",
    marginBottom: 20,
    color: "grey",
  },
  description: {
    fontSize: 17,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#44463e",
  },
  button: {
    backgroundColor: "#051E23",
    padding: 8,
    marginBottom: 20,
    width: "50%",
    borderRadius: 200,
    flex: 0.3,
    display: "block",
  },
  buttonText: {
    textAlign: "center",
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
  },
  buttonOpeningTimes: {
    textAlign: "center",
    color: "grey",
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 20,
    alignSelf: "flex-start",
    textDecorationLine: "underline",
  },
  weather: {
    backgroundColor: "#00aab4",
    borderRadius: 50,
    alignItems: "center",
    textAlign: "center",
    paddingBottom: 10,
    width: "30%",
  },
  boxRight: {
    flexDirection: "row",
    width: "100%",
    flex: 1,
    padding: 20,
  },
});

export default Details;
