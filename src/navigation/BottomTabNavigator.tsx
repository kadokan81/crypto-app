/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";

import { BottomTabParamList } from "../../types";
import Home from "../screens/HomeScreen";
import Portfolio from "../screens/PortfolioScreen";
import Market from "../screens/MarketScreen";
import Profile from "../screens/ProfileScreen";
import RankingScreen from "../screens/RankingsScreen";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
	const colorScheme = useColorScheme();

	return (
		<BottomTab.Navigator
			initialRouteName='Home'
			tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
			<BottomTab.Screen
				name='Home'
				component={Home}
				options={{
					tabBarIcon: ({ color }) => (
						<TabBarIcon name='home' color={color} />
					),
				}}
			/>
			<BottomTab.Screen
				name='Portfolio'
				component={Portfolio}
				options={{
					tabBarIcon: ({ color }) => (
						<TabBarIcon name='pie-chart' color={color} />
					),
				}}
			/>
			<BottomTab.Screen
				name='Market'
				component={Market}
				options={{
					tabBarIcon: ({ color }) => (
						<TabBarIcon name='bar-chart' color={color} />
					),
				}}
			/>
			<BottomTab.Screen
				name='Ranking'
				component={RankingScreen}
				options={{
					tabBarIcon: ({ color }) => (
						<TabBarIcon name='star' color={color} />
					),
				}}
			/>
			<BottomTab.Screen
				name='Profile'
				component={Profile}
				options={{
					tabBarIcon: ({ color }) => (
						<TabBarIcon name='person' color={color} />
					),
				}}
			/>
		</BottomTab.Navigator>
	);
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: {
	name: React.ComponentProps<typeof Ionicons>["name"];
	color: string;
}) {
	return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
// const TabOneStack = createStackNavigator<TabOneParamList>();

// function TabOneNavigator() {
// 	return (
// 		<TabOneStack.Navigator>
// 			<TabOneStack.Screen
// 				name='TabOneScreen'
// 				component={TabOneScreen}
// 				options={{ headerTitle: "Tab One Title" }}
// 			/>
// 		</TabOneStack.Navigator>
// 	);
// }

// const TabTwoStack = createStackNavigator<TabTwoParamList>();

// function TabTwoNavigator() {
// 	return (
// 		<TabTwoStack.Navigator>
// 			<TabTwoStack.Screen
// 				name='TabTwoScreen'
// 				component={TabTwoScreen}
// 				options={{ headerTitle: "Tab Two Title" }}
// 			/>
// 		</TabTwoStack.Navigator>
// 	);
// }
