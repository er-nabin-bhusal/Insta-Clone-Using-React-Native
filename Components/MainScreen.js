// this file  is for the design of the main app screen it is located inside the components. 

import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	Platform
} from "react-native";
// now lets create a navigation bar 
import { Icon } from 'native-base';

// for the tab navigation like instagram at the bottom of the page: 
import { createBottomTabNavigator } from 'react-navigation';
//it is just a creation of a component of the app. 

// import every tab navigator files in the homescreen 
import HomeTab from './AppTabNavigator/HomeTab.js'
import SearchTab from './AppTabNavigator/SearchTab.js'
import AddMediaTab from './AppTabNavigator/AddMediaTab.js'
import LikesTab from './AppTabNavigator/LikesTab.js'
import ProfileTab from './AppTabNavigator/ProfileTab.js'

class MainScreen extends Component{

	static navigationOptions = {

		headerLeft: <Icon name="ios-camera-outline" style={{ paddingLeft: 10 }}/>,
		title: "Instagram",
		headerRight: <Icon style={{ paddingRight: 10 }} name="ios-send-outline" />
	}
	
	render(){
		return(
			<AppTabNavigator />
		);
	}
}
// since it is exported it can only be imported to other modules. 
export default MainScreen;

const AppTabNavigator = createBottomTabNavigator({

	HomeTab: {
		screen: HomeTab
	},
	SearchTab:{
		screen: SearchTab
	},
	AddMediaTab:{
		screen: AddMediaTab
	},
	LikesTab:{
		screen: LikesTab
	},
	ProfileTab:{
		screen: ProfileTab
	}
},{
	// here we set up props for the AppTabNavigator
	animationEnabled: true,
	swipeEnabled: true,
	tabBarPosition: "bottom",
	tabBarOptions: {
		//this is for android otherwise it wont show up for android 
		style:{
			...Platform.select({
				android:{
					backgroundColor: 'white'
				}
			})
		},
		activeTintColor: '#000',
		inactiveTintColor: '#d1cece',
		showLabel: false,
		showIcon: true //this is required for android 
	}
})

// this is styling the components of the app. 
const styles = StyleSheet.create({
	container:{
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	}
});