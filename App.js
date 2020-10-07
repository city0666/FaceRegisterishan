import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NavStackController from './Navigations/NavStackCOntroller';

const Stack = createStackNavigator();

function App() {
  return (

    <NavStackController/>
    );
}

export default App;