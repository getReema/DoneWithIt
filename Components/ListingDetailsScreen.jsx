import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

import AppText from './AppText'
import colors from '../app/config/colors'
import ListItem from '../Components/ListItem'

export default function ListingDetailsScreen() {
    return (
        <View>
            <Image style={styles.image}
                source={require('../app/assets/jacket.jpg')}
            />
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>Red Jacket for Sale!!</AppText>
                <AppText color="secondary"> $100 </AppText>
                <View style={styles.userContainer}>
                    <ListItem
                        image={require('../app/assets/jacket.jpg')}
                        title="Reema Fahad"
                        subtitle="10 Listings"
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 300
    },
    detailsContainer: {
        padding: 20
    },
    title: {
        fontSize: 24,
        fontWeight: "bold"
    },
    subtitle: {
        color: colors.secondary,
        fontSize: 20,
        marginVertical: 10
    },
    userContainer: {
        marginVertical: 50
    }

})