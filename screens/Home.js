import {
  Button,
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import Layout from "../components/Layout/Layout";
import Card from "../components/Card/Card";
import places from "../services/places";
import { useState } from "react";

const Home = ({ navigation }) => {
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
      {/* ScrollView: sessoes diferentes q preciso scrollar, mais elementos q nao cabem na tela vs 
      FlatList has better performance for Lists (pagination) */}
      <FlatList
        data={Object.values(places)}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </Layout>
  );
};

export default Home;
