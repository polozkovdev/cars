import { ImageStyle, TextStyle, ViewStyle } from "react-native";
import { verticalScale } from "src/helpers/scaleHelper";

interface IStyleFlex {
  flexDirection?: string;
  alignItems?: string;
  justifyContent?: string;
}

export const styleFlex = ({
  flexDirection,
  alignItems,
  justifyContent,
}: IStyleFlex): ViewStyle | TextStyle | ImageStyle =>
  ({
    flexDirection,
    alignItems,
    justifyContent,
  } as ViewStyle | TextStyle | ImageStyle);

export const verHorCenter = {
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
} as ViewStyle | TextStyle | ImageStyle;

export const defFSF = {
  fontSize: verticalScale(18),
  lineHeight: verticalScale(32),
  fontFamily: "Roboto_400Regular",
};
