import { View, StyleSheet } from "react-native";
import { navigationRef } from "@Utils/rootNavigation";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreenContainer from "@Screens/HomeScreen";

const Stack = createNativeStackNavigator();

const AppNavigationContainer = (): JSX.Element => {
	return (
		<View style={styles.containers}>
			<NavigationContainer ref={navigationRef}>
				<Stack.Navigator screenOptions={{ headerShown: false, gestureEnabled: false }}>
					<Stack.Screen name="HomeScreen" component={HomeScreenContainer} />
				</Stack.Navigator>
			</NavigationContainer>
		</View>
	);
};

const styles = StyleSheet.create({
	containers: {
		flex: 1,
	},
});

export default AppNavigationContainer;
