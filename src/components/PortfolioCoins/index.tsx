import { useNavigation } from "@react-navigation/core";
import * as React from "react";
import { Image, Pressable, Text, View } from "react-native";
import { styles } from "./styles";

export interface PortfolioCoinProps {
	coinDataProps: {
		image: string;
		name: string;
		symbol: string;
		amount: number;
		price: number;
	};
}

const PortfolioCoin: React.FC<PortfolioCoinProps> = ({ coinDataProps }) => {
	const { name, image, symbol, amount, price } = coinDataProps;
	const total = (amount * price).toFixed(1);
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
					<Text style={styles.total}>${total}</Text>
					<Text style={styles.simbol}>
						{symbol} {amount}
					</Text>
				</View>
			</View>
		</Pressable>
	);
};

export default PortfolioCoin;
