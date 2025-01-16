import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from './app/src/views/SignInScreen'; // Ajuste o caminho conforme necessário
import { View, Text } from 'react-native';
import { AuthProvider } from './app/src/context/AuthContext'


const HomeScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Bem-vindo à Home!</Text>
  </View>
);

const DetailsScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Esta é a tela de detalhes!</Text>
  </View>
);

const Stack = createNativeStackNavigator();

function App() {
  return (
     <AuthProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn">
        <Stack.Screen name="SignIn" component={SignInScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />
        <Stack.Screen name="Details" component={DetailsScreen} options={{ title: 'Detalhes' }} />
      </Stack.Navigator>
    </NavigationContainer>
    </AuthProvider>
  );
}

export default App;
