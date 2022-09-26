import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
// screens
import LoginScreen from '../screens/LoginScreen';
import Home from '../screens/Home'
import KnowledgeBase from '../screens/KnowledgeBase';

import { MaterialCommunityIcons } from '@expo/vector-icons';

const HomeStackNavigator = createNativeStackNavigator();

function MyStack() {
    return (
        <HomeStackNavigator.Navigator
            initialRouteName='HomeScreen'>
            <HomeStackNavigator.Screen
                name="HomeScreen"
                component={Home}
                />
            <HomeStackNavigator.Screen
                name="KnowledgeBase"
                component={Home}
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
             component={MyStack}
             options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="home" color='black' size ={24} />
                ),
                headerShown: false,
             }}
              />
            <Tab.Screen name='LoginScreen'
             component={LoginScreen}
             options={{
                tabBarLabel: 'Login',
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="account" color='black' size ={24} />
                ),
                headerShown: false,
             }}
              />
              <Tab.Screen name='KnowledgeBase'
             component={KnowledgeBase}
             options={{
                tabBarLabel: 'Guide',
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="book-open-blank-variant" size={24} color="black" />
                ),
                headerShown: false,
             }}
              />
        </Tab.Navigator>
    );
}

export default function Navigation() {
    return (
        <NavigationContainer>
            <RoutingTabs />
        </NavigationContainer>
    );
}