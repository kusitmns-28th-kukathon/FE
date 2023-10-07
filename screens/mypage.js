import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Mypage = () => {
  return (
    <SafeAreaView style={Styles.container}>
      <Text style={Styles.HomeText}>Mypage 화면</Text>
    </SafeAreaView>
  );
};

export default Mypage;

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
    backgroundColor: "purple",
    padding: 10,
    marginTop: "20%",
    width: "50%",
    alignSelf: "center",
    borderRadius: 10,
  },
  BottomText: {
    fontSize: 15,
    color: "white",
    textAlign: "center",
  },
});
