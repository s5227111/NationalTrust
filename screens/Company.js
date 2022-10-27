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
import companies from "../services/company";
import { useState } from "react";

const Company = ({ navigation }) => {
  const renderItem = ({ item }) => {
    return (
      // Container clickable, button nao permite elementos. Touchable...
      <TouchableOpacity
        onPress={() => navigation.navigate("CompanyDetails", { company: item })}
        key={item.id}
      >
        <Card title={item.name} descr="" tag="NO"></Card>
      </TouchableOpacity>
    );
  };

  return (
    <Layout>
      {/* ScrollView: sessoes diferentes q preciso scrollar, mais elementos q nao cabem na tela vs 
      FlatList has better performance for Lists (pagination) */}
      <FlatList
        data={Object.values(companies)}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </Layout>
  );
};

export default Company;
