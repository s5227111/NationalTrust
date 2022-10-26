import {
  Button,
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import Layout from "../components/Layout/Layout";
import Card from "../components/Card/Card";
import places from "../services/places";
import { useState } from "react";

const Home = ({ navigation }) => {
  return (
    <Layout>
      <ScrollView>
        {Object.values(places)
          .slice(0, 10)
          .map((place) => (
            <TouchableOpacity
              onPress={() => navigation.navigate("Details", { place })}
              key={place.id}
            >
              <Card title={place.title} descr={place.description}>
                <Image
                  style={{ width: "100%", height: 200 }}
                  source={{ uri: place.imageUrl }}
                />
              </Card>
            </TouchableOpacity>
          ))}
      </ScrollView>
    </Layout>
  );
};

export default Home;
