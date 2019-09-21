import React from 'react';
import { Avatar } from 'react-native-paper';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import LoginScreen from '../screens/LoginScreen/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen/RegisterScreen';
import DashboardScreen from '../screens/DashboardScreen/DashboardScreen';
import WithdrawScreen from '../screens/WithdrawScreen/WithdrawScreen';
import AddScreen from '../screens/AddScreen/AddScreen';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';
import ResolveAuthScreen from '../screens/ResolveAuthScreen/ResolveAuthScreen';

import Icon from 'react-native-vector-icons/FontAwesome';

const TabNavigator = createMaterialBottomTabNavigator({
    Dashboard: {
        screen: DashboardScreen,
        navigationOptions: {
            tabBarIcon: () => {
                return <Icon name={'th-list'} size={25} color={'white'} />;
            },
        },
    },
    Withdraw: {
        screen: WithdrawScreen,
        navigationOptions: {
            tabBarIcon: () => {
                return <Icon name={'dollar'} size={25} color={'white'} />;
            },
        },
    },
    Add: {
        screen: AddScreen,
        navigationOptions: {
            tabBarIcon: () => {
                return <Icon name={'plus-circle'} size={25} color={'white'} />;
            },
        },
    },
    Profile: {
        screen: ProfileScreen,
        navigationOptions: {
            tabBarIcon: () => {
                return <Icon name={'user'} size={25} color={'white'} />;
            },
        },
    },
});

const StackNavigator = createStackNavigator({
    Login: {
        screen: LoginScreen,
        navigationOptions: () => ({
            title: 'Login',
            headerRight: <Avatar.Text size={24} label="JD" />,
        }),
    },
    Register: {
        screen: RegisterScreen,
        navigationOptions: () => ({
            title: 'Register',
        }),
    },
});

const AppNavigator = createSwitchNavigator({
    ResolveAuth: ResolveAuthScreen,
    LoginFlow: StackNavigator,
    AppFlow: TabNavigator,
}, {
    initialRouteName: "LoginFlow"
});

export const Navigation = createAppContainer(AppNavigator);
