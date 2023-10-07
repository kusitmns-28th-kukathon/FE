import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';

import Home from './screens/home';
import Calendar from './screens/calendar';
import Friend from './screens/friend';
import MyPage from './screens/mypage';
import Splash from './screens/splash';
import KakaoLogin from './screens/kakaoLogin';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function TabNavigator() {
	return (
		<Tab.Navigator>
			<Tab.Screen
				name="홈"
				component={Home}
				options={{
					headerShown: false,
				}}
			/>
			<Tab.Screen
				name="캘린더"
				component={Calendar}
				options={{
					headerShown: false,
				}}
			/>
			<Tab.Screen
				name="친구"
				component={Friend}
				options={{
					headerShown: false,
				}}
			/>
			<Tab.Screen
				name="마이"
				component={MyPage}
				options={{
					headerShown: false,
				}}
			/>
		</Tab.Navigator>
	);
}

function StackScreen() {
	return (
		<Stack.Navigator initialRouteName="Splash">
			<Stack.Screen name="Splash" component={Splash} />
			<Stack.Screen name="KakaoLogin" component={KakaoLogin} />
			<Stack.Screen name="Home" component={TabNavigator} />
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
