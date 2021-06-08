import { useNavigation } from "@react-navigation/core";
import * as React from "react";
import { Image, Pressable, Text, View } from "react-native";
import Colors from "../../constants/Colors";
import { styles } from "./styles";

export interface MarketCoinProps {
	marketCoin: {
		image: string;
		name: string;
		symbol: string;
		amount: number;
		price: number;
		changein24H: number;
	};
}

const MarketCoin: React.FC<MarketCoinProps> = ({ marketCoin }) => {
	const { name, image, symbol, price, changein24H } = marketCoin;
	const navigation = useNavigation();

	return (
		<Pressable onPress={() => navigation.navigate("CoinDetails")}>
			<View style={styles.root}>
				<Image source={{ uri: image }} style={styles.image} />
				<View style={styles.centerPart}>
					<Text style={styles.name}>{name}</Text>
					<Text style={styles.simbol}>{symbol}</Text>
				</View>
				<View style={styles.rigthPart}>
					<Text style={styles.total}>${price}</Text>
					<Text
						style={{
							color: changein24H > 0 ? Colors.light.green : "red",
						}}>
						{changein24H}%
					</Text>
				</View>
			</View>
		</Pressable>
	);
};

export default MarketCoin;
