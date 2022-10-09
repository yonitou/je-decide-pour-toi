import { StyleSheet, Text, View } from "react-native";
import * as Updates from "expo-updates";
import { useEffect } from "react";

export default (): JSX.Element => {
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

	useEffect(() => {
		checkUpdate();
	}, []);

	return (
		<View style={styles.container}>
			<Text>Coucou ghita</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
