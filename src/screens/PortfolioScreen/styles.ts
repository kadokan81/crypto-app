import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

export const styles = StyleSheet.create({
	container: {
		height: 250,
		padding: 20,
		marginBottom: 50,
	},
	image: {
		height: 150,
		aspectRatio: 1,
		marginBottom: 30,
		alignSelf: "center",
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
