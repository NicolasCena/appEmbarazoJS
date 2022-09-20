import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { WelcomeUserScreen } from '../screens/WelcomeUserScreen';
import { LoginScreen } from '../screens/LoginScreen';
import { RegistryScreen } from '../screens/RegistryScreen';


export const StackNavigation = () => {

    const Stack = createStackNavigator(); 

  return (
    <Stack.Navigator>
        <Stack.Screen name='WelcomeUserScreen' component={WelcomeUserScreen} options={{ headerShown: false}} />
        <Stack.Screen name='LoginScreen' component={LoginScreen} options={{ headerTransparent: true, headerBackTitle: 'Volver', headerTitle: ''}} />
        <Stack.Screen name='RegistryScreen' component={RegistryScreen} options={{ headerTransparent: true, headerBackTitle: 'Volver', headerTitle: ''}} />
    </Stack.Navigator>
  )
}
 
