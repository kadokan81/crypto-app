import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

export const styles = StyleSheet.create({
	root: {
		flexDirection: "row",
		alignItems: "center",
		width: "100%",
		justifyContent: "space-between",
		marginBottom: 10,
		paddingHorizontal: 20,
	},
	image: {
		height: 50,
		width: 50,
		marginRight: 10,
	},
	name: {
		fontSize: 20,
		fontWeight: "bold",
	},
	centerPart: {
		width: "30%",
	},
	rigthPart: {
		width: "50%",
		alignItems: "flex-end",
	},
	total: {
		fontSize: 20,
		fontWeight: "bold",
	},
	simbol: {
		color: Colors.light.title,
		fontWeight: "bold",
	},
});
