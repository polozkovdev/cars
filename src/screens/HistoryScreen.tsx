import React from "react";
import { ScrollView, View, Text } from "react-native";
import Title from "src/components/Title";
import { verticalScale } from "src/helpers/scaleHelper";

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
            flexDirection: "column",
            justifyContent: "center",
            height: "100%",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: verticalScale(18),
              lineHeight: verticalScale(32),
              fontFamily: "Roboto_400Regular",
              color: "#000",
            }}
          >
            You don't have a history yet
          </Text>
          <Text
            style={{
              fontSize: verticalScale(18),
              lineHeight: verticalScale(32),
              fontFamily: "Roboto_400Regular",
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
