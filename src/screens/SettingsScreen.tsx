import React, { useState } from "react";
import { Text, View } from "react-native";
import Button from "../components/Button";
import Title from "../components/Title";
import { RadioItem } from "../components/RadioItem";
import { verticalScale } from "../helpers/scaleHelper";
import Input from "../components/Input";
import { observer } from "mobx-react-lite";
import { coreStore, ISettingsStore } from "../store";

const SettingsScreen = ({ navigation }: any) => {
  const [isUSActive, setIsUSActive] = useState(false);
  const [settings, setSettings] = useState<ISettingsStore>(
    coreStore.settingsStore.getSettings
  );
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#fff",
      }}
    >
      <Title text="Settings" />
      <View
        style={{
          marginTop: verticalScale(40),
          flexDirection: "row",
          height: verticalScale(70),
          width: verticalScale(150),
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <RadioItem
          label="US"
          isActive={isUSActive}
          onSelect={() => setIsUSActive(true)}
        />
        <RadioItem
          label="EU"
          isActive={!isUSActive}
          onSelect={() => setIsUSActive(false)}
        />
      </View>
      <View style={{ width: verticalScale(305) }}>
        <Text
          style={{
            color: "#000",
            fontFamily: "Roboto_500Medium",
            textAlign: "center",
            marginTop: verticalScale(50),
            fontSize: verticalScale(18),
            lineHeight: verticalScale(34),
          }}
        >
          How many liters of fuel does your car consume per 100 km?
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: verticalScale(40),
          width: verticalScale(210),
        }}
      >
        <Input label="City" key="city" value={settings.city} />
        <Input label="Highway" key="highway" value={settings.highway} />
      </View>
      <View
        style={{
          marginTop: verticalScale(40),
        }}
      >
        <Input
          label="1 Liter Cost"
          key="cost"
          prefix="$"
          value={settings.cost}
        />
      </View>
      <Button
        style={{ marginTop: "auto" }}
        handler={() => navigation.navigate("NewTrip")}
        text="START"
      />
    </View>
  );
};

export default observer(SettingsScreen);
