import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'

import ListItem from '../../Components/ListItem'

import Constants from 'expo-constants';

import Screen from '../../Components/Screen';
import ListItemSeparator from '../../Components/ListItemSeparator';

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
    console.log('constants:'+ Constants)
    return (
        <Screen>
            <FlatList
                data={messages}
                keyExtractor={message => message.id.toString()}
                renderItem={({ item }) =>
                    <ListItem
                        title={item.title}
                        subtitle={item.description}
                        image={item.image}

                    />}
                    ItemSeparatorComponent={ListItemSeparator}

            />
        </Screen>
    )
}

const styles = StyleSheet.create({})