/* Layout component */

import { SafeAreaView, View } from "react-native";
import Header from "../Header/Header";

const Layout = ({ children }) => {
  return (
    <SafeAreaView>
      <Header />
      <View style={{ marginBottom: 125 }}>{children}</View>
    </SafeAreaView>
  );
};

export default Layout;
