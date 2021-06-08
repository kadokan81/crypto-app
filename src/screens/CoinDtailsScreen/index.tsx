import * as React from "react";
import { Image, Pressable, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export interface CoinDetailsScreenProps {}

const coinData = {
	id: 1,
	image: "https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/1024/Bitcoin-BTC-icon.png",
	name: "Bitcoin",
	symbol: "BTC",
	amount: 1.5,
	changein1H: -1.55,
	changein24H: 3.15,
	changein7d: -10.15,
	price: 45568,
};

const CoinDetailsScreen: React.FC<CoinDetailsScreenProps> = () => {
	return (
		<View style={{ flex: 1, padding: 20 }}>
			<View
				style={{
					flexDirection: "row",
					alignItems: "center",
					marginBottom: 20,
					height: 60,
				}}>
				<Image
					source={{
						uri: coinData.image,
					}}
					style={{ width: 50, height: 50, marginRight: 20 }}
				/>
				<View>
					<Text style={{ fontSize: 20 }}>{coinData.name}</Text>
					<Text>{coinData.symbol}</Text>
				</View>
				<View
					style={{
						marginLeft: "auto",
						alignItems: "center",
					}}>
					<AntDesign
						name='star'
						size={24}
						color='gold'
						style={{ marginBottom: 5 }}
					/>
					<Text>Watch</Text>
				</View>
			</View>

			{/* ========================PRICE=================== */}
			<View
				style={{
					flexDirection: "row",
					alignItems: "center",
					justifyContent: "space-around",
					marginBottom: 20,
					height: 70,
				}}>
				<View style={{ marginRight: "auto" }}>
					<Text style={{ marginBottom: 10 }}>Current Price</Text>
					<Text style={{ fontSize: 28, fontWeight: "bold" }}>
						${coinData.price}
					</Text>
				</View>
				<View style={{ alignItems: "center", marginRight: 10 }}>
					<Text style={{ marginBottom: 10 }}>1 hour</Text>
					<Text
						style={{
							fontSize: 24,
							color: coinData.changein1H > 0 ? "green" : "red",
						}}>
						{coinData.changein1H > 0 && "+"}
						{coinData.changein1H}%
					</Text>
				</View>
				<View style={{ alignItems: "center", marginRight: 10 }}>
					<Text style={{ marginBottom: 10 }}>24 hour</Text>
					<Text
						style={{
							fontSize: 24,
							color: coinData.changein24H > 0 ? "green" : "red",
						}}>
						{coinData.changein24H > 0 && "+"}
						{coinData.changein24H}%
					</Text>
				</View>
				<View style={{ alignItems: "center" }}>
					<Text style={{ marginBottom: 10 }}>7 day</Text>
					<Text
						style={{
							fontSize: 24,
							color: coinData.changein7d > 0 ? "green" : "red",
						}}>
						{coinData.changein7d > 0 && "+"}
						{coinData.changein7d}%
					</Text>
				</View>
			</View>
			{/* ============Position============ */}
			<View
				style={{
					marginTop: 20,
					justifyContent: "space-between",
					alignItems: "center",
					flexDirection: "row",
				}}>
				<Text style={{ fontWeight: "bold", fontSize: 20 }}>
					Position
				</Text>
				<Text style={{ fontSize: 20 }}>
					{coinData.symbol} {coinData.amount}
					{"  "}
					($
					{coinData.price * coinData.amount})
				</Text>
			</View>
			{/* =================button block	================== */}
			<View
				style={{
					flexDirection: "row",
					marginTop: "auto",
					marginBottom: 20,
					justifyContent: "space-around",
				}}>
				<Pressable
					style={{
						width: "45%",
						height: 50,
						borderRadius: 25,
						backgroundColor: "green",
						justifyContent: "center",
						alignItems: "center",
					}}>
					<Text
						style={{
							fontSize: 20,
							color: "white",
							fontWeight: "bold",
						}}>
						Buy
					</Text>
				</Pressable>
				<Pressable
					style={{
						width: "45%",
						height: 50,
						borderRadius: 25,
						backgroundColor: "red",
						justifyContent: "center",
						alignItems: "center",
					}}>
					<Text
						style={{
							fontSize: 20,
							color: "white",
							fontWeight: "bold",
						}}>
						Sell
					</Text>
				</Pressable>
			</View>
		</View>
	);
};

export default CoinDetailsScreen;
