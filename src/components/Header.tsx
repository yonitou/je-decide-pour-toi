import { StyleSheet, StyleProp, View, Dimensions, ViewStyle, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { getDefaultHeaderHeight, Header as RNHeader } from "@react-navigation/elements";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Icons from "@Icons/Icons";
import { fontFamilyEnum } from "@Types/font.types";

interface HeaderProps {
	title?: string;
	onBackPress?: () => void;
	headerIcon?: JSX.Element;
	backgroundColor?: string;
	customTitle?: JSX.Element;
	customLeft?: JSX.Element;
	subtitle?: string;
	textStyle?: Record<string, string>;
	headerTitleContainerStyle?: StyleProp<ViewStyle>;
	withProfileBtn: boolean;
}

const Header = ({
	title,
	headerIcon,
	onBackPress,
	withProfileBtn,
	textStyle,
	customLeft,
	customTitle,
	backgroundColor,
	subtitle,
	headerTitleContainerStyle,
}: HeaderProps): JSX.Element => {
	const marginLeftTitle = headerIcon ? 10 : 0;
	const { top } = useSafeAreaInsets();
	const headerHeight = getDefaultHeaderHeight(
		{
			width: Dimensions.get("window").width,
			height: Dimensions.get("window").height,
		},
		false,
		top
	);
	const sideButtonSize = headerHeight - top;

	const HORIZONTAL_PADDING = 16;

	return (
		<View style={styles.container}>
			<RNHeader
				title={title}
				headerTitleAlign="center"
				headerTitleContainerStyle={headerTitleContainerStyle}
				headerStyle={{ backgroundColor, ...styles.headerStyle }}
				headerLeftContainerStyle={{ paddingLeft: HORIZONTAL_PADDING }}
				headerRightContainerStyle={{ paddingRight: HORIZONTAL_PADDING }}
				headerLeft={() => {
					return (
						customLeft ??
						(onBackPress && (
							<TouchableOpacity onPress={onBackPress}>
								<Icons.ArrowBack width={sideButtonSize} height={sideButtonSize} />
							</TouchableOpacity>
						))
					);
				}}
				headerTitle={({ children }) =>
					customTitle ?? (
						<View style={styles.wrapper}>
							<View style={styles.titleWrapper}>
								{headerIcon}
								<Text style={[textStyle, { marginLeft: marginLeftTitle }]}>{children}</Text>
							</View>
							{subtitle && <Text>{subtitle}</Text>}
						</View>
					)
				}
				headerRight={() => {
					return withProfileBtn && <Text style={styles.headerRight}>mon profil</Text>;
				}}
				headerTitleStyle={textStyle}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	headerRight: {
		fontSize: 17,
		fontFamily: fontFamilyEnum.ArchivoNarrow,
	},
	container: {
		zIndex: 1,
	},
	headerStyle: {
		elevation: 0,
		shadowOpacity: 0,
	},
	titleWrapper: {
		flexDirection: "row",
		alignItems: "center",
	},
	wrapper: {
		alignItems: "center",
	},
});

export default Header;
