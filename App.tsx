import { StyleSheet, View } from "react-native";
import * as Updates from "expo-updates";
import { SafeAreaProvider } from "react-native-safe-area-context";
import * as SplashScreen from "expo-splash-screen";
import archivoBlack from "@Assets/fonts/Archivo-Black.ttf";
import archivoNarrow from "@Assets/fonts/Archivo-Narrow.ttf";
import { useFonts } from "expo-font";
import { useCallback, useEffect } from "react";

import AppNavigationContainer from "@Navigators/index";
import SnackbarProvider from "@Context/SnackbarContext";

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
		<SafeAreaProvider>
			<SnackbarProvider>
				<View style={styles.container} onLayout={onLayoutRootView}>
					<AppNavigationContainer />
				</View>
			</SnackbarProvider>
		</SafeAreaProvider>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
