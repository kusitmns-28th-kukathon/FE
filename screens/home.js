import React, {useCallback, useState, useMemo, useRef, useEffect} from 'react';
import {
	View,
	ScrollView,
	Image,
	Text,
	StyleSheet,
	TextInput,
	TouchableOpacity,
	StatusBar,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import axios from 'axios';
import BottomSheet from '@gorhom/bottom-sheet';
import {LinearGradient} from 'expo-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import Star1 from './starPosition/Star1';
import Star2 from './starPosition/Star2';
import Star3 from './starPosition/Star3';
import {accessTokenState} from '../states/auth';
import {useRecoilState} from 'recoil';

const Home = () => {
	const bottomSheetRef = useRef(null);
	const navigation = useNavigation();
	// variables
	const snapPoints = useMemo(() => ['50%', '14%'], []);
	const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

	// callbacks
	const handleSheetChanges = useCallback(index => {
		console.log('handleSheetChanges', index);
	}, []);

	const addList = value => {
		setBtn(!btn);
		// setTextArray([...textArray, value]);
	};

	const [textArray, setTextArray] = useState([1]);
	const [lastArray, setLastArray] = useState([]);
	const [value, onChangeText] = useState('');
	const [btn, setBtn] = useState(false);
	const arr = [
		{back: '../../assets/star1on.png', on: '../../assets/star2.png'},
		{back: '../../assets/star1on.png', on: '../../assets/star2.png'},
		{back: '../../assets/star3on.png', on: '../../assets/star3.png'},
	];

	const registrationBtn = () => {
		axios
			.post(
				'http://3.37.52.73:80/api/user/diary/add-diary',
				{contents: value},
				{
					headers: {
						access: accessToken,
					},
				},
			)
			.then(res => {
				alert('등록완료');
				setLastArray([...lastArray, value]);
				console.log(value);
				setBtn(false);
				onChangeText('');
			})
			.catch(function (error) {
				console.log(error);
			});
	};
	useEffect(() => {
		console.log(accessToken);
	}, [textArray.length]);

	return (
		<LinearGradient colors={['#0A0026', '#200C5B']} style={styles.container}>
			<StatusBar barStyle="light-content" />
			<View style={styles.header}>
				<Image style={styles.logo} source={require('../assets/homeLogo.png')} />
				<TouchableOpacity style={styles.alarm} onPress={() => setBtn(!btn)}>
					<Image source={require('../assets/alarmWhite.png')} />
				</TouchableOpacity>
			</View>
			{/* <SafeAreaView style={styles.container}> */}
			<SafeAreaView style={styles.container}>
				<ScrollView
					horizontal
					contentContainerStyle={styles.friendListBox}
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
				backgroundStyle={styles.BottomSheetContainer}
			>
				<View style={styles.contentContainer}>
					<View style={styles.mainTitle}>
						<Text style={styles.textTitle}>
							오늘 하루 감사했던 일은 무엇인가요?
						</Text>
						<View style={styles.PlusTitle}>
							<TouchableOpacity onPress={() => addList('')}>
								<Text style={styles.TextPlus}>+</Text>
							</TouchableOpacity>
						</View>
					</View>
					{!btn && lastArray.length == 0 ? (
						<View>
							<Text
								style={{
									position: 'absolute',
									top: 140,
									left: '22%',
									fontWeight: 'bold',
									fontSize: 16,
									color: '#57606A',
								}}
							>
								오늘의 감사일기를 적어보세요.
							</Text>
						</View>
					) : (
						<View style={styles.scrollView}>
							{textArray.map((item, idx) => (
								<TextInput
									key={idx}
									editable
									multiline
									placeholder="글을 작성해주세요!"
									autoFocus
									numberOfLines={4}
									maxLength={40}
									onChangeText={text => onChangeText(text)}
									value={value}
									style={styles.inputTag}
								/>
							))}
						</View>
					)}
					{!btn ? (
						lastArray.map(item => (
							<View style={styles.inputTag}>
								<Text>{item}</Text>
							</View>
						))
					) : (
						<View style={styles.registrationBtn}>
							<TouchableOpacity onPress={() => registrationBtn()}>
								<Text style={styles.TextRegister}>등록하기</Text>
							</TouchableOpacity>
						</View>
					)}
				</View>
			</BottomSheet>
			{/* </SafeAreaView> */}
		</LinearGradient>
	);
};

export default Home;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// backgroundColor: '#100D30',
	},
	contentContainer: {
		flex: 1,
		padding: 20,

		// width: 390,
		// position: 'relative',
		// display: 'flex',
		// marginTop: 50,
		// justifyContent: 'center',
	},
	header: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop: 15,
	},
	alarm: {
		marginTop: 60,
		marginRight: 30,
	},
	logo: {
		marginTop: 67,
		marginLeft: 30,
		width: 96,
		height: 18,
	},
	starMap: {
		position: 'relative',
	},
	star: {
		position: 'absolute',
		top: 425,
		left: 110,
		opacity: 1,
	},
	starOn: {
		position: 'absolute',
		top: 85,
		left: 75,
		opacity: 1,
	},
	scrollView: {
		height: 700,
		width: '100%',
		flex: 1,
		flexDirection: 'coulmn',
	},
	BottomSheetContainer: {
		opacity: 0.8,
		borderRadius: 20,
	},
	mainTitle: {
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
	PlusTitle: {
		backgroundColor: '#ffffff',
		width: 32,
		height: 32,
		borderRadius: 500,
		position: 'relative',
	},
	TextPlus: {
		textAlign: 'center',
		position: 'absolute',
		top: -3,
		left: 7,
		fontSize: 30,
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
	},

	registrationBtn: {
		position: 'absolute',
		left: 20,
		top: 300,
		borderRadius: 8,
		width: 350,
		height: 40,
		backgroundColor: '#7149E0',
	},
	TextRegister: {
		textAlign: 'center',
		color: '#ffffff',
		fontSize: 15,
		fontWeight: 'bold',
		lineHeight: 40,
	},
});
