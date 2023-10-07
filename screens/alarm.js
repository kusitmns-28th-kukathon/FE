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
        <TouchableOpacity style={Styles.inActiveButton}>
          <Text style={Styles.inActiveButtonText}>받은 요청</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Styles.inActiveButton}>
          <Text style={Styles.inActiveButtonText}>보낸 요청</Text>
        </TouchableOpacity>
      </View>

      <View style={Styles.bottom}>
        <ScrollView
          contentContainerStyle={Styles.friendListBox}
          showsHorizontalScrollIndicator={false}
        >
          {alarmList.map((alarm) => (
            <View style={Styles.alarmBox} key={alarm.id}>
              <View stlye={Styles.imageBox}>
                <Image
                  style={Styles.friendProfile}
                  source={require("../assets/purpleAlarm.png")}
                />
              </View>
              <View style={Styles.alarm}>
                <Text style={Styles.alarmContent}>
                  {alarm.name}님이 감사일기를 작성했어요.
                </Text>
                <Text style={Styles.alarmTime}>{alarm.time}</Text>
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
    marginLeft: 13,
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
  imageBox: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ddd",
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
    marginLeft: 15,
    marginRight: 15,
  },
  button: {
    width: 110,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#D0D7DE",
    padding: 10,
    borderRadius: 30,
  },
  inActiveButton: {
    width: 110,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#24292F",
    padding: 10,
    borderRadius: 30,
  },
  buttonText: {
    color: "#000",
  },
  inActiveButtonText: {
    color: "#fff",
  },
  time: {
    color: "#999",
  },

  alarmBox: {
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#373552",

    paddingTop: 8,
    paddingBottm: 8,
    gap: 10,
  },
  alarm: {
    width: "100%",
    flexDirection: "column",
    padding: 15,
    gap: 5,
  },
  alarmContent: {
    fontSize: 15,
    marginRight: 180,
    width: "100%",
    color: "#fff",
  },
  alarmTime: {
    fontSize: 15,
    color: "#888",
  },
});
