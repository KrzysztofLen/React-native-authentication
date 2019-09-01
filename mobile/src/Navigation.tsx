import React from "react";
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";

const AppNavigator = createSwitchNavigator({
    LoginFlow: createStackNavigator({
        Login: {
            screen: LoginScreen,
            navigationOptions: ({navigation}) => ({
                title: "Login"
            })
        },
        Register: {
            screen: RegisterScreen,
            navigationOptions: ({navigation}) => ({
                title: "Register"
            })
        }
    })
});

export const Navigation = createAppContainer(AppNavigator);
