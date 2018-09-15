import React, { Component } from 'react';
import { View,
	Text,
	StyleSheet,
	ScrollView
	} from 'react-native';

// lets set up our icons 
import { Icon,Container,Content,Thumbnail } from 'native-base';

// importing the card component 
import CardComponent from '../CardComponent'

class HomeTab extends Component{

	static navigationOptions = {
		tabBarIcon: ({tintColor}) => (
				<Icon name="ios-home" style={{color:tintColor}}/>
			)
	}

	render(){
		return(
			<Container style={styles.container}>
				// content is a scroll view 
				<Content>
					<View style={{ height: 100 }}>
						<View style={{ flex:1, flexDirection: 'row', justifyContent:'space-between',alignItems:'center',
						 paddingHorizontal: 7}}>
							<Text style={{ fontWeight:"bold"}}>Stories</Text>
							
							<View style={{ flexDirection:'row',alignItems:'center'}}>
								<Icon name="md-play" style={{fontSize:14}}/>
								<Text style={{ fontWeight:"bold"}}>Watch all</Text>
							</View>

						</View>	
						<View style={{ flex: 3 }}>
							<ScrollView
								horizontal={true} 
								showsHorizontalScrollIndicator={false}
								contentContainerStyle={{
									alignItems: 'center',
									paddingStart: 5, 
									paddingEnd: 5
								}}
							>
								<Thumbnail source={require('../../assets/34.jpg')}
								style={{ marginHorizontal: 5, borderColor: 'pink',borderWidth:2 }}/>

								<Thumbnail source={require('../../assets/36.jpg')}
								style={{ marginHorizontal: 5, borderColor: 'pink',borderWidth:2 }}/>

								<Thumbnail source={require('../../assets/35.jpg')}
								style={{ marginHorizontal: 5, borderColor: 'pink',borderWidth:2 }}/>

								<Thumbnail source={require('../../assets/36.jpg')}
								style={{ marginHorizontal: 5, borderColor: 'pink',borderWidth:2 }}/>

								<Thumbnail source={require('../../assets/34.jpg')}
								style={{ marginHorizontal: 5, borderColor: 'pink',borderWidth:2 }}/>

								<Thumbnail source={require('../../assets/36.jpg')}
								style={{ marginHorizontal: 5, borderColor: 'pink',borderWidth:2 }}/>

								<Thumbnail source={require('../../assets/34.jpg')}
								style={{ marginHorizontal: 5, borderColor: 'pink',borderWidth:2 }}/>

								<Thumbnail source={require('../../assets/35.jpg')}
								style={{ marginHorizontal: 5, borderColor: 'pink',borderWidth:2 }}/>

							</ScrollView>
						</View>
					</View>

					<CardComponent imageSource="1" likes="202"/>
					<CardComponent imageSource="2" likes="645"/>
					<CardComponent imageSource="3" likes="455"/>
				</Content>
			</Container>
			);
	}
}

export default HomeTab;

const styles = StyleSheet.create({
	container:{
		flex:1,
		backgroundColor: 'white'
	}
});