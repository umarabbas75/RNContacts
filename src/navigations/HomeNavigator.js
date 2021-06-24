import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { Text, View } from 'react-native';
import {CONTACT_LIST,CONTACT_DETAIL,CREATE_CONTACT,SETTINGS} from '../constants/routeNames'
import Contacts from '../screens/Contacts'
import ContactDetail from '../screens/ContactDetail'
import CreateContacts from '../screens/CreateContacts'
import Settings from '../screens/Settings'

const AppContainer = () => {

    const HomeStack = createStackNavigator()



    return (
        <HomeStack.Navigator initialRouteName={CONTACT_LIST}>
            <HomeStack.Screen name={CONTACT_LIST} component={Contacts}></HomeStack.Screen>
            <HomeStack.Screen name={CONTACT_DETAIL} component={ContactDetail}></HomeStack.Screen>
            <HomeStack.Screen name={CREATE_CONTACT} component={CreateContacts}></HomeStack.Screen>
            <HomeStack.Screen name={SETTINGS} component={Settings}></HomeStack.Screen>


        </HomeStack.Navigator>
    )
}

export default AppContainer
