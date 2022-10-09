import Header from "@Components/Header";
import SafeArea from "@Components/SafeArea";
import { fontFamilyEnum } from "@Types/font.types";
import { View, StyleSheet, Text, ActivityIndicator } from "react-native";

import { HomeScreenProps } from "./screen.types";

const HomeScreen = ({ humors }: HomeScreenProps): JSX.Element => {
	return (
		<View style={styles.container}>
			<Header withProfileBtn />
			<SafeArea>
				<Text style={styles.title}>Salut,</Text>
				<Text style={styles.subtitle}>Comment vas-tu aujourd&apos;hui?</Text>
				{humors?.length > 0 ? (
					<View style={styles.humorsWrapper}>
						{humors.map((humor) => {
							return (
								<View key={humor?.id} style={styles.colorButton}>
									<Text>{humor.name}</Text>
								</View>
							);
						})}
					</View>
				) : (
					<ActivityIndicator size="large" />
				)}
			</SafeArea>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
	humorsWrapper: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		flexWrap: "wrap",
	},
	colorButton: {
		alignItems: "center",
		justifyContent: "center",
		width: 85,
		height: 85,
	},
	title: {
		fontFamily: fontFamilyEnum.ArchivoBlack,
		fontSize: 23,
	},
	subtitle: {
		fontFamily: fontFamilyEnum.ArchivoNarrow,
		fontSize: 23,
		marginBottom: 40,
	},
});

export default HomeScreen;
