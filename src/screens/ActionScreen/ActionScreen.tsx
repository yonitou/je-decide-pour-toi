import Header from "@Components/Header";
import HumorIcon from "@Components/HumorIcon";
import SafeArea from "@Components/SafeArea";
import { fontFamilyEnum } from "@Types/font.types";
import { View, StyleSheet, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ActionScreenProps } from "./screen.types";

const ActionScreen = ({ action, humor, onGoBack, onPress }: ActionScreenProps): JSX.Element => {
	return (
		<View style={{ ...styles.container, backgroundColor: humor.color }}>
			<Header withProfileBtn={false} onBackPress={onGoBack} backgroundColor={humor.color} />
			<SafeArea withBottomPadding={false} style={styles.safeArea}>
				<HumorIcon humor={humor} fill="black" width={126} height={126} style={styles.emoji} />
				<Text style={styles.content}>{action.content}</Text>
				{action.link && action.image && (
					<TouchableOpacity style={styles.button} onPress={onPress}>
						<Text style={styles.buttonText}>+ d&apos;infos</Text>
					</TouchableOpacity>
				)}
				{/*
				<TouchableOpacity style={styles.button} onPress={onPress}>
					<Text style={styles.buttonText}>+ d&apos;infos</Text>
				</TouchableOpacity> */}
			</SafeArea>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	safeArea: {
		alignItems: "center",
		justifyContent: "center",
	},
	emoji: {
		marginBottom: 35,
	},
	content: {
		fontSize: 24,
		fontFamily: fontFamilyEnum.ArchivoNarrow,
		textAlign: "center",
		marginBottom: 35,
	},
	buttonText: {
		fontSize: 24,
		fontFamily: fontFamilyEnum.ArchivoNarrow,
		fontWeight: "700",
	},
	button: {
		padding: 8,
		borderWidth: 1,
		borderColor: "black",
		shadowColor: "black",
		shadowOffset: {
			width: 0,
			height: 4,
		},
		shadowOpacity: 0.19,
		shadowRadius: 5.62,
		elevation: 6,
	},
});

export default ActionScreen;
