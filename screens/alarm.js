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

const alarmList = [
  {
    id: 1,
    name: "김철수",
    time: "8:45 PM",
  },
  {
    id: 2,
    name: "김철수",
    time: "8:45 PM",
  },
  {
    id: 3,
    name: "김철수",
    time: "8:45 PM",
  },
];

const Alarm = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={Styles.container}>
      <View style={Styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate("Calendar")}>
          <Image source={require("../assets/leftArrow.png")} />
        </TouchableOpacity>
        <Text style={Styles.Title}>알림</Text>
      </View>

      <View style={Styles.buttonBox}>
        <TouchableOpacity style={Styles.button}>
          <Text style={Styles.buttonText}>친구의 감사</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Styles.button}>
          <Text style={Styles.buttonText}>받은 요청</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Styles.button}>
          <Text style={Styles.buttonText}>보낸 요청</Text>
        </TouchableOpacity>
      </View>

      <View style={Styles.bottom}>
        <View style={Styles.content}>
          <Text style={Styles.subtitle}>친구 추천</Text>
          <Text style={Styles.subcontent}>
            같이 별자리를 공유할 친구를 찾아보세요
          </Text>
        </View>
        <ScrollView
          contentContainerStyle={Styles.friendListBox}
          showsHorizontalScrollIndicator={false}
        >
          {alarmList.map((alarm) => (
            <View style={Styles.friendBox} key={alarm.id}>
              <View style={Styles.friendOne}>
                <Image style={Styles.friendProfile} source={alarm.profile} />
                <View style={Styles.friend}>
                  <Text style={Styles.friendName}>
                    {alarm.name}님이 감사일기를 작성했어요.
                  </Text>
                  <Text style={Styles.time}>{alarm.time}</Text>
                </View>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Alarm;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
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
    marginTop: 10,
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
    gap: 15,
  },
  friend: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "spaceBetween",
    alignItems: "center",
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 10,
    padding: 15,
  },
  friendName: {
    fontSize: 15,
    fontWeight: "bold",
    marginRight: 180,
  },
  plusButton: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
  },

  buttonBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  button: {
    width: 120,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
    padding: 10,
    borderRadius: 30,
  },
  buttonText: {
    color: "#fff",
  },
  time: {
    color: "#999",
  },
});
