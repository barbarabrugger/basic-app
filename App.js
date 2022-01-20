import { View, Text } from "react-native";
import { WebView } from "react-native-webview";

export default function App() {
  return (
    <WebView
      source={{ html: '<iframe width="100%" height="100%" src="https://www.vitabad.ch" frameborder="0" ></iframe>' }}
      scalesPageToFit={false}
    />
  );
}
