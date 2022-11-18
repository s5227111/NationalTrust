import { Image, ScrollView, Text, StyleSheet, View } from "react-native";
import Layout from "../components/Layout/Layout";
import OpenURLButton from "../components/OpenURLButton/OpenURLButton";
import Icon from "react-native-vector-icons/FontAwesome";

const CompanyDetails = ({ route }) => {
  const { company } = route.params;

  return (
    <Layout>
      <ScrollView>
        <Image
          style={{ width: "100%", height: 200 }}
          source={{ uri: company.image }}
        />
        <View style={styles.box}>
          <View style={styles.containerTitle}>
            <Text style={styles.title}>{company.title}</Text>
          </View>
          <Text style={styles.description}>{company.description}</Text>

          <OpenURLButton url="https://www.nationaltrust.org.uk/">
            <View style={styles.button}>
              <Text style={styles.buttonText}>
                Website <Icon name="external-link" />
              </Text>
            </View>
          </OpenURLButton>
        </View>
      </ScrollView>
    </Layout>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#e6f1e8",
  },
  containerTitle: {
    backgroundColor: "#44463e",
    padding: 20,
  },
  box: {
    margin: 20,
  },
  description: {
    fontSize: 17,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 20,
    color: "grey",
  },
  button: {
    backgroundColor: "#051E23",
    padding: 15,
    marginBottom: 20,
    width: "50%",
    marginLeft: "25%",
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
});

export default CompanyDetails;
