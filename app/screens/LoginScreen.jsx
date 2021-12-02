import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import * as Yup from 'yup';


import Screen from '../../Components/Screen';
import AppTextInput from '../../Components/AppTextInput';
import AppButton from '../../Components/AppButton';
import AppText from '../../Components/AppText';
import ErrorMessage from '../../Components/ErrorMessage';
import AppFormField from '../../Components/AppFormField';
import SubmitButton from '../../Components/SubmitButton';
import AppForm from '../../Components/AppForm';

const validationSchema = Yup.object().shape({
    username: Yup.string().required().email().label('Email'),
    password: Yup.string().required().min(4).label('Password')
})

export default function LoginScreen(props) {

    return (
        <Screen>
            <Image
                style={styles.logo}
                source={require('../assets/logo-red.png')}
            />

            <AppForm
                initialValues={{ username: '', password: '' }}
                onSubmit={values => console.log(values)}
                validationSchema={validationSchema}
            >
             <AppFormField
                    icon="email"
                    keyboardType="email-address"
                    placeholder='Email'
                    textContentType="emailAddress"
                    autoCorrect={false}
                    autoCapitalize="none"
                    name="username"
                />
                <AppFormField
                    icon="lock"
                    secureTextEntry={true}
                    placeholder='Password'
                    textContentType="password"
                    autoCorrect={false}
                    autoCapitalize="none"
                    name="password"
                />

<               SubmitButton title="Login" />

                </AppForm>



        </Screen>
    )
}

const styles = StyleSheet.create({
    logo: {
        width: 80,
        height: 80,
        alignSelf: 'center',
        marginTop: 50,
        marginBottom: 20
    }

})