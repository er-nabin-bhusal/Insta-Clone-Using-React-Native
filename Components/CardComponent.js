import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	Image
} from 'react-native';

import { Card,CardItem,Thumbnail,Body,Left,Right,Button,Icon } from 'native-base';

class CardComponent extends Component {
	render(){
		const images = {
				'1': require('../assets/34.jpg'),
				'2': require('../assets/35.jpg'),
				'3': require('../assets/36.jpg')
			}

		return(
				<Card>
					<CardItem>
						<Left>
							<Thumbnail source={require('../assets/34.jpg')}/>
							<Body>
								<Text>Nabin Bhusal</Text>
								<Text note>Aug 1996</Text>
							</Body>
						</Left>
					</CardItem>

					<CardItem cardBody>
						<Image source={images[this.props.imageSource]}s style={{ height: 250, width: null, flex: 1 }}/>
					</CardItem>

					<CardItem style={{ height: 45 }}>
						<Left>
							<Button transparent>
								<Icon name="ios-heart-outline" style={{color:'black'}}/>
							</Button>

							<Button transparent>
								<Icon name="ios-chatbubbles-outline" style={{color:'black'}}/>
							</Button>

							<Button transparent>
								<Icon name="ios-send-outline" style={{color:'black'}}/>
							</Button>
						</Left>
					</CardItem>

					<CardItem style={{ height: 35 }}>
						<Text>{this.props.likes} likes</Text>
					</CardItem>

					<CardItem>
						<Body>
							<Text>
								<Text style={{ fontWeight:"900" }}>Nabin Bhusal </Text>
								This is my first instagram post here in the mobile created react-native project right
								here.
							</Text>
						</Body>
					</CardItem>

				</Card>
			);
	}
}


export default CardComponent;

const styles = StyleSheet.create({
	container:{
		flex:1,
		alignItems:'center',
		justifyContent:'center',
	}
});
