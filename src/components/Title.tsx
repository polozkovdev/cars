import React from "react";
import { Text } from "react-native";
import { verticalScale } from "src/helpers/scaleHelper";

interface ITitleProps {
  text: string;
}

const Title: React.FC<ITitleProps> = ({ text }) => {
  return (
    <Text
      style={{
        textAlign: "center",
        // marginTop: verticalScale(10),
        fontSize: verticalScale(32),
        lineHeight: verticalScale(38),
        fontFamily: "Roboto_500Medium",
        color: "#000",
      }}
    >
      {text}
    </Text>
  );
};

export default Title;
