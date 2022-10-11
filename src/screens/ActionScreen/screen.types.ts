import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ParamListBase, RouteProp } from "@react-navigation/native";
import { humorType } from "@Types/humor.types";
import { actionType } from "@Types/action.types";

export interface ActionScreenProps {
	humor: humorType;
	action: actionType;
	onPress: () => void;
	onGoBack: () => void;
}

export interface ActionContainerProps {
	navigation: NativeStackNavigationProp<ParamListBase>;
	route: RouteProp<{
		params: {
			humor: humorType;
			action: actionType;
		};
	}>;
}
