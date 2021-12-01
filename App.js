import { StatusBar } from 'expo-status-bar';
import React ,  { useState }from 'react';
import { SafeAreaView, StyleSheet, Text, View,ImageBackground,TextInput   } from 'react-native';
import MessageScreen from './app/screens/MessageScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import AppButton from './Components/AppButton';
import Card from './Components/Card';
import ListingDetailsScreen from './Components/ListingDetailsScreen';
import Screen from './Components/Screen';
import Icon from './Components/Icon';
import AccountScreen from './app/screens/AccountScreen';
import ListingsScreen from './app/screens/ListingsScreen';

export default function App() {
  const [firstName, setFirstName] = useState('');

  return (
   <Screen>
      <TextInput
        placeholder="First Name"
        onChangeText={(text) => setFirstName(text)}
        style={{
          borderBottomColor: '#ccc',
          borderBottomWidth: 1
        }}
        clearButtonMode="always"
        secureTextEntry={true}


      />
      <Text>{firstName}</Text>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f8f4f4',
    padding: 20,
    paddingTop: 100
  }
})


