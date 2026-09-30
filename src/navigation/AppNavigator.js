import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StudentScreen from '../screens/StudentScreen';
import CharactersScreen from '../screens/CharactersScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Student"
        screenOptions={{
          headerStyle: { backgroundColor: '#5b2a86' },
          headerTintColor: '#fff',
          animation: 'slide_from_right',
        }}
      >
        <Stack.Screen name="Student" component={StudentScreen} options={{ title: 'Estudiante' }} />
        <Stack.Screen name="Characters" component={CharactersScreen} options={{ title: 'Rick and Morty' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
