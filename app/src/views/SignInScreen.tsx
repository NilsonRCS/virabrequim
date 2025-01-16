import React, { useContext, useState } from 'react';
import { Alert, ActivityIndicator } from 'react-native';
import { handleSignIn } from '../controllers/SignInController';
import { AuthContext } from '../context/AuthContext';
type SignInScreenProps = {
  navigation: any;
};
import {Container,Title,Input, Button, ButtonText} from './SignInScreenStyled';

const SignInScreen: React.FC<SignInScreenProps> = ({ navigation }) => {
  const { login } = useContext(AuthContext)!;
  const [user, setUser] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const onLoginSuccess = (name: string) => {
    navigation.navigate('Home');
  };

  const onSignInPress = async () => {
    setLoading(true);
    const isSuccess = await handleSignIn({ user, password }, onLoginSuccess);
    setLoading(false);

    if (isSuccess) {
      await login(user);
      console.log('Login realizado com sucesso');
    } else {
      Alert.alert('Erro', 'Falha ao realizar login');
    }
  };

  return (
    <Container>
      <Title>Login</Title>
      <Input
        placeholder="Digite seu nome de usuário"
        autoCapitalize="none"
        value={user}
        onChangeText={setUser}
      />
      <Input
        placeholder="Digite sua senha"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button onPress={onSignInPress} disabled={loading}>
        {loading ? <ActivityIndicator color="#FFF" /> : <ButtonText>Entrar</ButtonText>}
      </Button>
    </Container>
  );
};

export default SignInScreen;
