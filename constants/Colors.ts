import { myTheme } from "./custom-theme";

const tintColorLight = "#fff";
const tintColorDark = "#fff";

export default {
  light: {
    text: "#000",
    background: "#fff",
    tint: tintColorLight,
    tabIconDefault: "#ccc",
    tabIconSelected: tintColorLight,
    tabBarBackground: "#fff",
    bottomBarBackground: myTheme["color-primary-700"],
  },
  dark: {
    text: "#fff",
    background: "#000",
    tint: tintColorDark,
    tabIconDefault: "#000",
    tabIconSelected: tintColorDark,
    tabBarBackground: "#000",
    bottomBarBackground: myTheme["color-primary-700"],
  },
};
