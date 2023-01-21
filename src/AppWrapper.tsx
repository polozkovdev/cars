import { SafeAreaProvider } from "react-native-safe-area-context";
import React from "react";
import App from "src/App";
import { coreStore, StoreProvider } from "src/store";

export const AppWrapper = () => {
  return (
    <StoreProvider value={coreStore}>
      <SafeAreaProvider>
        <App />
      </SafeAreaProvider>
    </StoreProvider>
  );
};
