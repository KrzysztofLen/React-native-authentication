import React from "react";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import { Text, View } from "react-native";
import { Navigation } from "./src/Navigation";

const theme = {
    ...DefaultTheme,
    dark: true,
    roundness: 2,
    colors: {
        ...DefaultTheme.colors,
        primary: "#3498db",
        accent: "#f1c40f",
        background: "#121212"
    }
};

export default function App() {
    return (
        <PaperProvider theme={theme}>
            <Navigation />
        </PaperProvider>
    );
}
