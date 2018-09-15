import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//the StackNavigator is depreciated but is used in the tutorial so i used createStakNavigator instead

import { createStackNavigator } from 'react-navigation';
import MainScreen from './Components/MainScreen.js'

export default class App extends React.Component {
  render() {
    return (
      <AppStackNavigator/>
    );
  }
}

// this is creation of stack navigator 
// it is just declaration here and is defined on the MainScreen.js file in the components.
const AppStackNavigator = createStackNavigator({

  Main:{
    screen: MainScreen
  }

})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
