import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

export const styles = StyleSheet.create({
	container: {
		height: 250,
		padding: 20,
		marginBottom: 50,
		alignItems: "center",
	},
	image: {
		height: 150,
		resizeMode: "contain",
	},
	title: {
		fontSize: 18,
		fontWeight: "bold",
		color: Colors.light.title,
	},
	balance: {
		fontSize: 40,
		fontWeight: "bold",
	},
});
