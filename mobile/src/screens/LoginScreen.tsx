import React from "react";
import { View, Text } from "react-native";
import { Title, Button } from "react-native-paper";

const LoginScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1 }}>
            <Title>Login</Title>
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                <Text>Open up App.tsx to start working on your app!</Text>
                <Button onPress={() => navigation.navigate("Register")}>
                    Don't have an account? Register!
                </Button>
            </View>
        </View>
    );
};

export default LoginScreen;
