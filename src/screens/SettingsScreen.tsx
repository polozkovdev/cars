import React, { useState } from "react";
import { Text, View } from "react-native";
import Button from "src/components/Button";
import Title from "src/components/Title";
import { RadioItem } from "src/components/RadioItem";
import { verticalScale } from "src/helpers/scaleHelper";
import Input from "src/components/Input";
import { observer } from "mobx-react-lite";
import { coreStore, ISettings } from "src/store";
import { LOCALE } from "src/assets/constants";

const SettingsScreen = ({ navigation }: any) => {
  const [settings, setSettings] = useState<ISettings>(
    coreStore.settings.getSet
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
          label={LOCALE.US}
          isActive={settings.locale === LOCALE.US}
          onSelect={() => setSettings({ ...settings, locale: LOCALE.US })}
        />
        <RadioItem
          label={LOCALE.EU}
          isActive={settings.locale === LOCALE.EU}
          onSelect={() => setSettings({ ...settings, locale: LOCALE.EU })}
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
        <Input label="City" type="city" value={settings.city} />
        <Input label="Highway" type="highway" value={settings.highway} />
      </View>
      <View
        style={{
          marginTop: verticalScale(40),
        }}
      >
        <Input
          label={`1 ${settings.locale === LOCALE.US ? "Gallon" : "Liter"} Cost`}
          type="cost"
          prefix={`${settings.locale === LOCALE.US ? "$" : "€"}`}
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
