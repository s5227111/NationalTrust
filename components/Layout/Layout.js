/* Layout component */

import { View } from "react-native";
import Header from "../Header/Header";

const Layout = ({ children }) => {
  return (
    <View>
      <Header />
      {children}
    </View>
  );
};

export default Layout;
