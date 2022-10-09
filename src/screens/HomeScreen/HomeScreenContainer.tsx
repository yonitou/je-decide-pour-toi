import { getHumors } from "@Api/api";
import { humorType } from "@Types/humor.types";
import { useEffect, useState } from "react";
import HomeScreen from "./HomeScreen";
import { HomeScreenContainerProps } from "./screen.types";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const GlobalConditionsContainer = ({ navigation }: HomeScreenContainerProps): JSX.Element => {
	const [humors, setHumors] = useState<humorType[]>();

	useEffect(() => {
		const loadHumors = async (): Promise<void> => {
			const fetchedHumors = await getHumors();
			setHumors(fetchedHumors);
		};
		loadHumors();
	}, []);
	return <HomeScreen humors={humors} />;
};

export default GlobalConditionsContainer;
