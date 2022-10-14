import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppStack from './src/navigaition/AppStack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <AppStack/>
      </NavigationContainer>
    </GestureHandlerRootView>

  );
}

