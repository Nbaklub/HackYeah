import React from 'react';
import main from './components/main';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import  dog  from './components/dog';
import Menu from './views/Menu';
import Login_screen from './login/login_screen';
import { Register } from './views/Register';
import { Profile } from './views/Profile';
import { HamburgerMenu } from './components/HamburgerMenu';
import { Settings } from './views/Settings';
import First from './assets/first';
import dogview from './views/dogview';
import WetScc from './views/weterynarie_scc';
import request from './views/found';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login_screen} />
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="main" component={main} />
        <Stack.Screen name="dog" component={dog} />
        <Stack.Screen name="First" component={First}/>
        <Stack.Screen name='Profile' component={Profile} />
        <Stack.Screen name='Settings' component={Settings} />
        <Stack.Screen name='dogview' component={dogview} />
        <Stack.Screen name="Wet" component={WetScc} />
        <Stack.Screen name="Found" component={request}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
