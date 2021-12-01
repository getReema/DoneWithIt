import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput } from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';

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

export default function App() {



  return (
    <Screen>
      <AppTextInput icon='email' placeholder='Username' />
    </Screen>
  );
}