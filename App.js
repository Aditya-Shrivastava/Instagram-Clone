import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Icon } from 'native-base';
import instagramLogo from './assets/images/instagram_logo.png';

import MainScreen from './Components/MainScreen';

const AppNavigator = createStackNavigator({
	Main: {
		screen: MainScreen,
		navigationOptions: () => ({
			headerLeft: <Icon name='ios-camera' style={{ paddingLeft: 10 }} />,
			headerTitle: (
				<View style={{ alignItems: 'center', flex: 1 }}>
					<Image
						source={instagramLogo}
						style={{
							width: 100,
							height: 30
						}}
					/>
				</View>
			),
			headerRight: <Icon name='ios-send' style={{ paddingRight: 10 }} />
		})
	}
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
