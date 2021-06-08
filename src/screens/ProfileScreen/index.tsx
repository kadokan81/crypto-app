import * as React from "react";
import { Image, Pressable, Text } from "react-native";
import { View } from "../../components/Themed";
import Colors from "../../constants/Colors";
import { styles } from "./sryles";

export interface ProfileProps {}

const Profile: React.FC<ProfileProps> = () => {
	const [user, setUser] = React.useState({
		id: 1,
		name: "Alexandr",
		email: "kadokan@gmail.com",
		image: "https://randomuser.me/api/portraits/men/32.jpg",
		balance: 304455,
	});
	const onSignOut = () => {
		console.warn("Sin Out");
	};
	return (
		<View
			style={{
				flex: 1,
				justifyContent: "center",
				alignItems: "center",
				padding: 20,
			}}>
			<Image
				source={require("../../assets/images/Saly-16.png")}
				style={styles.image}
			/>
			<Text style={{ marginBottom: 30 }}>Profile</Text>
			<View
				style={{
					width: "100%",
					flexDirection: "row",
					alignItems: "center",
					justifyContent: "space-around",
				}}>
				<Image
					source={{ uri: user.image }}
					style={{ width: 60, height: 60, borderRadius: 55 }}
				/>
				<View style={{ marginLeft: -30 }}>
					<Text style={{ fontSize: 20, fontWeight: "bold" }}>
						{user.name}
					</Text>
					<Text>{user.email}</Text>
				</View>
				<View>
					<Text style={{ fontSize: 20, fontWeight: "bold" }}>
						${user.balance}
					</Text>
				</View>
			</View>
			<Pressable
				style={{
					marginTop: "auto",
					width: 200,
					height: 50,
					borderWidth: 2,
					borderRadius: 25,
					borderColor: Colors.light.title,
					alignSelf: "center",
					justifyContent: "center",
				}}
				onPress={onSignOut}>
				<Text
					style={{
						alignSelf: "center",
						color: Colors.light.green,
						fontSize: 25,
						fontWeight: "bold",
					}}>
					Sign Out
				</Text>
			</Pressable>
		</View>
	);
};

export default Profile;
