import React from "react";
import { ScrollView, Text, View } from "react-native";
import Title from "src/components/Title";
import { defFSF, verHorCenter } from "src/helpers/styles";

const HistoryScreen = () => {
  const isEmptyHistory = true;
  return (
    <ScrollView
      style={{ width: "100%", height: "100%", backgroundColor: "#fff" }}
      contentContainerStyle={{ height: "100%" }}
    >
      <Title text="History" />
      {isEmptyHistory && (
        <View
          style={{
            height: "100%",
            ...verHorCenter,
          }}
        >
          <Text
            style={{
              ...defFSF,
              color: "#000",
            }}
          >
            You don't have a history yet
          </Text>
          <Text
            style={{
              ...defFSF,
              color: "#000",
            }}
          >
            Enter the first data
          </Text>
        </View>
      )}
    </ScrollView>
  );
};

export default HistoryScreen;
