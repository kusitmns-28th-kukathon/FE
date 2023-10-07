import React, { useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Splash = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate("Login");
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={Styles.container}>
      <Image
        source={require("../assets/splash.gif")}
        style={{ width: "100%", height: "100%" }}
      />
    </View>
  );
};

export default Splash;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
