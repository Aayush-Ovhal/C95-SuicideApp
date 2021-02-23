import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {BottomTabNavigator} from './bottomTabNavigator';
import Question from '../screens/question';
import CommunityScreen from '../screens/communityScreen';
import CustomSideBarMenu from './customSideBarMenu';

export const DrawerNavigator = createDrawerNavigator({
    Question: {
        screen: Question
    },
    CommunityScreen: {
        screen: CommunityScreen
    }
},
{
  contentComponent: CustomSideBarMenu
}
)