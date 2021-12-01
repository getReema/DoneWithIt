import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { MaterialCommunityIcons } from '@expo/vector-icons'

import colors from '../app/config/colors';

export default function ListItemDeleteAction() {
    return (
        <View style={styles.container}>
            <MaterialCommunityIcons name='trash-can' size={30} color={colors.white} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 70,
        backgroundColor: colors.danger,
        justifyContent: 'center',
        alignItems: 'center'
    }
})