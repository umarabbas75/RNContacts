import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import { Text,View } from 'react-native';
import {LOGIN,REGISTER} from '../constants/routeNames'
import Login from '../screens/Login'
import SingUp from '../screens/SingUp'
const AppContainer = () => {

    const AuthStack = createStackNavigator();


    return (
        <AuthStack.Navigator>
             <AuthStack.Screen    name={LOGIN} component={Login}></AuthStack.Screen>
            <AuthStack.Screen name={REGISTER} component={SingUp}></AuthStack.Screen>
        </AuthStack.Navigator>
    )
}

export default AppContainer
