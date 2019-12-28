import React from 'react';
import { Text, View, ScrollView, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import images from '../assets/images/index';

const datas = [
	{
		name: 'Corgi',
		source: images.images.pic3
	},
	{
		name: 'Avengers',
		source: images.profile.avengers
	},
	{
		name: 'Iron Man',
		source: images.profile.ironman
	},
	{
		name: 'Black Panther',
		source: images.profile.black_panther
	},
	{
		name: 'Black Widow',
		source: images.profile.black_widow
	},
	{
		name: 'Hawkeye',
		source: images.profile.hawkeye
	}
];

const renderItem = item => (
	<View>
		<LinearGradient
			colors={['#e54167', '#faa448']}
			key={item.name}
			style={styles.itemContainer}
		>
			<View style={styles.itemWrapper}>
				<Image
					source={item.source}
					style={styles.itemImage}
					resizeMode='cover'
				/>
			</View>
		</LinearGradient>
		<Text style={{ alignSelf: 'center', fontSize: 12 }}>{item.name}</Text>
	</View>
);

class Stories extends React.Component {
	render() {
		return (
			<ScrollView
				contentContainerStyle={styles.container}
				renderItem={renderItem}
				showsHorizontalScrollIndicator={false}
				horizontal
			>
				{datas.map(renderItem)}
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		paddingTop: 8,
		paddingBottom: 8
	},
	itemContainer: {
		width: 65,
		height: 65,
		borderRadius: 32.5,
		alignItems: 'center',
		justifyContent: 'center',
		margin: 8
	},
	itemWrapper: {
		width: 60,
		height: 60,
		borderRadius: 30
	},
	itemImage: {
		width: 60,
		height: 60,
		borderRadius: 30,
		borderColor: 'white',
		borderWidth: 2
	}
});

export default Stories;
