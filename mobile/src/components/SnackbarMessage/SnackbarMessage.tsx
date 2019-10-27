import React, { useState } from 'react';
import { Text } from 'react-native';
import { Snackbar } from 'react-native-paper';

import { Props } from './types';

export const SnackbarMessage = (props: Props) => {
    const [visible, setVisible] = useState<boolean>(true);

    const dismissSnackbar = () => {
        setVisible(false);
    };

    return (
        <Snackbar
            duration={props.duration || 5000}
            visible={visible}
            onDismiss={dismissSnackbar}
            action={{
                label: props.label || 'Close',
                onPress: dismissSnackbar,
            }}>
            <Text>{props.message}</Text>
        </Snackbar>
    );
};
