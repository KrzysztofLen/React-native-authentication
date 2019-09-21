import { colors } from './../../utils/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    inputStyle: {
        backgroundColor: 'white',
    },
    buttonStyle: {
        marginTop: 30,
    },
    snackBarStyle: {
        backgroundColor: colors.secondary,
        flex: 1,
    },
    errorStyle: {
        color: colors.error,
        marginTop: 10,
    },
});
