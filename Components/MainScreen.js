import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import HomeTab from './AppTabNavigator/HomeTab';
import SearchTab from './AppTabNavigator/SearchTab';
import AddMediaTab from './AppTabNavigator/AddMediaTab';
import LikesTab from './AppTabNavigator/LikesTab';
import ProfileTab from './AppTabNavigator/ProfileTab';

import { Icon } from 'native-base';

class MainScreen extends React.Component {
	render() {
		return <AppContainer />;
	}
}

export default MainScreen;

const AppTabNavigator = createBottomTabNavigator(
	{
		HomeTab: {
			screen: HomeTab,
			navigationOptions: () => ({
				tabBarIcon: ({ tintColor }) => (
					<Icon name='md-home' style={{ color: tintColor }} />
				)
			})
		},
		SearchTab: {
			screen: SearchTab,
			navigationOptions: () => ({
				tabBarIcon: ({ tintColor }) => (
					<Icon name='ios-search' style={{ color: tintColor }} />
				)
			})
		},
		AddMediaTab: {
			screen: AddMediaTab,
			navigationOptions: () => ({
				tabBarIcon: ({ tintColor }) => (
					<Icon name='ios-add-circle' style={{ color: tintColor }} />
				)
			})
		},
		LikesTab: {
			screen: LikesTab,
			navigationOptions: () => ({
				tabBarIcon: ({ tintColor }) => (
					<Icon name='md-heart' style={{ color: tintColor }} />
				)
			})
		},
		ProfileTab: {
			screen: ProfileTab,
			navigationOptions: () => ({
				tabBarIcon: ({ tintColor }) => (
					<Icon name='md-person' style={{ color: tintColor }} />
				)
			})
		}
	},
	{
		tabBarOptions: {
			activeTintColor: '#000',
			inactiveTintColor: '#ccc',
			showLabel: false,
			showIcon: true
		}
	}
);

const AppContainer = createAppContainer(AppTabNavigator);
