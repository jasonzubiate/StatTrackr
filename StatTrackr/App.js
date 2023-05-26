import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./screens/home";
import { useFonts } from "expo-font";
import { useState } from "react";

export default function App() {
  const [LoadedFonts] = useFonts({
    "sora-thin": require("./assets/fonts/Sora-Thin.ttf"),
    "sora-regular": require("./assets/fonts/Sora-Regular.ttf"),
    "sora-semibold": require("./assets/fonts/Sora-SemiBold.ttf"),
    "sora-bold": require("./assets/fonts/Sora-Bold.ttf"),
  });

  if (LoadedFonts) {
    return (
      <>
        <Header />
        <Home />
        <Footer />
      </>
    );
  } else {
    return null;
  }
}
