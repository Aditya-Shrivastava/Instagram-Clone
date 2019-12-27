import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Icon } from 'native-base';
import 'react-native-gesture-handler';

import MainScreen from './Components/MainScreen';

const AppNavigator = createStackNavigator({
	Main: {
		screen: MainScreen,
		navigationOptions: () => ({
			headerTitleStyle: {
				textAlign: 'center',
				flex: 1
			},
			headerLeft: <Icon name='ios-camera' style={{ paddingLeft: 10 }} />,
			headerTitle: 'Instagram',
			headerRight: <Icon name='ios-send' style={{ paddingRight: 10 }} />
		})
	}
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
