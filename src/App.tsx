import React, { useEffect, useState } from "react";
import { Dimensions } from "react-native";
import * as Location from "expo-location";
import * as SplashScreen from "expo-splash-screen";
import {
  SafeAreaView,
  useSafeAreaFrame,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import HomeScreen from "src/screens/HomeScreen";
import LoadingScreen from "src/screens/LoadingScreen";
import useCachedResources from "src/hooks/useCachedResources";
import { setPresetScreenHeight } from "src/helpers/scaleHelper";

// SplashScreen.preventAutoHideAsync();

const App = () => {
  const insets = useSafeAreaInsets();
  const frame = useSafeAreaFrame();
  // const { showInterstitial, isLoaded } = useAdMob();

  const [secsLoading, setSecsLoading] = useState<number>(0);
  const [isDone, setIsDone] = useState<boolean>(false);
  const [isStart, setIsStart] = useState<boolean>(false);

  const [location, setLocation] = useState<Location.LocationObject | null>(
    null
  );
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const isCachedComplete = useCachedResources();
  console.log("isCachedComplete", isCachedComplete);
  useEffect(() => {
    const { height } = Dimensions.get("window");

    if (height - frame.height > 200) {
      setPresetScreenHeight(height - insets.top - insets.bottom);
    } else {
      setPresetScreenHeight(frame.height - insets.top - insets.bottom);
    }
  }, [frame.height, insets.top, insets.bottom, isDone]);
  useEffect(() => {
    if ((isCachedComplete && false && secsLoading >= 2) || secsLoading >= 5) {
      setIsDone(true);
    }
  }, [isCachedComplete, secsLoading]);
  useEffect(() => {
    const timerId = setInterval(() => {
      if (secsLoading >= 5) {
        clearInterval(timerId);
      } else setSecsLoading((s: number) => s + 0.2);
    }, 200);

    return () => timerId && clearInterval(timerId);
  }, [secsLoading]);
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      console.log("location", location);
      setLocation(location);
    })();
  }, []);

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  if (!isDone) {
    return null;
  }
  const onStartClick = () => {
    // showInterstitial(() => {
    setIsStart(true);
    // });
  };

  return (
    <SafeAreaView
      style={{
        height: "100%",
        width: "100%",
        backgroundColor: "#fff",
      }}
    >
      {!isStart ? (
        <LoadingScreen isLoading={!isDone} onStart={() => onStartClick()} />
      ) : (
        <HomeScreen />
      )}
    </SafeAreaView>
  );
};

export default App;
