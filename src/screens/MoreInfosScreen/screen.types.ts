import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ParamListBase, RouteProp } from "@react-navigation/native";
import { humorType } from "@Types/humor.types";
import { actionType } from "@Types/action.types";

export interface MoreInfosScreenProps {
	humor: humorType;
	action: actionType;
	onGoBack: () => void;
	onPressLink: () => void;
}

export interface MoreInfosContainerProps {
	navigation: NativeStackNavigationProp<ParamListBase>;
	route: RouteProp<{
		params: {
			humor: humorType;
			action: actionType;
		};
	}>;
}
