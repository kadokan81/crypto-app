import * as React from "react";
import { Image, Text, View } from "react-native";
import Colors from "../../constants/Colors";
import { styles } from "./styles";

export interface MarketCoinProps {
	user: {
		image: string;
		name: string;
		balance: number;
		changein24H: number;
	};
	place: number;
}

const RankingItem: React.FC<MarketCoinProps> = ({ user, place }) => {
	const { name, image, balance, changein24H } = user;

	return (
		<View style={styles.root}>
			<View>
				<Text
					style={{
						fontWeight: "bold",
						fontSize: 20,
						marginRight: 10,
					}}>
					{place}
				</Text>
			</View>
			<Image source={{ uri: image }} style={styles.image} />
			<View style={styles.centerPart}>
				<Text style={styles.name}>{name}</Text>
			</View>
			<View style={styles.rigthPart}>
				<Text style={styles.total}>${balance}</Text>
				<Text
					style={{
						color: changein24H > 0 ? Colors.light.green : "red",
					}}>
					{changein24H}%
				</Text>
			</View>
		</View>
	);
};

export default RankingItem;
