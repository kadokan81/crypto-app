import * as React from "react";
import { Image, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import MarketCoin from "../../components/MarcetCoin";
import RankingItem from "../../components/RankingItem";

import { styles } from "./styles";

// https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/1024/Ethereum-ETH-icon.png
// https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/1024/Ripple-XRP-icon.png
const userDate = [
	{
		id: 1,
		image: "https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/1024/Bitcoin-BTC-icon.png",
		name: "Alex",
		balance: 345566,
		changein24H: 3.15,
	},
	{
		id: 2,
		image: "https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/1024/Ethereum-ETH-icon.png",
		name: "Nata",
		balance: 145566,
		changein24H: -3.15,
	},
	{
		id: 3,
		image: "https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/1024/Ripple-XRP-icon.png",
		name: "Kadokan",
		balance: 45566,
		changein24H: -13.15,
	},
	{
		id: 4,
		image: "https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/1024/Bitcoin-BTC-icon.png",
		name: "Bitcoin",
		balance: 345566,
		changein24H: 3.15,
	},
];

const RankingScreen = () => {
	return (
		// <View>
		// 	<Text>Ranking</Text>
		// </View>
		<FlatList
			data={userDate}
			renderItem={({ item, index }) => (
				<RankingItem user={item} place={index + 1} />
			)}
			keyExtractor={(item) => item.id}
			ListHeaderComponentStyle={styles.container}
			ListHeaderComponent={() => (
				<>
					<Image
						source={require("../../assets/images/Saly-20.png")}
						style={styles.image}
					/>
					<Text style={styles.balance}>Ranking</Text>
				</>
			)}
		/>
	);
};

export default RankingScreen;
