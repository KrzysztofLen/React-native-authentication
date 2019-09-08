import React from 'react';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';

import LoginScreen from '../screens/LoginScreen/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen/RegisterScreen';
import DashboardScreen from '../screens/DashboardScreen/DashboardScreen';
import WithdrawScreen from '../screens/WithdrawScreen/WithdrawScreen';
import AddScreen from '../screens/AddScreen/AddScreen';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';

import Icon from 'react-native-vector-icons/FontAwesome';

const TabNavigator = createMaterialBottomTabNavigator({
    Dashboard: {
        screen: DashboardScreen,
        navigationOptions: {
            tabBarIcon: ({tintColor}) => {
                return <Icon name={'th-list'} size={25} color={tintColor} />;
            },
        },
    },
    Withdraw: {
        screen: WithdrawScreen,
        navigationOptions: {
            tabBarIcon: ({tintColor}) => {
                return <Icon name={'dollar'} size={25} color={tintColor} />;
            },
        },
    },
    Add: {
        screen: AddScreen,
        navigationOptions: {
            tabBarIcon: ({tintColor}) => {
                return (
                    <Icon name={'plus-circle'} size={25} color={tintColor} />
                );
            },
        },
    },
    Profile: {
        screen: ProfileScreen,
        navigationOptions: {
            tabBarIcon: ({tintColor}) => {
                return <Icon name={'user'} size={25} color={tintColor} />;
            },
        },
    },
});

const StackNavigator = createStackNavigator({
    Login: {
        screen: LoginScreen,
        navigationOptions: () => ({
            title: 'Login',
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
    LoginFlow: StackNavigator,
    AppFlow: TabNavigator,
});

export const Navigation = createAppContainer(AppNavigator);
