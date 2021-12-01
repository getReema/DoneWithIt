import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'

import ListItem from '../../Components/ListItem'


const messages = [
    {
        id: 1,
        title: 'T1',
        description: 'D1',
        image: require('../assets/profile.png')
    },
    {
        id: 2,
        title: 'T2',
        description: 'D2',
        image: require('../assets/profile.png')
    },

]


export default function MessageScreen() {
    return (
        <FlatList
            data={messages}
            keyExtractor={message => message.id.toString()}
            renderItem={({ item }) =>
                <ListItem
                    title={item.title}
                    subtitle={item.description}
                    image={item.image}

                />}


        />
    )
}

const styles = StyleSheet.create({})