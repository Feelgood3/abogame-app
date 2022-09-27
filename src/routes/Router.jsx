import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
// screens
import LoginScreen from '../screens/LoginScreen';
import Home from '../screens/Home'
import ContactUs from '../screens/KnowledgeBase';
import AccountScreen from '../screens/Account';
import Maps from '../screens/Maps';
import ConstitutionalRights from '../screens/ConstitutionalRights';
import CivilLaw from '../screens/CivilLaw';
import CriminalLaw from '../screens/CriminalLaw';
import WorkLaw from '../screens/WorkLaw';

import { useAuth } from '../context/Auth';

import { MaterialCommunityIcons } from '@expo/vector-icons';

const HomeStackNavigator = createNativeStackNavigator();

function LoggedInStack() {
    return (
        <HomeStackNavigator.Navigator
            initialRouteName='ContactUs'>
            <HomeStackNavigator.Screen
                name="ContactUs"
                component={ContactUs}
                options={{
                    headerShown: false,
                 }}
                />
            <HomeStackNavigator.Screen
                name="Criminal Law"
                component={CriminalLaw}
                />
            <HomeStackNavigator.Screen
                name="Constitutional Rights"
                component={ConstitutionalRights}
                />
            <HomeStackNavigator.Screen
                name="Civil Law"
                component={CivilLaw}
                />
            <HomeStackNavigator.Screen
                name="Work Law"
                component={WorkLaw}
                />
        </HomeStackNavigator.Navigator>
    )
}

function LoggedOffStack() {
    return (
        <HomeStackNavigator.Navigator
            initialRouteName='LoginScreen'>
            <HomeStackNavigator.Screen
                name="LoginScreen"
                component={LoginScreen}
                options={{
                    headerShown: false,
                 }}
                />
        </HomeStackNavigator.Navigator>
    )
}

const Tab = createBottomTabNavigator();

function RoutingTabs() {
    
    return (
        <Tab.Navigator 
        initialRouteName='Home'
        screenOptions={{
            tabBarActiveTintColor: 'green',
        }}>
            <Tab.Screen name='Home'
             component={Home}
             options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="home" color='black' size ={24} />
                ),
                headerShown: false,
             }}
              />
              <Tab.Screen name='KnowledgeBase'
             component={LoggedInStack}
             options={{
                tabBarLabel: 'Contact Us',
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="account-tie" size={24} color="black" />
                ),
                headerShown: false,
             }}
              />
                <Tab.Screen name='Maps'
             component={Maps}
             options={{
                tabBarLabel: 'Legal Clinic finder',
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="map" color='black' size ={24} />
                ),
                headerShown: false,
             }}
              />              
                <Tab.Screen name='Account'
             component={AccountScreen}
             options={{
                tabBarLabel: 'Account',
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="account" color='black' size ={24} />
                ),
                headerShown: false,
             }}
              />
        </Tab.Navigator>
    );
}

function LoggedOffTabs() {
    
    return (
        <Tab.Navigator 
        initialRouteName='LoginScreen'
        screenOptions={{
            tabBarActiveTintColor: 'green',
        }}>
            <Tab.Screen name='Login'
             component={LoggedOffStack}
             options={{
                tabBarLabel: 'Login',
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="account" color='black' size ={24} />
                ),
                headerShown: false,
                tabBarShowLabel: false,
             }}
              />
        </Tab.Navigator>
    );
}

export default function Navigation() {
    const { currentUser } = useAuth()
    return (
        <NavigationContainer>
            { currentUser? <RoutingTabs />: <LoggedOffTabs />}
        </NavigationContainer>
    );
}