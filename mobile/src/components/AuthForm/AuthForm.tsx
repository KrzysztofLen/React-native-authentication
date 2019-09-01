import React from "react";
import { Formik } from "formik";
import { SafeAreaView, Text } from "react-native";
import { ActivityIndicator, Button, TextInput } from "react-native-paper";
import { styles } from "./styles";
import { validate } from "./../../utils/validations";

export const AuthForm = () => {
    return (
        <SafeAreaView>
            <Text>Auth Form</Text>
            <Formik
                initialValues={{ email: "", password: "" }}
                onSubmit={(values, actions) => {
                    alert(JSON.stringify(values));
                    setTimeout(() => {
                        actions.setSubmitting(false);
                    }, 1000);
                }}
                validate={validate}
            >
                {props => (
                    <React.Fragment>
                        <TextInput
                            label={"Email"}
                            onBlur={props.handleBlur("email")}
                            onChangeText={props.handleChange("email")}
                            style={styles.inputStyle}
                        />
                        <TextInput
                            label={"Password"}
                            onBlur={props.handleBlur("password")}
                            onChangeText={props.handleChange("password")}
                            secureTextEntry
                            style={styles.inputStyle}
                        />
                        {props.errors.email && props.touched.email && (
                            <Text>{props.errors.email}</Text>
                        )}
                        {props.isSubmitting ? (
                            <ActivityIndicator animating={true} />
                        ) : (
                            <Button
                                icon="lock-open"
                                mode="outlined"
                                onPress={() => props.handleSubmit()}
                            >
                                Submit
                            </Button>
                        )}
                    </React.Fragment>
                )}
            </Formik>
        </SafeAreaView>
    );
};
