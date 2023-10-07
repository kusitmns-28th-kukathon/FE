import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import SocialWebviewModal from './SocialWebviewModal';

const Signin = () => {
	const navigation = useNavigation();
	const [modalOpen, setModalOpen] = useState(false);

	const login = () => {
		setModalOpen(true);
		// navigation.navigate('KaKaoLogin', {screen: 'KaKaoLogin'});
	};

	return (
		<View style={Styles.container}>
			{modalOpen ? (
				<SocialWebviewModal setModalOpen={setModalOpen} />
			) : (
				<View>
					<Text style={Styles.HomeText}>로그인 화면</Text>
					<TouchableOpacity onPress={() => login()} style={Styles.NextBottom}>
						<Image
							style={Styles.kakao}
							source={require('../assets/kakao_login.png')}
						/>
					</TouchableOpacity>
				</View>
			)}
		</View>
	);
};

export default Signin;

const Styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
	HomeText: {
		fontSize: 30,
		textAlign: 'center',
	},
	// NextBottom: {
	// 	backgroundColor: 'purple',
	// 	padding: 10,
	// 	marginTop: '20%',

	// 	borderRadius: 10,
	// },
	BottomText: {
		fontSize: 15,
		color: 'white',
		textAlign: 'center',
	},
	kakao: {
		width: 350,
		height: 50,

		alignSelf: 'center',
	},
});
