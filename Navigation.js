import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Image } from "react-native";

import Home from "./screens/home";
import Login from "./screens/Login";
import Friend from "./screens/friend";
import MyPage from "./screens/mypage";
import Splash from "./screens/splash";
import Calendar from "./screens/calendar";
import Search from "./screens/search";
import Alarm from "./screens/alarm";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const activeHomeIcon = require("./assets/navigation/home1.png");
const inactiveHomeIcon = require("./assets/navigation/home.png");

const activeCalendarIcon = require("./assets/navigation/calendar1.png");
const inactiveCalendarIcon = require("./assets/navigation/calendar.png");

const activeFriendIcon = require("./assets/navigation/friend1.png");
const inactiveFriendIcon = require("./assets/navigation/friend.png");

const activeMyIcon = require("./assets/navigation/my1.png");
const inactiveMyIcon = require("./assets/navigation/my.png");

function TabNavigator() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        labelStyle: {
          color: "black",
        },
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen
        name="홈"
        component={Home}
        options={({ route }) => ({
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? activeHomeIcon : inactiveHomeIcon}
              style={{ width: 24, height: 24 }}
            />
          ),
          headerShown: false,
        })}
      />
      <Tab.Screen
        name="캘린더"
        component={Calendar}
        options={({ route }) => ({
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? activeCalendarIcon : inactiveCalendarIcon}
              style={{ width: 24, height: 24 }}
            />
          ),
          headerShown: false,
        })}
      />
      <Tab.Screen
        name="친구별"
        component={Friend}
        options={({ route }) => ({
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? activeFriendIcon : inactiveFriendIcon}
              style={{ width: 24, height: 24 }}
            />
          ),
          headerShown: false,
        })}
      />
      <Tab.Screen
        name="마이"
        component={MyPage}
        options={({ route }) => ({
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? activeMyIcon : inactiveMyIcon}
              style={{ width: 24, height: 24 }}
            />
          ),
          headerShown: false,
        })}
      />
    </Tab.Navigator>
  );
}

function StackScreen() {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen
        name="Home"
        component={TabNavigator}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Search"
        component={Search}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Friend"
        component={Friend}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Alarm"
        component={Alarm}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Calendar"
        component={Calendar}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

function Navigation() {
  return (
    <NavigationContainer>
      <StackScreen />
    </NavigationContainer>
  );
}

export default Navigation;
