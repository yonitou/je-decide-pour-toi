import { StyleSheet, Text, View } from "react-native";

export default (): JSX.Element => {
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
