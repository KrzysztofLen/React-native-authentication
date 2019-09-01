import React, { useState } from "react";
import { Formik } from "formik";
import { SafeAreaView, Text, View } from "react-native";
import {
    ActivityIndicator,
    Button,
    Snackbar,
    TextInput
} from "react-native-paper";
import { styles } from "./styles";
import { validate } from "./../../utils/validations";
import { colors } from "../../utils/colors";
import { server } from "./../../api/server";

const reducer = (state, action) => {
    switch (action.type) {
        case "login":
            return { errorMessage: "", token: action.payload };
        default:
            return state;
    }
};

export const AuthForm = () => {
    const [visible, setVisible] = useState(true);

    const login = async ({ email, password }) => {
        try {
            const response = await server.post("/login", { email, password });
            console.log(response.data.token);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <React.Fragment>
            <Formik
                initialValues={{ email: "", password: "" }}
                onSubmit={(values, actions) => {
                    setVisible(true);
                    login(values);
                }}
                validate={validate}
            >
                {props => (
                    <View>
                        <TextInput
                            autoCapitalize={"none"}
                            autoCorrect={false}
                            label={"Email"}
                            onBlur={props.handleBlur("email")}
                            onChangeText={props.handleChange("email")}
                            style={styles.inputStyle}
                        />
                        <TextInput
                            autoCapitalize={"none"}
                            autoCorrect={false}
                            label={"Password"}
                            onBlur={props.handleBlur("password")}
                            onChangeText={props.handleChange("password")}
                            secureTextEntry
                            style={styles.inputStyle}
                        />
                        {props.errors.email && props.touched.email && (
                            <Text style={styles.errorStyle}>
                                {props.errors.email}
                            </Text>
                        )}
                        {props.isSubmitting ? (
                            <ActivityIndicator animating={true} />
                        ) : (
                            <Button
                                icon="lock-open"
                                mode="contained"
                                style={styles.buttonStyle}
                                onPress={() => props.handleSubmit()}
                            >
                                Submit
                            </Button>
                        )}
                    </View>
                )}
            </Formik>
            {/* {visible && (
                <Snackbar
                    duration={100000}
                    visible={visible}
                    onDismiss={() => setVisible(false)}
                    action={{
                        label: "Close",
                        onPress: () => setVisible(false)
                    }}
                    theme={{ colors: { accent: colors.white } }}
                    style={styles.snackBarStyle}
                >
                    Login successful
                </Snackbar>
            )} */}
        </React.Fragment>
    );
};
