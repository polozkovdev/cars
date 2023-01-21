import React from "react";
import { Image, Text, View } from "react-native";

import { verticalScale } from "src/helpers/scaleHelper";
import { useSplashScreenHideProcess } from "src/hooks/useSplashScreenProcess";
import Button from "src/components/Button";

export type LoadingScreenProps = {
  isLoading: boolean;
  onStart: () => void;
};

export default function LoadingScreen({
  isLoading,
  onStart,
}: LoadingScreenProps) {
  useSplashScreenHideProcess();
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        alignItems: "center",
        backgroundColor: "#fff",
      }}
    >
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <>
          <Image
            resizeMode="cover"
            source={require("src/assets/images/logo.png")}
            style={{
              marginTop: verticalScale(127),
              width: verticalScale(140),
              height: verticalScale(140),
            }}
          />
          <Text
            style={{
              marginTop: verticalScale(40),
              fontSize: verticalScale(32),
              lineHeight: verticalScale(40),
              fontWeight: "bold",
              fontFamily: "Roboto_700Bold",
              color: "#000",
            }}
          >
            The Ride
          </Text>
          <Text
            style={{
              marginTop: verticalScale(10),
              fontSize: verticalScale(20),
              lineHeight: verticalScale(40),
              fontFamily: "Roboto_400Regular",
              color: "#000",
            }}
          >
            Car Trip Cost Counter
          </Text>
          <View
            style={{
              position: "absolute",
              bottom: verticalScale(160),
              width: verticalScale(150),
              height: verticalScale(50),
            }}
          >
            <Button handler={() => onStart()} text="START" />
          </View>
          <Image
            resizeMode="contain"
            source={require("src/assets/images/hch.png")}
            style={{
              position: "absolute",
              bottom: verticalScale(63),
              width: verticalScale(55),
              height: verticalScale(35),
            }}
          />
        </>
      )}
    </View>
  );
}
