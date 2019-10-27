import React, { useContext } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { Button } from 'react-native-paper';

import { Context as AuthContext } from './../../context/AuthContext';
import { SnackbarMessage } from '@components/SnackbarMessage';

export const DashboardScreen = () => {
    const { state, logout } = useContext(AuthContext);

    const onLogout = () => {
        logout();
    };

    return (
        <View style={{ flex: 1 }}>
            <SafeAreaView>
                <Text>Welcome in the App!</Text>
                <Button mode="contained" onPress={onLogout}>
                    LOGOUT
                </Button>
            </SafeAreaView>

            {state.snackbarMessage != null && (
                <SnackbarMessage message={state.snackbarMessage} />
            )}
        </View>
    );
};
