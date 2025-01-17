import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from './app/src/views/SignInScreen';
import { AuthProvider } from './app/src/context/AuthContext'
import HomeScreen from './app/src/views/HomeScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
     <AuthProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn">
        <Stack.Screen name="SignIn" component={SignInScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
    </AuthProvider>
  );
}

export default App;
