import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const FriendList = [
  {
    id: 1,
    name: "김철수",
    profile: require("../assets/profile.png"),
  },
  {
    id: 2,
    name: "한수현",
    profile: require("../assets/profile.png"),
  },
  {
    id: 3,
    name: "최호연",
    profile: require("../assets/profile.png"),
  },
  {
    id: 4,
    name: "박예진",
    profile: require("../assets/profile.png"),
  },
  {
    id: 5,
    name: "박예진",
    profile: require("../assets/profile.png"),
  },
  {
    id: 6,
    name: "박예진",
    profile: require("../assets/profile.png"),
  },
  {
    id: 7,
    name: "박예진",
    profile: require("../assets/profile.png"),
  },
  {
    id: 8,
    name: "박예진",
    profile: require("../assets/profile.png"),
  },
];

const Friend = () => {
  return (
    <SafeAreaView style={Styles.container}>
      <View style={Styles.header}>
        <Text style={Styles.Title}>친구의 별자리</Text>
        <Image source={require("../assets/alarm.png")} />
      </View>
      <ScrollView
        horizontal
        contentContainerStyle={Styles.friendListBox}
        showsHorizontalScrollIndicator={false}
      >
        {FriendList.map((item, index) => (
          <View style={Styles.friendBox} key={index}>
            <Image source={item.profile} style={{ width: 50, height: 50 }} />
            <Text style={Styles.friendText}>{item.name}</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Friend;

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
