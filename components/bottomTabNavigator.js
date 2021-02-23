import * as React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {Image} from 'react-native';
import CommunityScreen from '../screens/communityScreen'
import Question from '../screens/question';

export const BottomTabNavigator  = createBottomTabNavigator({
    Question: {
        screen: Question,
        navigationOptions: {
            tabBarLabel: "Questions",
            tabBarIcon: <Image source={require("../assets/survey.png")} style={{width: 40, height: 40}}/>
        }
    },
    Community: {
        screen: CommunityScreen,
        navigationOptions: {
            tabBarLabel: "Community Chat",
            tabBarIcon: <Image source={require("../assets/chat-group.png")} style={{width: 40, height: 40}}/>
        }
    }
})