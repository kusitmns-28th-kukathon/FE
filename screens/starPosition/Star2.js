import React from 'react';
import {
	View,
	SafeAreaView,
	ScrollView,
	Image,
	Text,
	StyleSheet,
	TextInput,
	TouchableOpacity,
	StatusBar,
} from 'react-native';
const Star2 = () => {
	const dummy = [1, 2, 3, 4, 5, 6, 7];
	const star1 = [
		{top: 85, left: 75},
		{top: 205, left: 195},
		{top: 155, left: 220},
		{top: 235, left: 265},
		{top: 305, left: 85},
		{top: 360, left: 185},
		{top: 300, left: 215},
	];
	return (
		<View>
			<View style={styles.starMap}>
				<Image
					style={styles.background}
					source={
						dummy.length === 7
							? require('../../assets/star2on.png')
							: require('../../assets/star2.png')
					}
				/>

				{star1.map((item, idx) => {
					if (idx < dummy.length) {
						return (
							<TouchableOpacity
								key={idx}
								// style={btn ? styles.star : styles.starOn}
								style={{position: 'absolute', top: item.top, left: item.left}}
								// onPrestss={() => navigation.navigate('Alarm')}
							>
								<Image source={require('../../assets/ShineStar.png')} />
							</TouchableOpacity>
						);
					}
				})}
			</View>
		</View>
	);
};

export default Star2;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#100D30',
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
		marginTop: -50,
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
