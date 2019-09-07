import React from 'react';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import LoginScreen from '../screens/LoginScreen/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen/RegisterScreen';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import DashboardScreen from '../screens/DashboardScreen/DashboardScreen';
import Icon from 'react-native-vector-icons/MaterialIcons';

const AppNavigator = createSwitchNavigator({
    LoginFlow: createStackNavigator({
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
    }),
    AppFlow: createMaterialBottomTabNavigator({
        Dashboard: {
            screen: DashboardScreen,
            navigationOptions: {
                tabBarIcon: ({tintColor}) => {
                    return (
                        <Icon name={'dashboard'} size={30} color={tintColor} />
                    );
                },
            },
        },
        Music: {
            screen: DashboardScreen,
            navigationOptions: {
                tabBarIcon: ({tintColor}) => {
                    return (
                        <Icon name={'dashboard'} size={30} color={tintColor} />
                    );
                },
            },
        },
    }),
});

export const Navigation = createAppContainer(AppNavigator);
