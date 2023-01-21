import React, { useState } from "react";
import { Text, TextInput, View } from "react-native";
import { verticalScale } from "src/helpers/scaleHelper";
import { observer } from "mobx-react-lite";
import { coreStore, ISettings } from "src/store";

interface IInputProps {
  label: string;
  type: string;
  value: number;
  prefix?: string;

  onChange?(props: ISettings): void;
}

const Input: React.FC<IInputProps> = ({
  label,
  type,
  value,
  onChange,
  prefix = "",
}) => {
  const [text, setText] = useState(value);
  const onChanged = (text: string) => {
    let newText = "";
    let numbers = "0123456789,.";

    for (let i = 0; i < text.length; i++) {
      if (numbers.indexOf(text[i]) > -1) {
        newText = newText + text[i];
      } else {
        alert("please enter numbers only");
      }
    }
    setText(+newText);
    coreStore.settings.updateSettings({
      ...coreStore.settings.getSet,
      [type]: newText,
    });
  };
  return (
    <View>
      <Text
        style={{
          color: "#000",
          textAlign: "center",
          marginBottom: verticalScale(10),
          fontSize: verticalScale(18),
          lineHeight: verticalScale(24),
        }}
      >
        {label}
      </Text>
      <TextInput
        style={{
          width: verticalScale(85),
          height: verticalScale(40),
          fontSize: verticalScale(24),
          borderBottomWidth: verticalScale(1),
          borderBottomColor: "#D1D1D1",
          color: "#00C3AA",
          textAlign: "center",
        }}
        keyboardType="numeric"
        onChangeText={(text) => onChanged(text)}
        value={prefix + text}
        maxLength={10}
      />
    </View>
  );
};

export default observer(Input);
