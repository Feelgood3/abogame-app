import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen } from '../screens/LoginScreen';

const Stack = createNativeStackNavigator();

export function Router() {
    return (
        <NavigationContainer>
            <Stack.Screen name='LoginScreen' component={LoginScreen} />
            <Stack.Screen name='Home' component={Home} />
        </NavigationContainer>
    );
}