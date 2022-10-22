const { View, Image, StyleSheet, Text } = require("react-native");

{
  /* Header component */
}
const Header = () => {
  return <Image style={styles.logo} source={require("../assets/logo.png")} />;
};

const styles = StyleSheet.create({
  logo: {
    height: 50,
    width: 150,
  },
  header: {
    backgroundColor: "#22404c",
    width: "100%",
    justifyContent: "center",
    height: 110,
    paddingTop: 50,
  },

  centerLogo: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
});

export default Header;
