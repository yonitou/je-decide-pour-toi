import "dotenv/config";
import { ExpoConfig, ConfigContext } from "@expo/config";

enum ENV_ENUM {
	PRODUCTION = "production",
	PREVIEW = "preview",
	DEVELOPMENT = "development",
}

const bundleConfig = {
	apiUrl: "https://je-decide-pour-toi-staging.herokuapp.com/api/v1",
	name: "Je décide pour toi (Staging)",
	bundleId: "com.je-decide-pour-toi.app.preview",
	iconPath: "./src/assets/icon-preview.png",
	buildNumber: "3",
	version: "1.0.2",
};

if (process.env.APP_ENV === ENV_ENUM.PRODUCTION) {
	bundleConfig.apiUrl = "https://je-decide-pour-toi.herokuapp.com/api/v1";
	bundleConfig.name = "Je décide pour toi";
	bundleConfig.bundleId = "com.je-decide-pour-toi.app";
	bundleConfig.iconPath = "./src/assets/icon.png";
}

const { apiUrl, version, buildNumber, name, bundleId, iconPath } = bundleConfig;

export default ({ config }: ConfigContext): ExpoConfig => {
	return {
		...config,
		extra: {
			apiUrl,
			build: buildNumber,
			version,
			eas: {
				projectId: "0a9658f6-2d2f-4bbc-a2d8-7bb808ce8fa6",
			},
		},
		name,
		slug: "je-decide-pour-toi",
		privacy: "public",
		platforms: ["ios", "android"],
		version,
		orientation: "portrait",
		icon: iconPath,
		plugins: ["./lib/withSimulatorExcludedArchitecture.ts"],
		splash: {
			image: "./src/assets/splash.png",
			resizeMode: "cover",
			backgroundColor: "#2C6465",
		},
		updates: {
			checkAutomatically: "ON_ERROR_RECOVERY",
		},
		runtimeVersion: buildNumber,
		assetBundlePatterns: ["**/*"],
		ios: {
			buildNumber,
			supportsTablet: false,
			bundleIdentifier: bundleId,
		},
		notification: {
			icon: iconPath,
			color: "#67dee1",
		},
	};
};
