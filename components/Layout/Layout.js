/* Layout component */

import { SafeAreaView, View } from "react-native";
import Header from "../Header/Header";

const Layout = ({ children }) => {
  return (
    <SafeAreaView>
      <Header />
      <View>{children}</View>
    </SafeAreaView>
  );
};

export default Layout;
