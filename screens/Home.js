import { Button, View, Text, ScrollView, Image } from "react-native";
import { Card } from "react-native-paper";
import Layout from "../components/Layout/Layout";

const Home = ({ navigation }) => {
  return (
    <Layout>
      <ScrollView>
        <View>
          <Card title="Titulo" descr="Description">
            <Image
              style={{ width: "100%", height: 200 }}
              source={{ uri: "https://picsum.photos/300/600?random=1" }}
            />
          </Card>
        </View>

        <View>
          <View>
            <Card title="Titulo" descr="Description">
              <Image
                style={{ width: "100%", height: 200 }}
                source={{ uri: "https://picsum.photos/300/600?random=1" }}
              />
            </Card>
          </View>
          <View>
            <Card title="Titulo" descr="Description">
              <Image
                style={{ width: "100%", height: 200 }}
                source={{ uri: "https://picsum.photos/300/600?random=1" }}
              />
            </Card>
          </View>
        </View>
      </ScrollView>
    </Layout>
  );
};

export default Home;
