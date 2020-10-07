import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from '../Screens/Auth/Welcome';
import LoginScreen from '../Screens/Auth/LoginScreen';
const AuthStack = createStackNavigator();

const AuthController = ({ navigation }) => (

    <AuthStack.Navigator >
    <AuthStack.Screen name="Welcome" component={Welcome}/> 
    <AuthStack.Screen name="LoginScreen" component={LoginScreen}/>                           
                          

</AuthStack.Navigator>
);

export default AuthController;

