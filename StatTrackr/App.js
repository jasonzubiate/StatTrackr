import 'react-native-gesture-handler';
import Navigator from "./routes/drawer";
import Footer from "./components/Footer";
import { useFonts } from "expo-font";

export default function App() {
  const [LoadedFonts] = useFonts({
    "sora-thin": require("./assets/fonts/Sora-Thin.ttf"),
    "sora-regular": require("./assets/fonts/Sora-Regular.ttf"),
    "sora-medium": require("./assets/fonts/Sora-Medium.ttf"),
    "sora-semibold": require("./assets/fonts/Sora-SemiBold.ttf"),
    "sora-bold": require("./assets/fonts/Sora-Bold.ttf"),
  });

  if (LoadedFonts) {
    return (
      <>
        <Navigator />
        <Footer />
      </>
    );
  } else {
    return null;
  }
}
