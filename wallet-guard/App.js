import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import BottomTabs from "./src/navigation/BottomTabs/BottomTabs";

//add expo update
//add wait till load icon and font
//

export default function App() {
  return <BottomTabs />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
