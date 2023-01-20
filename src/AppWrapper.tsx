import { SafeAreaProvider } from "react-native-safe-area-context";
import React from "react";
import App from "./App";
import { coreStore, StoreProvider } from "./store";

export const AppWrapper = () => {
  return (
    <StoreProvider value={coreStore}>
      <SafeAreaProvider>
        <App />
      </SafeAreaProvider>
    </StoreProvider>
  );
};
