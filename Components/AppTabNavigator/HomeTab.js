import React, { Component } from 'react';
import { View } from 'react-native';
import Stories from '../Stories';
import CardComponent from '../CardComponent';
import { ScrollView } from 'react-native-gesture-handler';

class HomeTab extends Component {
	render() {
		return (
			<View>
				<ScrollView showsVerticalScrollIndicator={false}>
					<Stories />
					<CardComponent
						name='avengers'
						profileSource='1'
						imageSource='1'
						likes='1001'
					/>
					<CardComponent
						name='ironman'
						profileSource='2'
						imageSource='2'
						likes='3000'
					/>
					<CardComponent
						name='blackwidow'
						profileSource='3'
						imageSource='3'
						likes='10101'
					/>
				</ScrollView>
			</View>
		);
	}
}

export default HomeTab;
