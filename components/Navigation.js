import React from 'react';
import { createSwitchNavigator, createStackNavigator } from 'react-navigation';

import AppLoadingScreen from './screens/AppLoadingScreen';
import DashboardScreen from './screens/DashboardScreen';
import TaskDetailsScreen from './screens/TaskDetailsScreen';
import PostDetailsScreen from './screens/PostDetailsScreen';

import { brandedPurpleColor } from './styled';

// Default header on stack navigator
const defaultHeaderStyle = {
    headerStyle: {
        backgroundColor: brandedPurpleColor
    },
    headerTitleStyle: {
        color: 'white'
    },
    headerBackTitleStyle: {
        color: 'white'
    },
    headerTintColor: 'white'
};

const DashboardNavigator = createStackNavigator({
    UserDashboard: {
        screen: DashboardScreen,
        navigationOptions: ({ navigation }) => ({
            ...defaultHeaderStyle,
            headerBackTitleVisible: false,
            headerTitle: navigation.state.params.user.last_name,
            headerBackTitle: 'Back'
        })
    },
    TaskDetails: {
        screen: TaskDetailsScreen,
        navigationOptions: ({ navigation }) => ({
            ...defaultHeaderStyle,
            title: navigation.state.params.task.subtitle
        })
    },
    PostDetails: {
        screen: PostDetailsScreen,
        navigationOptions: ({ navigation }) => ({
            ...defaultHeaderStyle,
            title: navigation.state.params.post.subtitle
        })
    }
});

const RootNavigator = createSwitchNavigator({
    AppLoading: AppLoadingScreen,
    AppDashboard: DashboardNavigator
}, { initialRouteName: 'AppLoading' });

export default RootNavigator;