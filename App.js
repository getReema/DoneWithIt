import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput,Switch  } from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';

import { NavigationContainer } from '@react-navigation/native';
import AppButton from './Components/AppButton';
import Card from './Components/Card';
import ListingDetailsScreen from './app/screens/ListingsScreen';
import MessageScreen from './app/screens/MessageScreen';
import Screen from './Components/Screen';
import Icon from './Components/Icon';
import ListItem from './Components/ListItem';
import AccountScreen from './app/screens/AccountScreen';
import ListingsScreen from './app/screens/ListingsScreen';
import AppTextInput from './Components/AppTextInput';
import AppPicker from './Components/AppPicker';
import LoginScreen from './app/screens/LoginScreen';
import RegisterScreen from './app/screens/RegisterScreen';
import ListingEditScreen from './app/screens/ListingEditScreen';

import { createNativeStackNavigator } from '@react-navigation/native-stack';



const Tweets = () => (
  <Screen>
    <Text>Tweets</Text>
  </Screen>
)

const TweetDetails = () => (
  <Screen>
    <Text>Tweet Details</Text>
  </Screen>
)

const Stack = createNativeStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator initialRouteName="Tweets">
    <Stack.Screen name="TweetDetails" component={TweetDetails} />
    <Stack.Screen name="Tweets" component={Tweets} />
  </Stack.Navigator>
);

export default function App() {


  return (
    <NavigationContainer>
    <StackNavigator />
  </NavigationContainer>
  );
}