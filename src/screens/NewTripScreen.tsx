import React from "react";
import { ImageBackground, Text, View } from "react-native";
import Title from "src/components/Title";
import { verticalScale } from "src/helpers/scaleHelper";
import Button from "src/components/Button";
import { coreStore } from "src/store";
import { TRIP_STEPS } from "src/assets/constants";
import { observer } from "mobx-react-lite";

const NewTripScreen = () => {
  const onChangeHandler = () => {
    const trip = () => {
      switch (coreStore.trip.getTr) {
        case TRIP_STEPS.start:
          return TRIP_STEPS.continue;
        case TRIP_STEPS.continue:
          return TRIP_STEPS.finish;
        case TRIP_STEPS.finish:
          return TRIP_STEPS.result;
        case TRIP_STEPS.result:
        default:
          return TRIP_STEPS.start;
      }
    };
    coreStore.trip.updateTrip(trip());
  };
  const getDataByTrip = () => {
    switch (coreStore.trip.getTr) {
      case TRIP_STEPS.continue:
        return {
          title: "Trip",
          button: "FINISH",
        };
      case TRIP_STEPS.finish:
        return {
          title: "Share The Cost",
          button: "SHARE",
        };
      case TRIP_STEPS.result:
        return {
          title: "Per Person",
          button: "NEW TRIP",
        };
      case TRIP_STEPS.start:
      default:
        return { title: "New Trip", button: "START" };
    }
  };
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        alignItems: "center",
        backgroundColor: "#fff",
      }}
    >
      <Title text={getDataByTrip().title} />
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
        style={{ marginTop: "auto", marginBottom: verticalScale(100) }}
        text={getDataByTrip().button}
        handler={onChangeHandler}
      />
    </View>
  );
};

export default observer(NewTripScreen);
