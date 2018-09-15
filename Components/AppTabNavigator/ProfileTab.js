import React, { Component } from 'react';
import { View,
	Text,
	StyleSheet} from 'react-native';

import { Icon } from 'native-base';

class ProfileTab extends Component{
	// this is basically giving the icons to the navigation bar 
	static navigationOptions = {

		tabBarIcon: ({ tintColor }) => (
				<Icon name="person" style={{ color:tintColor }} />
			)
	}

	render(){
		return(
			<View style={ styles.container }>
				<Text> ProfileTab</Text>
			</View>
			);
	}
}

export default ProfileTab;

const styles = StyleSheet.create({
	container:{
		flex:1,
		alignItems: 'center',
		justifyContent: 'center'
	}
});