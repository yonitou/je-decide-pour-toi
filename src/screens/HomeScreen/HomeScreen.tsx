import Header from "@Components/Header";
import HumorIcon from "@Components/HumorIcon";
import SafeArea from "@Components/SafeArea";
import { fontFamilyEnum } from "@Types/font.types";
import { View, StyleSheet, Text, ActivityIndicator } from "react-native";
import { FlatList } from "react-native-gesture-handler";

import { HomeScreenProps } from "./screen.types";

const HomeScreen = ({ humors }: HomeScreenProps): JSX.Element => {
	const sortedHumors = humors?.sort((a, b) => a.icon?.localeCompare(b.icon));
	return (
		<View style={styles.container}>
			<Header withProfileBtn />
			<SafeArea withBottomPadding={false}>
				<Text style={styles.title}>Salut,</Text>
				<Text style={styles.subtitle}>Comment vas-tu aujourd&apos;hui?</Text>
				{humors?.length > 0 ? (
					<FlatList
						data={sortedHumors}
						numColumns={2}
						showsVerticalScrollIndicator={false}
						keyExtractor={(item) => item.id.toString()}
						renderItem={({ item }) => {
							return (
								<View style={styles.humorWrapper}>
									<View
										key={item?.id}
										style={{
											...styles.humor,
											backgroundColor: item.color || "hsla(186, 13%, 55%, 1)",
										}}
									>
										{item.icon ? (
											<HumorIcon humor={item} fill="white" width={70} height={70} />
										) : (
											<Text style={styles.notAvailableText}>Bientôt dispo</Text>
										)}
									</View>
								</View>
							);
						}}
					/>
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
	humorWrapper: {
		flex: 1,
		marginBottom: 20,
		alignItems: "center",
	},
	notAvailableText: {
		color: "white",
		fontFamily: fontFamilyEnum.ArchivoNarrow,
		fontSize: 19,
		transform: [{ rotate: "45deg" }],
	},
	humor: {
		alignItems: "center",
		shadowColor: "black",
		shadowOffset: {
			width: 0,
			height: 4,
		},
		shadowOpacity: 0.25,
		shadowRadius: 5.62,
		elevation: 6,
		justifyContent: "center",
		width: 125,
		borderRadius: 30,
		backgroundColor: "#2C6CBF",
		height: 125,
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
