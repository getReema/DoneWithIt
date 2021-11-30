import React from 'react'
import { StyleSheet, Text, View, Platform } from 'react-native'
import colors from '../app/config/colors'

export default function AppText(props) {
    const { children, color = "black", style } = props

    return (
        <View>
            <Text style={[styles.text, { color: colors[color] }, style]}>{props.children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text:{
        fontSize:18,
        fontFamily: Platform.OS === 'Android' ? 'Roboto': 'Avenir',
        
    }
})
