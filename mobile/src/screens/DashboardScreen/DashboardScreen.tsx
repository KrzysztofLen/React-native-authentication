import React, {useContext, useState} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {Button, Snackbar} from 'react-native-paper';
import {AuthContext} from './../../context';

const DashboardScreen = () => {
    const {logout, snackbarMessage} = useContext(AuthContext);
    const [visible, setVisible] = useState(true);

    return (
        <View style={{flex: 1}}>
            <SafeAreaView>
                <Text>Welcome in the App!</Text>
                <Button icon="lock" mode="contained" onPress={() => logout()}>
                    LOGOUT
                </Button>
            </SafeAreaView>
            {snackbarMessage && (
                <Snackbar
                    duration={5000}
                    visible={visible}
                    onDismiss={() => setVisible(false)}
                    action={{
                        label: 'Close',
                        onPress: () => setVisible(false),
                    }}>
                    <Text>{snackbarMessage}</Text>
                </Snackbar>
            )}
        </View>
    );
};

export default DashboardScreen;
