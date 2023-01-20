import React from "react";
import { View } from "react-native";
import Title from "../components/Title";

const NewTripScreen = () => {
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        alignItems: "center",
        backgroundColor: "#fff",
      }}
    >
      <Title text="New Trip" />
    </View>
  );
};

export default NewTripScreen;
