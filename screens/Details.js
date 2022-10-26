import { ScrollView, Text } from "react-native";
import Layout from "../components/Layout/Layout";

const Details = ({ route }) => {
  return (
    <Layout>
      <ScrollView>
        <Text>Details</Text>
        <Text>{route.params.place.id}</Text>
      </ScrollView>
    </Layout>
  );
};

export default Details;
