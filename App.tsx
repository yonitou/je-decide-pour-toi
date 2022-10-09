import { StyleSheet, Text, View } from "react-native";
import * as Updates from "expo-updates";
import * as SplashScreen from "expo-splash-screen";
import archivoBlack from "@Assets/fonts/Archivo-Black.ttf";
import archivoNarrow from "@Assets/fonts/Archivo-Narrow.ttf";
import { useFonts } from "expo-font";
import { useCallback, useEffect } from "react";
import { fontFamilyEnum } from "@Types/font.types";

export default (): JSX.Element => {
	const [loaded] = useFonts({
		"Archivo-Black": archivoBlack,
		"Archivo-Narrow": archivoNarrow,
	});
	const checkUpdate = async (): Promise<void> => {
		try {
			const { isAvailable } = await Updates.checkForUpdateAsync();

			if (isAvailable) {
				await Updates.fetchUpdateAsync();
				await Updates.reloadAsync();
			}
		} catch (error) {
			//
		}
	};

	const onLayoutRootView = useCallback(async () => {
		if (loaded) {
			await SplashScreen.hideAsync();
		}
	}, [loaded]);

	useEffect(() => {
		const prepare = async (): Promise<void> => {
			await SplashScreen.preventAutoHideAsync();
		};
		prepare();
		checkUpdate();
	}, []);

	if (!loaded) {
		return null;
	}

	return (
		<View style={styles.container} onLayout={onLayoutRootView}>
			<Text style={styles.title}>Coucou Yoyo</Text>
			<Text style={styles.subtitle}>Coucou Ghita</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	title: {
		fontFamily: fontFamilyEnum.ArchivoBlack,
	},
	subtitle: {
		fontFamily: fontFamilyEnum.ArchivoNarrow,
	},
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
