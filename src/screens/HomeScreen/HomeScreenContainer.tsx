import { getAction, getHumors } from "@Api/api";
import { SnackbarContext, SnackTypeEnum } from "@Context/SnackbarContext";
import { humorType } from "@Types/humor.types";
import { useContext, useEffect, useState } from "react";
import HomeScreen from "./HomeScreen";
import { HomeScreenContainerProps } from "./screen.types";

const HomeScreenContainer = ({ navigation }: HomeScreenContainerProps): JSX.Element => {
	const [humors, setHumors] = useState<humorType[]>();
	const { showSnackbar } = useContext(SnackbarContext);

	const onPress = async (humor: humorType): Promise<void> => {
		try {
			const action = await getAction(humor.id);
			if (action) navigation.navigate("ActionScreen", { humor, action });
		} catch (e) {
			showSnackbar("Une erreur est survenue", SnackTypeEnum.ERROR);
		}
	};

	useEffect(() => {
		const loadHumors = async (): Promise<void> => {
			const fetchedHumors = await getHumors();
			setHumors(fetchedHumors);
		};
		loadHumors();
	}, []);
	return <HomeScreen humors={humors} onPress={onPress} />;
};

export default HomeScreenContainer;
