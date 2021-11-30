import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import AppButton from './Components/AppButton';
import Card from './Components/Card';

export default function App() {
  return (
    <View style={styles.container}>
    <Card
      title='Red Jacket for sale'
      subtitle='$100'
      image={require('./app/assets/jacket.jpg')}
    />

  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f8f4f4',
    padding: 20,
    paddingTop: 100
  }
})


