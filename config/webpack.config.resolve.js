const path = require("path");

module.exports = {
  // This allows you to set a fallback for where Webpack should look for modules.
  // We placed these paths second because we want `node_modules` to "win"
  // if there are any conflicts. This matches Node resolution mechanism.
  // https://github.com/facebook/create-react-app/issues/253
  modules: ["node_modules", path.resolve(__dirname, "../", "src")].concat(
    // It is guaranteed to exist because we tweak it in `env.js`
    process.env.NODE_PATH.split(path.delimiter).filter(Boolean)
  ),
  alias: {
    Components: path.resolve(__dirname, "../", "src", "Components"), // This is ours!!
    Constants: path.resolve(__dirname, "../", "src", "Constants"),
    Helpers: path.resolve(__dirname, "../", "src", "Helpers"),
    Redux: path.resolve(__dirname, "../", "src", "Redux"),
    // Support React Native Web
    // https://www.smashingmagazine.com/2016/08/a-glimpse-into-the-future-with-react-native-for-web/
    "react-native": "react-native-web"
  }
};
