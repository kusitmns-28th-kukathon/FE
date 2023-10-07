import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Friend = () => {
  return (
    <View style={Styles.container}>
      <Text style={Styles.HomeText}>Friend 화면</Text>
    </View>
  );
};

export default Friend;

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
