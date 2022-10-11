import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ParamListBase } from "@react-navigation/native";
import { humorType } from "@Types/humor.types";

export interface HomeScreenProps {
	humors: humorType[];
	onPress: (humor: humorType) => void;
}

export interface HomeScreenContainerProps {
	navigation: NativeStackNavigationProp<ParamListBase>;
}
