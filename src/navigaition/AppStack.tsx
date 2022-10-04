import React from 'react'
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import SplashScreen from '../app/screens/SplashScreen/SplashScreen';

export default function AppStack() {
    const Stack = createStackNavigator();
    const screenOptions: StackNavigationOptions = {
        headerShown: false,
      };

  return (
    <Stack.Navigator initialRouteName={'SPLASH_SCREEN'} screenOptions={screenOptions}>
        <Stack.Screen name={'SPLASH_SCREEN'} component={SplashScreen} />
    </Stack.Navigator>
  )
}
