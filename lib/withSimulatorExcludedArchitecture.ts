const { withXcodeProject } = require("@expo/config-plugins");

// This file is required to build the app on iOS. It tells to expo to skip the build on M1 architectures.

const setExcludedArchitectures = (project) => {
	const configurations = project.pbxXCBuildConfigurationSection();

	for (const { buildSettings } of Object.values(configurations || {})) {
		if (
			typeof (buildSettings === null || buildSettings === void 0 ? void 0 : buildSettings.PRODUCT_NAME) !==
			"undefined"
		) {
			buildSettings['"EXCLUDED_ARCHS[sdk=iphonesimulator*]"'] = '"arm64"';
		}
	}
	return project;
};

const withSimulatorExcludedArchitecture = (c) => {
	return withXcodeProject(c, (config) => {
		const newConfig = config;
		newConfig.modResults = setExcludedArchitectures(newConfig.modResults);
		return newConfig;
	});
};

module.exports = withSimulatorExcludedArchitecture;
