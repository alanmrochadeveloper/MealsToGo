import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { RestaurantScreen } from "./src/features/restaurants/screens/restaurant.screen";
import { ThemeProvider } from "styled-components";
import { theme } from "./src/infrastructure";

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantScreen />
      </ThemeProvider>
      <ExpoStatusBar />
    </>
  );
}
