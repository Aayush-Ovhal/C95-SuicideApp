import * as React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';

import Signup from './screens/Signup';
import Login from './screens/Login'

import Question1 from './questions/question1';
import Question2 from './questions/question2';
import Question3 from './questions/question3';
import Question4 from './questions/question4';

import Question from './screens/question';

import {DrawerNavigator} from './components/appDrawerNavigator';

export default class App extends React.Component{
  render(){
    return(
      <AppContainer/>
    )
  }
}

const SwitchNavigator = createSwitchNavigator({
 WelcomeScreen: Signup,
 LogIn: Login,
 Question: DrawerNavigator
})

const AppContainer = createAppContainer(SwitchNavigator);