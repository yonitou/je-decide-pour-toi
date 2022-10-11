import { Linking } from "react-native";
import MoreInfosScreen from "./MoreInfosScreen";
import { MoreInfosContainerProps } from "./screen.types";

const MoreInfosContainer = ({ navigation, route }: MoreInfosContainerProps): JSX.Element => {
	const humor = route?.params?.humor;
	const action = route?.params?.action;

	const onGoBack = (): void => navigation.goBack();
	const onPressLink = (): void => {
		Linking.openURL(action.link);
	};

	return <MoreInfosScreen humor={humor} action={action} onGoBack={onGoBack} onPressLink={onPressLink} />;
};

export default MoreInfosContainer;
