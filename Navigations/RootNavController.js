import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import HomScreen from '../Screens/InnerScreen/HomeScreen';

const RootStack = createStackNavigator();

const RootNavController = ({navigation}) => (
    <RootStack.Navigator headerMode='none'>
        <RootStack.Screen name="SplashScreen" component={HomScreen}/>                           

    </RootStack.Navigator>
    );

export default RootNavController;