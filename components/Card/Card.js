import * as Location from "expo-location";
import React, { useState, useEffect } from "react";

const { View, Image, StyleSheet, Text, Dimensions } = require("react-native");
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Card = ({ children, title, descr, tag, lat, long }) => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  function getDistanceFromLatLonInKm(position1, position2) {
    "use strict";
    var deg2rad = function (deg) {
        return deg * (Math.PI / 180);
      },
      R = 6371,
      dLat = deg2rad(position2.lat - position1.lat),
      dLng = deg2rad(position2.lng - position1.lng),
      a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(position1.lat)) *
          Math.cos(deg2rad(position1.lat)) *
          Math.sin(dLng / 2) *
          Math.sin(dLng / 2),
      c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var aux = (R * c * 1000).toFixed();
    var result = aux * 0.000621371192;
    return Math.ceil(result);
  }

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    var distance = getDistanceFromLatLonInKm(
      { lat: location.coords.latitude, lng: location.coords.longitude },
      { lat: lat, lng: long }
    );
    text = distance + "mi";
  }

  return (
    <View style={styles.card}>
      {tag !== "NO" && (
        <View style={styles.milesContainer}>
          <Text style={styles.milesText}>{text}</Text>
        </View>
      )}

      {children}
      <View style={styles.textBlock}>
        <Text style={styles.title}>{title}</Text>
        {/* <Text style={styles.descr}>{descr}</Text> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    position: "relative",
    backgroundColor: "white",
    borderColor: "black",
    borderWidth: 1,
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1,
    },
    width: "100%",
    flexBasis: 0,
    flexGrow: 1,
    borderRadius: 20,
  },
  textBlock: {
    padding: 20,
  },
  title: {
    // fontWeight: "bold",
    fontSize: 15,
    color: "black",
    fontFamily: "National-Trust",
    fontWeight: 700,
  },
  descr: {
    fontSize: 15,
    color: "#ccc",
    marginTop: 10,
  },
  milesContainer: {
    zIndex: 5,
    position: "absolute",
    top: 10,
    left: 10,
    backgroundColor: "#e6f1e8",
    padding: 5,
    borderRadius: 20,
  },
  milesText: {
    color: "#44463e",
  },
});

export default Card;
