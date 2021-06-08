import * as React from "react";
import { Image, Text } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import PortfolioCoin from "../../components/PortfolioCoins";

import { styles } from "./styles";

// https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/1024/Ethereum-ETH-icon.png
// https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/1024/Ripple-XRP-icon.png
const coinDate = [
	{
		id: 1,
		image: "https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/1024/Bitcoin-BTC-icon.png",
		name: "Bitcoin",
		symbol: "BTC",
		amount: 1.23,
		price: 45566,
	},
	{
		id: 2,
		image: "https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/1024/Ethereum-ETH-icon.png",
		name: "Ethereum",
		symbol: "ETH",
		amount: 30,
		price: 1200,
	},
	{
		id: 3,
		image: "https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/1024/Ripple-XRP-icon.png",
		name: "Ripple",
		symbol: "XRP",
		amount: 1200,
		price: 0.9,
	},
	{
		id: 8,
		image: "https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/1024/Bitcoin-BTC-icon.png",
		name: "Bitcoin",
		symbol: "BTC",
		amount: 1.23,
		price: 45566,
	},
	{
		id: 9,
		image: "https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/1024/Ethereum-ETH-icon.png",
		name: "Ethereum",
		symbol: "ETH",
		amount: 30,
		price: 1200,
	},
	{
		id: 10,
		image: "https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/1024/Ripple-XRP-icon.png",
		name: "Ripple",
		symbol: "XRP",
		amount: 1200,
		price: 0.9,
	},
	{
		id: 4,
		image: "https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/1024/Bitcoin-BTC-icon.png",
		name: "Bitcoin",
		symbol: "BTC",
		amount: 1.23,
		price: 45566,
	},
	{
		id: 5,
		image: "https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/1024/Ethereum-ETH-icon.png",
		name: "Ethereum",
		symbol: "ETH",
		amount: 30,
		price: 1200,
	},
	{
		id: 6,
		image: "https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/1024/Ripple-XRP-icon.png",
		name: "Ripple",
		symbol: "XRP",
		amount: 1200,
		price: 0.9,
	},
];

const Portfolio = () => {
	return (
		<FlatList
			data={coinDate}
			renderItem={({ item }) => <PortfolioCoin coinDataProps={item} />}
			keyExtractor={(item) => item.id}
			ListHeaderComponentStyle={styles.container}
			ListHeaderComponent={() => (
				<>
					<Image
						source={require("../../assets/images/Saly-10.png")}
						style={styles.image}
					/>
					<Text style={styles.title}>Portfolio balance</Text>
					<Text style={styles.balance}>$69.456</Text>
				</>
			)}
		/>
	);
};

export default Portfolio;
