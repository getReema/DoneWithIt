import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import Screen from '../../Components/Screen'
import AppForm from '../../Components/AppForm'
import AppFormField from '../../Components/AppFormField'
import SubmitButton from '../../Components/SubmitButton'

import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    name: Yup.string().required().label("Name"),
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password"),
})

export default function RegisterScreen() {
    return (
        <Screen style={styles.container}>

            <AppForm
                initialValues={{ name: '', email: '', password: '' }}
                onSubmit={(values) => console.log(values)}
                validationSchema={validationSchema}

            >
                <AppFormField
                    name="name"
                    icon="account"
                    autoCorrect={false}
                    placeholder="Name"
                />

                <AppFormField
                    name="email"
                    icon="email"
                    keyboardType="email-address"
                    autoCorrect={false}
                    autoCapitalize="none"
                    placeholder="Email"
                    textContentType="emailAddress"
                />
                <AppFormField
                    name="password"
                    icon="lock"
                    autoCorrect={false}
                    autoCapitalize="none"
                    placeholder="Password"
                    textContentType="password"
                    secureTextEntry
                />

                <SubmitButton title="Register" />



            </AppForm>

        </Screen>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    }
})