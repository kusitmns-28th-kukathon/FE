import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Calendar } from "react-native-calendars";
import { format } from "date-fns";
import { SafeAreaView } from "react-native-safe-area-context";

const CalendarView = () => {
  const posts = [
    {
      id: 1,
      title: "26일이야",
      contents: "26일 내용입니다",
      date: "2023-10-26",
    },
    {
      id: 2,
      title: "27일이야",
      contents: "27일 내용입니다",
      date: "2023-10-27",
    },
  ];

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
    <SafeAreaView style={Styles.container}>
      <Calendar
        style={Styles.calendar}
        markedDates={markedSelectedDates}
        theme={{
          selectedDayBackgroundColor: "#009688",
          arrowColor: "#009688",
          dotColor: "#009688",
          todayTextColor: "#009688",
        }}
        onDayPress={handleDayPress}
      />
      {selectedPost && (
        <View>
          <Text style={Styles.Title}>제목: {selectedPost.title}</Text>
          <Text style={Styles.Content}>내용: {selectedPost.contents}</Text>
        </View>
      )}
    </SafeAreaView>
  );
};

export default CalendarView;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50,
    padding: 20,
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
  },
  Content: {
    fontSize: 15,
    marginLeft: 10,
  },
});
