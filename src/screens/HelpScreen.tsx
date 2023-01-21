import React from "react";
import { Text, View } from "react-native";
import Title from "src/components/Title";
import { HELP_LIST } from "src/assets/constants";
import { verticalScale } from "src/helpers/scaleHelper";

const HelpScreen = () => {
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        alignItems: "center",
        backgroundColor: "#fff",
      }}
    >
      <Title text="Help" />
      <View
        style={{
          marginLeft: verticalScale(30),
          marginRight: verticalScale(30),
        }}
      >
        <Text
          style={{
            marginTop: verticalScale(30),
            marginBottom: verticalScale(10),
            fontSize: verticalScale(20),
            lineHeight: verticalScale(30),
            textAlign: "center",
            fontFamily: "Roboto_500Medium",
            color: "#000",
          }}
        >
          Find out how much your car trip really cost
        </Text>
        <View>
          {HELP_LIST.map((i, index) => {
            return (
              <Text
                key={i}
                style={{
                  marginTop: verticalScale(14),
                  fontSize: verticalScale(14),
                  lineHeight: verticalScale(30),
                  fontFamily: "Roboto_500Medium",
                  color: "#000",
                }}
              >
                {index + 1}. {i}
              </Text>
            );
          })}
        </View>
        <Text
          style={{
            fontFamily: "Roboto_400Regular",
            fontSize: verticalScale(12),
            lineHeight: verticalScale(14),
            marginTop: verticalScale(4),
            color: "black",
          }}
        >
          Today
        </Text>
      </View>
    </View>
  );
};

export default HelpScreen;
