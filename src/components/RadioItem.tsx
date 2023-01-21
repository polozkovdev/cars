import React from "react";
import { verticalScale } from "src/helpers/scaleHelper";
import { TouchableOpacity, Text, View } from "react-native";

interface IRadioItemProps {
  label: string;
  isActive: boolean;
  onSelect: () => void;
}

export const RadioItem: React.FC<IRadioItemProps> = ({
  label,
  isActive,
  onSelect,
}) => {
  return (
    <TouchableOpacity
      style={{
        height: verticalScale(50),
        alignItems: "center",
        justifyContent: "space-between",
      }}
      onPress={() => onSelect()}
    >
      <View
        style={{
          height: verticalScale(20),
          width: verticalScale(20),
          borderRadius: verticalScale(10),
          borderWidth: verticalScale(2),
          borderColor: isActive ? "#00C3AA" : "#CCCCCC",
          backgroundColor: "#FFFFFF",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {isActive && (
          <View
            style={{
              height: verticalScale(8),
              width: verticalScale(8),
              borderRadius: verticalScale(4),
              backgroundColor: "#00C3AA",
            }}
          />
        )}
      </View>
      <Text
        style={{
          color: "#000",
          fontFamily: "Roboto_500Medium",
          marginTop: verticalScale(20),
          fontSize: verticalScale(24),
          lineHeight: verticalScale(28),
        }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};
