import React from "react";
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen/RegisterScreen";

const AppNavigator = createSwitchNavigator({
    LoginFlow: createStackNavigator({
        Login: {
            screen: LoginScreen,
            navigationOptions: () => ({
                title: "Login"
            })
        },
        Register: {
            screen: RegisterScreen,
            navigationOptions: () => ({
                title: "Register"
            })
        }
    })
});

export const Navigation = createAppContainer(AppNavigator);
