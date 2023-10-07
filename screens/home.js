
import React, {useCallback, useState, useMemo, useRef} from 'react';
import {
	View,
	SafeAreaView,
	ScrollView,
	Text,
	StyleSheet,
	TextInput,
	TouchableOpacity,
} from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';

const Home = () => {
	const bottomSheetRef = useRef(null);

	// variables
	const snapPoints = useMemo(() => ['50%', '14%'], []);

	// callbacks
	const handleSheetChanges = useCallback(index => {
		console.log('handleSheetChanges', index);
	}, []);

	const addList = value => {
		setTextArray([...textArray, value]);
	};

	const [textArray, setTextArray] = useState([]);
	const [value, onChangeText] = useState('');

	return (
		<SafeAreaView style={styles.container}>
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
					<View style={styles.registrationBtn}>
						<TouchableOpacity onPress={() => registrationBtn()}>
							<Text style={styles.TextRegister}>등록하기</Text>
						</TouchableOpacity>
					</View>
				</View>
			</BottomSheet>
		</SafeAreaView>
	);

};

export default Home;

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
		top: 250,
		borderRadius: 8,
		// bottom: 0,
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
