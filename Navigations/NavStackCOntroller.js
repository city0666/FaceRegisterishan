import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthController from './AuthController';
import RootNavController from './RootNavController';
import StartUpScreen from '../Screens/StartUpScreen';

const NavStackController = ({ navigation }) => {
    return(
        <NavigationContainer>
            
            <AuthController></AuthController>
            {/* <RootNavController></RootNavController> */}
            {/* <StartUpScreen/> */}
        </NavigationContainer>)  

        
}

export default NavStackController;
