import Header from "@Components/Header";
import SafeArea from "@Components/SafeArea";
import { HORIZONTAL_PADDING } from "@Constants/styleValues";
import Icons from "@Icons/Icons";
import { fontFamilyEnum } from "@Types/font.types";
import { View, StyleSheet, ImageBackground, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { MoreInfosScreenProps } from "./screen.types";

const MoreInfosScreen = ({ action, humor, onGoBack, onPressLink }: MoreInfosScreenProps): JSX.Element => {
	return (
		<SafeArea withBottomPadding={false} style={styles.safeArea} withHorizontalPadding={false}>
			<ImageBackground
				style={styles.container}
				source={{
					uri: "https://images.unsplash.com/photo-1665499403166-8ad7d367a43b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
				}}
			>
				<Header
					withProfileBtn={false}
					chevronColor={humor.color}
					onBackPress={onGoBack}
					backgroundColor="transparent"
				/>
			</ImageBackground>
			<View style={{ ...styles.details, backgroundColor: humor.color }}>
				<TouchableOpacity style={styles.titleWrapper} onPress={action.link && onPressLink}>
					<Text style={styles.title}>KILLING EVE</Text>
					<Icons.ArrowBack fill="black" height={30} width={25} style={styles.icon} />
				</TouchableOpacity>

				{action.address && <Text style={styles.address}>22 Rue de Ster Vad, 29120</Text>}
			</View>
		</SafeArea>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 5,
	},
	safeArea: {
		flex: 1,
	},
	details: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		padding: HORIZONTAL_PADDING,
	},
	icon: {
		marginLeft: 10,
		transform: [{ rotate: "180deg" }],
	},
	address: {
		fontFamily: fontFamilyEnum.ArchivoNarrow,
		fontSize: 16,
		marginTop: 10,
	},
	title: {
		fontSize: 28,
		fontFamily: fontFamilyEnum.ArchivoBlack,
	},
	titleWrapper: {
		flexDirection: "row",
		alignItems: "center",
	},
});

export default MoreInfosScreen;
