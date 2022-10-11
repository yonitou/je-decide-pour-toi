import ActionScreen from "./ActionScreen";
import { ActionContainerProps } from "./screen.types";

const ActionContainer = ({ navigation, route }: ActionContainerProps): JSX.Element => {
	const humor = route?.params?.humor;
	const action = route?.params?.action;

	const onGoBack = (): void => navigation.goBack();
	const onPress = (): void => navigation.navigate("MoreInfosScreen", { action, humor });

	return <ActionScreen humor={humor} action={action} onGoBack={onGoBack} onPress={onPress} />;
};

export default ActionContainer;
