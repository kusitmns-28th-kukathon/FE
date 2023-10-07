import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { TextInput } from "react-native-gesture-handler";

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

const Search = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={Styles.container}>
      <View style={Styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate("Friend")}>
          <Image source={require("../assets/leftArrow.png")} />
        </TouchableOpacity>
        <Text style={Styles.Title}>친구 찾기</Text>
      </View>
      <TextInput
        style={Styles.searchBox}
        placeholder="이메일로 친구를 검색해보세요"
        placeholderTextColor="#8C959F"
      />

      <View style={Styles.bottom}>
        <View style={Styles.content}>
          <Text style={Styles.subtitle}>추천 친구</Text>
          <Text style={Styles.subcontent}>
            같이 별자리를 공유할 친구를 찾아보세요
          </Text>
        </View>
        <ScrollView
          contentContainerStyle={Styles.friendListBox}
          showsHorizontalScrollIndicator={false}
        >
          {FriendList.map((friend) => (
            <View style={Styles.friendBox} key={friend.id}>
              <View style={Styles.friendOne}>
                <Image style={Styles.friendProfile} source={friend.profile} />
                <View style={Styles.friend}>
                  <Text style={Styles.friendName}>{friend.name}</Text>
                  <TouchableOpacity style={Styles.plusButton}>
                    <Text>추가</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Search;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#100D30",
    padding: 15,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 15,
    paddingBottom: 10,
    gap: 130,
  },
  Title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
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
  searchBox: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 25,
    padding: 15,
    marginTop: 20,
    marginLeft: 18,
    marginRight: 18,
    color: "#fff",
  },
  content: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    marginTop: 20,
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  subcontent: {
    fontSize: 15,
    marginLeft: 10,
    color: "#888",
  },

  bottom: {
    paddingTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
  friendBox: {
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
  },
  friendOne: {
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 15,
    gap: 8,
    backgroundColor: "#272544",
    borderRadius: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  friend: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "spaceBetween",
    alignItems: "center",
    bakgroundColor: "#272544",
    borderRadius: 10,
    padding: 15,
  },
  friendName: {
    fontSize: 15,
    fontWeight: "bold",
    marginRight: 160,
    color: "#fff",
  },
  plusButton: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 15,
    backgroundColor: "#fff",
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 6,
    paddingBottom: 6,
  },
});
