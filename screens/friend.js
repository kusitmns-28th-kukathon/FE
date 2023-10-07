import React, {useCallback, useState, useMemo, useRef, useEffect} from 'react';
import {
	View,
	Text,
	StyleSheet,
	Image,
	ScrollView,
	TouchableOpacity,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {LinearGradient} from 'expo-linear-gradient';
import Star1 from './starPosition/Star1';
import Star2 from './starPosition/Star2';
import Star3 from './starPosition/Star3';
import BottomSheet from '@gorhom/bottom-sheet';
import {accessTokenState} from '../states/auth';
import {useRecoilState} from 'recoil';
const FriendList = [
	{
		id: 1,
		name: '김철수',
		profile: require('../assets/profile.png'),
	},
	{
		id: 2,
		name: '한수현',
		profile: require('../assets/profile.png'),
	},
	{
		id: 3,
		name: '최호연',
		profile: require('../assets/profile.png'),
	},
	{
		id: 4,
		name: '박예진',
		profile: require('../assets/profile.png'),
	},
	{
		id: 5,
		name: '박예진',
		profile: require('../assets/profile.png'),
	},
	{
		id: 6,
		name: '박예진',
		profile: require('../assets/profile.png'),
	},
	{
		id: 7,
		name: '박예진',
		profile: require('../assets/profile.png'),
	},
	{
		id: 8,
		name: '박예진',
		profile: require('../assets/profile.png'),
	},
];

const Friend = () => {
	const navigation = useNavigation();
	const bottomSheetRef = useRef(null);
	const snapPoints = useMemo(() => ['50%', '14%'], []);
	const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
	const handleSheetChanges = useCallback(index => {
		console.log('handleSheetChanges', index);
	}, []);

	const friendList = () => {
		axios
			.get('http://3.37.52.73:80/friends', {
				headers: {
					access: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIyNyIsInJvbGVzIjoiVVNFUiIsImlhdCI6MTY5NjY4MDQ2MSwiZXhwIjoxNjk5MjcyNDYxfQ.O6CRZsSHuwu-tuRfvde4F-f86L2vbTcWVUVFDwbVvrY`,
				},
			})
			.then(() => {})
			.catch(function (error) {
				console.log(error);
			});
	};

	// 	<ScrollView
	// 		horizontal
	// 		contentContainerStyle={Styles.friendListBox1}
	// 		showsHorizontalScrollIndicator={false}
	// 		ref={ref => {
	// 			this.scrollView = ref;
	// 			// onChange={this.scrollView.scrollTo({x: 780})}
	// 		}}
	// 	>
	// 		<Star1 />
	// 		<Star2 />
	// 		<Star3 />
	// 	</ScrollView>
	// </SafeAreaView>

	const [lastArray, setLastArray] = useState(['fefwfewfe', 'efwefewfwef']);
	const [num, setNum] = useState(0);
	return (
		<LinearGradient colors={['#0A0026', '#200C5B']} style={Styles.container}>
			<SafeAreaView style={Styles.container}>
				<View style={Styles.header}>
					<Text style={Styles.Title}>친구의 별자리</Text>
					<View style={Styles.icon}>
						<TouchableOpacity
							style={Styles.iconSearch}
							onPress={() => navigation.navigate('Search')}
						>
							<Image source={require('../assets/search.png')} />
						</TouchableOpacity>
						<TouchableOpacity onPress={() => navigation.navigate('Alarm')}>
							<Image source={require('../assets/alarmWhite.png')} />
						</TouchableOpacity>
					</View>
				</View>
				<ScrollView
					horizontal
					contentContainerStyle={Styles.friendListBox}
					showsHorizontalScrollIndicator={false}
				>
					{FriendList.map((item, index) => (
						<View style={Styles.friendBox} key={index}>
							<Image source={item.profile} style={{width: 50, height: 50}} />
							<Text style={Styles.friendText}>{item.name}</Text>
						</View>
					))}
				</ScrollView>

				<ScrollView
					horizontal
					contentContainerStyle={Styles.friendListBox}
					showsHorizontalScrollIndicator={false}
					ref={ref => {
						this.scrollView = ref;
						// onChange={this.scrollView.scrollTo({x: 780})}
					}}
				>
					<Star1 />
					<Star2 />
					<Star3 />
				</ScrollView>
			</SafeAreaView>

			<BottomSheet
				ref={bottomSheetRef}
				index={1}
				snapPoints={snapPoints}
				onChange={handleSheetChanges}
				backgroundStyle={Styles.BottomSheetContainer}
			>
				<View style={Styles.contentContainer}>
					<View style={Styles.mainTitle}>
						<Text style={Styles.textTitle}>
							친구가 작성한 감사 일기를 확인해보세요.
						</Text>
						<View style={Styles.StarTitle}>
							<TouchableOpacity onPress={() => setNum(num + 1)}>
								<View style={Styles.StarDetail}>
									<Image
										source={
											num == 0
												? require('../assets/star.png')
												: require('../assets/starCheck.png')
										}
									/>
									<Text style={Styles.num}>{num}</Text>
								</View>
							</TouchableOpacity>
						</View>
					</View>
					{lastArray.map(item => (
						<View style={Styles.inputTag}>
							<Text>{item}</Text>
						</View>
					))}
				</View>
			</BottomSheet>
		</LinearGradient>
	);
};

export default Friend;

const Styles = StyleSheet.create({
	container: {
		flex: 1,

		padding: 10,
	},
	header: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingLeft: 10,
		paddingRight: 10,
		marginTop: -20,
		paddingBottom: 10,
		color: '#ffffff',
	},
	BottomSheetContainer: {
		opacity: 0.8,
		borderRadius: 20,
	},
	inputTag: {
		marginTop: 20,
		height: 50,
		width: 350,
		borderRadius: 100,
		padding: 10,
		backgroundColor: '#ffffff',
		verticalAlign: 'middle',
		lineHeight: 20,
		paddingTop: 15,
		paddingLeft: 25,
		marginLeft: 20,
	},

	mainTitle: {
		marginLeft: 20,
		marginTop: 20,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	textTitle: {
		fontStyle: 'normal',
		fontSize: 16,
		fontWeight: 'bold',
		color: '#24292F',
	},
	Title: {
		fontSize: 20,
		fontWeight: 'bold',
		marginBottom: 10,
		marginLeft: 10,
		marginTop: 20,
		color: '#ffffff',
	},
	StarTitle: {
		marginRight: 40,
	},
	StarDetail: {
		display: 'flex',
		flexDirection: 'row',
		textAlign: 'center',
	},
	num: {
		textAlign: 'center',
		marginTop: 4,
		marginLeft: 10,
	},
	NextBottom: {
		backgroundColor: 'purple',
		padding: 10,
		marginTop: '20%',
		width: '50%',
		alignSelf: 'center',
		borderRadius: 10,
		color: '#ffffff',
	},
	icon: {
		display: 'flex',
		flexDirection: 'row',
	},
	iconSearch: {
		marginRight: 20,
	},
	BottomText: {
		fontSize: 15,
		color: 'white',
		textAlign: 'center',
		color: '#ffffff',
	},
	friendListBox: {
		flexDirection: 'row',
		// padding: 10,
	},
	friendListBox1: {
		flexDirection: 'row',
		// padding: 10,
		marginTop: -10,
	},
	friendBox: {
		width: 70,
		alignItems: 'center',
	},
	friendText: {
		fontSize: 15,
		marginTop: 8,
		color: '#ffffff',
	},
});
