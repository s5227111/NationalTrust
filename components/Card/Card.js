const { View, Image, StyleSheet, Text, Dimensions } = require("react-native");
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Card = ({ children, title, descr }) => {
  return (
    <View style={styles.card}>
      {children}
      <View style={styles.textBlock}>
        <Text style={styles.title}>{title}</Text>

        <Text style={styles.descr}>{descr}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
  },
  textBlock: {
    padding: 20,
  },
  title: {
    fontWeight: "bold",
    fontSize: 25,
    color: "black",
  },
  descr: {
    fontSize: 15,
    color: "#ccc",
    marginTop: 10,
  },
});

export default Card;
