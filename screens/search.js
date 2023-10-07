import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Search = () => {
  return (
    <SafeAreaView style={Styles.container}>
      <View style={Styles.header}>
        <Text style={Styles.Title}>친구의 별자리</Text>
        <Image source={require("../assets/search.png")} />
      </View>
      <ScrollView
        contentContainerStyle={Styles.friendListBox}
        showsHorizontalScrollIndicator={false}
      ></ScrollView>
    </SafeAreaView>
  );
};

export default Search;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 15,
    paddingBottom: 10,
  },
  Title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    marginLeft: 10,
    marginTop: 20,
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
  friendListBox: {
    flexDirection: "row",
    padding: 10,
  },
  friendBox: {
    width: 70,
    alignItems: "center",
  },
  friendText: {
    fontSize: 15,
    marginTop: 8,
  },
});
