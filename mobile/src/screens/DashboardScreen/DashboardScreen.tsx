import React, { useContext, useState } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { Button, Snackbar } from 'react-native-paper';

import { Context as AuthContext } from './../../context/AuthContext';

const DashboardScreen = () => {
    const { state, logout } = useContext(AuthContext);
    const [visible, setVisible] = useState<boolean>(true);

    return (
        <View style={{ flex: 1 }}>
            <SafeAreaView>
                <Text>Welcome in the App!</Text>
                <Button mode="contained" onPress={() => logout()}>
                    LOGOUT
                </Button>
            </SafeAreaView>

            <Snackbar
                duration={5000}
                visible={visible}
                onDismiss={() => setVisible(false)}
                action={{
                    label: 'Close',
                    onPress: () => setVisible(false),
                }}>
                <Text>{state.snackbarMessage}</Text>
            </Snackbar>
        </View>
    );
};

export default DashboardScreen;
