import React,  { useState } from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'

import ListItem from '../../Components/ListItem'

import Constants from 'expo-constants';

import Screen from '../../Components/Screen';
import ListItemSeparator from '../../Components/ListItemSeparator';
import ListItemDeleteAction from '../../Components/ListItemDeleteAction';

const initialMessages  = [
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
    const [messages, setMessages] = useState(initialMessages);
    const handleDelete = (message) => {
        //Delete the message from messages
        const newMessages = messages.filter(m => m.id !== message.id)
        setMessages(newMessages);

    }

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
                        onPress={() => console.log('Item Pressed', item)}
                        renderRightActions={() =>
                            <ListItemDeleteAction
                                onPress={() => handleDelete(item)}
                            />}

                    />}
                    ItemSeparatorComponent={ListItemSeparator}

            />
        </Screen>
    )
}

const styles = StyleSheet.create({})