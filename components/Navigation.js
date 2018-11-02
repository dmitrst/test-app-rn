import React from 'react';
import { createSwitchNavigator, createStackNavigator } from 'react-navigation';

import AppLoadingScreen from './screens/AppLoadingScreen';
import DashboardScreen from './screens/DashboardScreen';
import TaskDetailsScreen from './screens/TaskDetailsScreen';
import PostDetailsScreen from './screens/PostDetailsScreen';

const DashboardNavigator = createStackNavigator({
    UserDashboard: {
        screen: DashboardScreen,
        navigationOptions: ({ navigation }) => ({
            header: null
        })
    },
    TaskDetails: {
        screen: TaskDetailsScreen,
        navigationOptions: ({ navigation }) => ({
            title: navigation.state.params.task.name
        })
    },
    PostDetails: {
        screen: PostDetailsScreen,
        navigationOptions: ({ navigation }) => ({
            title: navigation.state.params.post.name
        })
    }
});

const RootNavigator = createSwitchNavigator({
    AppLoading: AppLoadingScreen,
    AppDashboard: DashboardNavigator
}, { initialRouteName: 'AppLoading' });

export default RootNavigator;