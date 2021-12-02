import React, { useState } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'


import Screen from '../../Components/Screen';
import AppTextInput from '../../Components/AppTextInput';
import AppButton from '../../Components/AppButton';

export default function LoginScreen(props) {

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    return (
        <Screen>
            <Image
                style={styles.logo}
                source={require('../assets/logo-red.png')}
            />
            <AppTextInput
                icon="email"
                keyboardType="email-address"
                placeholder='Email'
                textContentType="emailAddress"
                autoCorrect={false}
                autoCapitalize="none"
                onChangeText={(text) => setUsername(text)}

            />
            <AppTextInput
                icon="lock"
                secureTextEntry={true}
                placeholder='Password'
                textContentType="password"
                autoCorrect={false}
                autoCapitalize="none"
                onChangeText={(text) => setPassword(text)}


            />

            <AppButton
                title="Login"
                onPress={() => console.log('Button Clicked', username, password)}
            />
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