const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const config = getDefaultConfig(__dirname);

// Fix: Add .mjs to source extensions for lucide-react-native compatibility
config.resolver.sourceExts = [...config.resolver.sourceExts, "mjs"];

module.exports = withNativeWind(config, { input: "./global.css" });
