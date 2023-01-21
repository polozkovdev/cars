import React from "react";
import { ImageBackground, Text, View } from "react-native";
import Title from "src/components/Title";
import { verticalScale } from "src/helpers/scaleHelper";
import Button from "src/components/Button";

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
      <ImageBackground
        resizeMode="contain"
        style={{
          marginTop: verticalScale(80),
          width: verticalScale(268),
          height: verticalScale(268),
          alignItems: "center",
        }}
        source={require("src/assets/images/circle.png")}
      >
        <View
          style={{
            position: "absolute",
            bottom: verticalScale(167),
            width: verticalScale(150),
            height: verticalScale(50),
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontFamily: "Roboto_500Medium",
              lineHeight: verticalScale(30),
              fontSize: verticalScale(20),
            }}
          >
            SPENT
          </Text>
          <Text
            style={{
              marginTop: verticalScale(20),
              color: "#20B148",
              textAlign: "center",
              fontFamily: "Roboto_500Medium",
              lineHeight: verticalScale(36),
              fontSize: verticalScale(36),
            }}
          >
            $15,43
          </Text>
        </View>
      </ImageBackground>
      <Text
        style={{
          marginTop: verticalScale(65),
          color: "#000",
          textAlign: "center",
          fontFamily: "Roboto_500Medium",
          fontSize: verticalScale(20),
        }}
      >
        DISTANCE
      </Text>
      <Text
        style={{
          marginTop: verticalScale(23),
          color: "#000",
          textAlign: "center",
          fontFamily: "Roboto_500Medium",
          fontSize: verticalScale(36),
        }}
      >
        0 km
      </Text>
      <Button
        style={{ marginTop: "auto" }}
        text="START"
        handler={() => console.log("handler")}
      />
    </View>
  );
};

export default NewTripScreen;
