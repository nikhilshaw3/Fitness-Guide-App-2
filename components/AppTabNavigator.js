import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { AppStackNavigator } from './AppStackNavigator'
import ExerciseScreen from '../screens/ExerciseScreen';
import {Icon} from 'react-native-elements';


export const AppTabNavigator = createBottomTabNavigator({
  ImportantTerms : {
    screen: AppStackNavigator,
    navigationOptions :{
      tabBarIcon : <Icon name="home" type ="fontawesome5" />,
      tabBarLabel : "IMPORTANT TERMS",
    }
  },
  AllExercise: {
    screen: ExerciseScreen,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/1.png")} style={{width:35, height:35}}/>,
      tabBarLabel : "ALL EXERCISE",
    }
  }
});
