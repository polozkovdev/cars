import React from "react";
import { verticalScale } from "../helpers/scaleHelper";
import { Text, TouchableOpacity, ViewStyle } from "react-native";

interface IButtonProps {
  text: string;
  style?: ViewStyle;
  handler: () => void;
}

const Button: React.FC<IButtonProps> = ({ text, handler, style = {} }) => {
  return (
    <TouchableOpacity
      style={{
        width: verticalScale(146),
        height: verticalScale(52),
        borderRadius: verticalScale(28),
        backgroundColor: "#000",
        alignItems: "center",
        zIndex: 1,
        ...style,
      }}
      onPress={handler}
    >
      <Text
        style={{
          lineHeight: verticalScale(50),
          fontSize: verticalScale(16),
          fontFamily: "Roboto_500Medium",
          color: "#fff",
        }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
