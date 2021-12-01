import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import colors from '../config/colors'
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function ViewImageScreen() {
    return (
        <View style={
            styles.container
        }>

<View style={styles.closeIcon}>
                <MaterialCommunityIcons name="close" size={35} color="white" />
            </View>
            <View style={styles.deleteIcon}>
                <MaterialCommunityIcons name="trash-can-outline" size={35} color="white" />
            </View>

       <Image source= {
           require(('../assets/chair.jpg'))
       }
       resizeMode= 'contain'
       style={
           styles.image
       }>

       </Image>
       
       </View>

    )
}

const styles = StyleSheet.create({

    container: {
        backgroundColor: '#000',
        flex: 1,
    },
    closeIcon: {
        width: 50,
        height: 50,
        position: 'absolute',
        top: 30,
        left: 30,
    },
    deleteIcon: {
        width: 50,
        height: 50,
        position: 'absolute',
        top: 30,
        right: 30,
    },
    image: {
        width: '100%',
        height: '100%'
    }
})