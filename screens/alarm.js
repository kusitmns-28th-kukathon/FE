import React, { useState } from "react";
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
import axios from "axios";

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

const responseList = [
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
];

const resquestList = [
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
  {
    id: 4,
    name: "김철수",
    time: "8:45 PM",
  },
];

const Alarm = () => {
  const navigation = useNavigation();
  const [activeFilter, setActiveFilter] = useState(1);
  const [responseLists, setResponseList] = useState([]);
  const [resquestLists, setResquestList] = useState([]);

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  const alarmSend = () => {
    axios
      .post("http://3.37.52.73:80/send-alarm", {
        headers: {
          access: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIyNyIsInJvbGVzIjoiVVNFUiIsImlhdCI6MTY5NjY4MDQ2MSwiZXhwIjoxNjk5MjcyNDYxfQ.O6CRZsSHuwu-tuRfvde4F-f86L2vbTcWVUVFDwbVvrY`,
        },
      })
      .then(() => {})
      .catch(function (error) {
        console.log(error);
      });
  };

  const ResponseList = () => {
    axios
      .get("http://3.37.52.73:80/friend/received-request", {
        headers: {
          access: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIyNyIsInJvbGVzIjoiVVNFUiIsImlhdCI6MTY5NjY4MDQ2MSwiZXhwIjoxNjk5MjcyNDYxfQ.O6CRZsSHuwu-tuRfvde4F-f86L2vbTcWVUVFDwbVvrY`,
        },
      })
      .then((res) => {
        setResponseList(res.data.requests);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const RequestList = () => {
    axios
      .get("http://3.37.52.73:80/friend/sent-request", {
        headers: {
          access: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIyNyIsInJvbGVzIjoiVVNFUiIsImlhdCI6MTY5NjY4MDQ2MSwiZXhwIjoxNjk5MjcyNDYxfQ.O6CRZsSHuwu-tuRfvde4F-f86L2vbTcWVUVFDwbVvrY`,
        },
      })
      .then((res) => {
        setResquestList(res.data.requests);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  alarmSend();
  ResponseList();
  RequestList();

  return (
    <SafeAreaView style={Styles.container}>
      <View style={Styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate("Calendar")}>
          <Image source={require("../assets/leftArrow.png")} />
        </TouchableOpacity>
        <Text style={Styles.Title}>알림</Text>
      </View>

      <View style={Styles.buttonBox}>
        <TouchableOpacity
          style={[
            Styles.button,
            activeFilter === 1 ? Styles.activeButton : Styles.inActiveButton,
          ]}
          onPress={() => handleFilterChange(1)}
        >
          <Text
            style={
              activeFilter === 1
                ? Styles.activeButtonText
                : Styles.inActiveButtonText
            }
          >
            친구의 감사
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            Styles.inActiveButton,
            activeFilter === 2 ? Styles.activeButton : Styles.inActiveButton,
          ]}
          onPress={() => handleFilterChange(2)}
        >
          <Text
            style={
              activeFilter === 2
                ? Styles.activeButtonText
                : Styles.inActiveButtonText
            }
          >
            받은 요청
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            Styles.inActiveButton,
            activeFilter === 3 ? Styles.activeButton : Styles.inActiveButton,
          ]}
          onPress={() => handleFilterChange(3)}
        >
          <Text
            style={
              activeFilter === 3
                ? Styles.activeButtonText
                : Styles.inActiveButtonText
            }
          >
            보낸 요청
          </Text>
        </TouchableOpacity>
      </View>

      <View style={Styles.bottom}>
        <ScrollView
          contentContainerStyle={Styles.friendListBox}
          showsHorizontalScrollIndicator={false}
        >
          {activeFilter === 1 &&
            alarmList.map((alarm) => (
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

          {activeFilter === 2 &&
            responseList.map((alarm) => (
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

          {activeFilter === 3 &&
            resquestList.map((alarm) => (
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
  activeButton: {
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
  activeButtonText: {
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
