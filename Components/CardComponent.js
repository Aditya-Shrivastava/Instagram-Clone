import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import images from '../assets/images/index';

import {
	Card,
	CardItem,
	Thumbnail,
	Body,
	Left,
	Right,
	Button,
	Icon
} from 'native-base';

class CardComponent extends Component {
	render() {
		const profile = {
			'1': images.profile.avengers,
			'2': images.profile.ironman,
			'3': images.profile.black_widow
		};

		const posts = {
			'1': images.images.pic1,
			'2': images.images.pic4,
			'3': images.images.pic2
		};

		return (
			<Card>
				<CardItem>
					<Left>
						<Thumbnail
							source={profile[this.props.profileSource]}
							style={{ height: 40, width: 40 }}
						/>
						<Body>
							<Text style={{ fontWeight: 'bold' }}>
								{this.props.name}
							</Text>
						</Body>
					</Left>
					<Right>
						<Icon
							name='md-more'
							style={{ color: 'black', fontSize: 20 }}
						/>
					</Right>
				</CardItem>
				<CardItem cardBody>
					<Image
						source={posts[this.props.imageSource]}
						style={{ height: 300, width: null, flex: 1 }}
					/>
				</CardItem>
				<CardItem style={{ height: 45 }}>
					<Left>
						<Button transparent>
							<Icon
								name='md-heart'
								style={{ color: 'red', fontSize: 25 }}
							/>
						</Button>
						<Button transparent>
							<Icon
								name='ios-chatbubbles'
								style={{ color: 'black', fontSize: 25 }}
							/>
						</Button>
						<Button transparent>
							<Icon
								name='ios-send'
								style={{ color: 'black', fontSize: 25 }}
							/>
						</Button>
					</Left>
					<Right>
						<Button transparent>
							<Icon
								name='md-bookmark'
								style={{ color: 'black', fontSize: 25 }}
							/>
						</Button>
					</Right>
				</CardItem>

				<CardItem style={{ height: 20 }}>
					<Text>{this.props.likes} likes</Text>
				</CardItem>
				<CardItem>
					<Body>
						<Text>
							<Text style={{ fontWeight: 'bold' }}>
								{this.props.name}
							</Text>
							<Text> Description</Text>
						</Text>
					</Body>
				</CardItem>
			</Card>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	}
});

export default CardComponent;
