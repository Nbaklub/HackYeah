import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Menu } from './views/Menu';
const Stack = createNativeStackNavigator();

function First() {
  return (
    <Menu firstName={"Imie"} />
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="First" component={First} />
      </Stack.Navigator>

    </NavigationContainer>
  );
}
