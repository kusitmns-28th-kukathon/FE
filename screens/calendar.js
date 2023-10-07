import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Calendar } from "react-native-calendars";
import { format } from "date-fns";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

const posts = [
  {
    id: 1,
    contents: ["26일 내용입니다", "26일 내용입니다2", "26일 내용입니다3"],
    date: "2023-10-26",
  },
  {
    id: 2,
    contents: ["27일 내용입니다2", "27일 내용입니다3"],
    date: "2023-10-27",
  },
  {
    id: 3,
    contents: [
      "18일 내용입니다",
      "18일 내용입니다",
      "18일 내용입니다",
      "18일 내용입니다",
    ],
    date: "2023-10-18",
  },
];

const calendarTheme = {
  calendarBackground: "#100D30",
  textSectionTitleColor: "#fff",
  selectedDayBackgroundColor: "#4619C5",
  arrowColor: "#fff",
  dotColor: "#AD97ED",
  todayTextColor: "#fff",
  textMonthFontSize: 20,
  textDisabledColor: "#fff",
  textInactiveColor: "#fff",
  textDayHeaderFontWeight: "bold",
  textDayHeaderFontColor: "#fff",
  textDayFontWeight: "bold",
  dayTextColor: "#fff",
  textDisabledColor: "gray",
  monthTextColor: "#fff",
};

const CalendarView = () => {
  const navigation = useNavigation();

  const markedDates = posts.reduce((acc, current) => {
    const formattedDate = format(new Date(current.date), "yyyy-MM-dd");
    acc[formattedDate] = { marked: true };
    return acc;
  }, {});

  const [selectedDate, setSelectedDate] = useState(
    format(new Date(), "yyyy-MM-dd")
  );
  const [selectedPost, setSelectedPost] = useState(null);

  const markedSelectedDates = {
    ...markedDates,
    [selectedDate]: {
      selected: true,
      marked: markedDates[selectedDate]?.marked,
    },
  };

  const handleDayPress = (day) => {
    setSelectedDate(day.dateString);
    const selectedPost = posts.find((post) => post.date === day.dateString);
    setSelectedPost(selectedPost);
  };

  return (
    <LinearGradient colors={["#0A0026", "#200C5B"]} style={Styles.container}>
      <View style={Styles.header}>
        <Text style={Styles.Title}>캘린더</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Alarm")}>
          <Image source={require("../assets/alarmWhite.png")} />
        </TouchableOpacity>
      </View>
      <Calendar
        style={Styles.calendar}
        markedDates={markedSelectedDates}
        theme={calendarTheme}
        onDayPress={handleDayPress}
      />
      {selectedPost && (
        <View>
          <Text style={Styles.Title}>{selectedPost.title}</Text>
          {selectedPost.contents.map((content, index) => (
            <Text key={index} style={Styles.Content}>
              {content}
            </Text>
          ))}
        </View>
      )}
    </LinearGradient>
  );
};

export default CalendarView;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
    paddingTop: 30,
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
  calendar: {
    color: "#fff",
  },
  Title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    marginLeft: 10,
    marginTop: 20,
    color: "#fff",
  },
  Content: {
    fontSize: 15,
    marginLeft: 10,
    marginBottom: 10,
    padding: 13,
    borderWidth: 2,
    borderRadius: 25,
    borderColor: "#EDE8FB",
    backgroundColor: "#fff",
    overflow: "hidden",
    opacity: 0.8,
  },
});
