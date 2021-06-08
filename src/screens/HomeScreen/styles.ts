import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		alignItems: "center",
	},
	image: {
		height: "50%",
		aspectRatio: 1,
	},
	mainHeader: {
		fontSize: 30,
		fontWeight: "bold",
		marginBottom: 20,
	},
	text: {
		fontSize: 18,
		color: Colors.light.title,
	},
});
