import React from "react";
import { View, Text, StatusBar, TouchableOpacity, Image } from "react-native";

const HomeScreen = ({ navigation }) => {
	return (
		<View
			style={{
				flex: 1,
				backgroundColor: "#B8FBF3",

				alignItems: "center",
			}}
		>
			<Image
				style={{
					marginTop: "15%",
					width: "100%",
					height: "30%",
					resizeMode: "stretch",
				}}
				source={require("../assets/logo.jpg")}
			/>
			<StatusBar
				hidden={false}
				backgroundColor="#B8FBF3"
				barStyle={"dark-content"}
			/>
			<Text
				style={{
					fontSize: 55,
					textAlign: "center",
					backgroundColor: "#2cff",
					color: "white",
					borderColor: "black",
					borderRadius: 22,
					borderWidth: 5,
					width: "60%",
				}}
			>
				Reactris
			</Text>
			<TouchableOpacity
				style={{ width: "35%", marginTop: "15%" }}
				onPress={() => navigation.navigate("GameScreen")}
			>
				<Text
					style={{
						fontSize: 35,
						textAlign: "center",
						backgroundColor: "#2cff",
						color: "white",
						borderColor: "black",
						borderRadius: 22,
						borderWidth: 5,
					}}
				>
					Oyna
				</Text>
			</TouchableOpacity>
		</View>
	);
};

export default HomeScreen;
