import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import SocialWebviewModal from "./SocialWebviewModal";
import { LinearGradient } from "expo-linear-gradient";

const Login = () => {
  const navigation = useNavigation();
  const [modalOpen, setModalOpen] = useState(false);

  const login = () => {
    setModalOpen(true);
    // navigation.navigate('KaKaoLogin', {screen: 'KaKaoLogin'});
  };

  return (
    <LinearGradient colors={["#0A0026", "#200C5B"]} style={Styles.container}>
      {modalOpen ? (
        <SocialWebviewModal setModalOpen={setModalOpen} />
      ) : (
        <View>
          <Image style={Styles.logo} source={require("../assets/logo.png")} />
          <TouchableOpacity onPress={() => login()} style={Styles.NextBottom}>
            <Image
              style={Styles.kakao}
              source={require("../assets/kakao.png")}
            />
            <Image
              style={Styles.kakao}
              source={require("../assets/apple.png")}
            />
          </TouchableOpacity>
        </View>
      )}
    </LinearGradient>
  );
};

export default Login;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  HomeText: {
    fontSize: 30,
    textAlign: "center",
  },
  NextBottom: {
    gap: 20,
  },
  BottomText: {
    fontSize: 15,
    color: "white",
    textAlign: "center",
  },
  kakao: {
    width: 350,
    height: 50,
    alignSelf: "center",
  },
  logo: {
    width: 200,
    height: 180,
    marginTop: 250,
    marginBottom: 160,
    alignSelf: "center",
  },
});
