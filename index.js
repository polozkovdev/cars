import "react-native-gesture-handler";
import { AppRegistry, Platform } from "react-native";
import { AppWrapper } from "./src/AppWrapper";

AppRegistry.registerComponent("main", () => AppWrapper);

if (Platform.OS === "web") {
  const rootTag =
    document.getElementById("root") || document.getElementById("main");
  AppRegistry.runApplication("main", { rootTag });
}
