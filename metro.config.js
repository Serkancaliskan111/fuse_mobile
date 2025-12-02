const { withNativeWind } = require("nativewind/metro");
const { getSentryExpoConfig } = require("@sentry/react-native/metro");

// Sentry Expo config’i al
const sentryConfig = getSentryExpoConfig(__dirname);

// NativeWind’i Sentry config ile sar
module.exports = withNativeWind(sentryConfig, {
    input: "./app/global.css", // Global Tailwind CSS path’in
});
