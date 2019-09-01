import React from "react";
import { View, Text } from "react-native";
import { Title, Button } from "react-native-paper";
import { AuthForm } from "../../components";

const LoginScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1 }}>
            <Title>Login</Title>

            <AuthForm />
            <Button onPress={() => navigation.navigate("Register")}>
                Don't have an account? Register!
            </Button>
        </View>
    );
};

export default LoginScreen;
