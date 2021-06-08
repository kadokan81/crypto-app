import * as React from "react";
import { Image, Text } from "react-native";
import { View } from "../../components/Themed";
import { styles } from "./styles";

export interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
	return (
		<View style={styles.container}>
			<Image
				source={require("../../assets/images/Saly-1.png")}
				style={styles.image}
			/>
			<Text style={styles.mainHeader}>Welcome to VCrypto</Text>
			<Text style={styles.text}>Invest your virtual $100.000 and</Text>
			<Text style={styles.text}>compite with others</Text>
		</View>
	);
};

export default Home;
