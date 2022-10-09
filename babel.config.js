module.exports = (api) => {
	api.cache(true);
	return {
		presets: ["babel-preset-expo"],
		plugins: [
			[
				"module-resolver",
				{
					alias: {
						"@Components": "./src/components",
						"@Context": "./src/context",
						"@Assets": "./src/assets",
						"@Constants": "./src/constants",
						"@Api": "./src/api",
						"@Hooks": "./src/hooks",
						"@Icons": "./src/icons",
						"@Navigators": "./src/navigators",
						"@Screens": "./src/screens",
						"@Types": "./src/types",
						"@Utils": "./src/utils",
					},
				},
			],
		],
	};
};
