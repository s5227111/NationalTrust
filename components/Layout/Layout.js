/* Layout component */

import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Layout = ({ children }) => {
  return (
    <View style={styles.header}>
      <Header />
      {children}
      <Footer />
    </View>
  );
};
