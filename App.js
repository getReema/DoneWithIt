import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View,ImageBackground  } from 'react-native';
import MessageScreen from './app/screens/MessageScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import AppButton from './Components/AppButton';
import Card from './Components/Card';
import ListingDetailsScreen from './Components/ListingDetailsScreen';
import Screen from './Components/Screen';
import Icon from './Components/Icon';
import AccountScreen from './app/screens/AccountScreen';

export default function App() {
  return (
    <AccountScreen />
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f8f4f4',
    padding: 20,
    paddingTop: 100
  }
})


