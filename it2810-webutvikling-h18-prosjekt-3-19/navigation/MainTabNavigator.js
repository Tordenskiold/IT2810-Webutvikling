import React from 'react';
import { Platform, Alert } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';


import TabBarIcon from '../components/TabBarIcon';
import TodoScreen from '../screens/TodoScreen';
import AchievementsScreen from '../screens/AchievementsScreen';

const TodoStack = createStackNavigator({
  Home: TodoScreen,
});

TodoStack.navigationOptions = {
  tabBarLabel: 'Todo',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-checkmark-circle${focused ? '' : '-outline'}`
          : 'md-checkmark-circle'
      }
    />
  ),
};

const AchievementsStack = createStackNavigator({
  Links: AchievementsScreen,
});

AchievementsStack.navigationOptions = {
  tabBarLabel: 'Achievements',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-trophy${focused ? '' : '-outline'}` : 'md-link'}
    />
  ),
  
};

export default createBottomTabNavigator({
  TodoStack,
  AchievementsStack,
});
