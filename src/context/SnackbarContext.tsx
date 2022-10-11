import { createContext, useState, useCallback, useMemo } from "react";
import { StyleSheet, StyleProp, ViewStyle, Text } from "react-native";
import { Snackbar } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { VERTICAL_PADDING } from "@Constants/styleValues";
import { fontFamilyEnum } from "@Types/font.types";

interface SnackbarContextProps {
	showSnackbar?: (text: string, type: SnackTypeEnum, durationValue?: number) => void;
}
export enum SnackTypeEnum {
	OK = "OK",
	ERROR = "ERROR",
}

export const SnackbarContext = createContext<SnackbarContextProps>({});

const SnackbarProvider = ({ children }: { children: JSX.Element }): JSX.Element => {
	const [snackIsVisible, setSnackIsVisible] = useState<boolean>(false);
	const [snackText, setSnackText] = useState<string>("");
	const [snackType, setSnackType] = useState<SnackTypeEnum>();
	const [duration, setDuration] = useState<number>();
	const showSnackbar = useCallback((text: string, type: SnackTypeEnum, durationValue = 3000): void => {
		setSnackIsVisible(false);
		setSnackText(text);
		setSnackType(type);
		setDuration(durationValue);
		setSnackIsVisible(true);
	}, []);

	const value = useMemo(
		(): SnackbarContextProps => ({
			showSnackbar,
		}),
		[showSnackbar]
	);
	const { bottom } = useSafeAreaInsets();

	const position = Math.max(bottom, VERTICAL_PADDING) * 2;
	return (
		<SnackbarContext.Provider value={value}>
			{children}
			<Snackbar
				style={[styles.snackbar, snackStyle[snackType], { bottom: position }]}
				visible={snackIsVisible}
				onDismiss={() => setSnackIsVisible(false)}
				duration={duration}
			>
				<Text style={styles.snackText}>{snackText}</Text>
			</Snackbar>
		</SnackbarContext.Provider>
	);
};

const snackStyle: { [id: string]: StyleProp<ViewStyle> } = {
	OK: { backgroundColor: "hsla(143, 94%, 37%, 1)" },
	ERROR: { backgroundColor: "hsla(0, 85%, 65%, 1)" },
};

const styles = StyleSheet.create({
	snackbar: {
		elevation: 5,
		borderRadius: 4,
	},

	snackText: {
		color: "white",
		fontSize: 15,
		fontFamily: fontFamilyEnum.ArchivoNarrow,
	},
});

export default SnackbarProvider;
