import React, {useState} from 'react';
import {
  ActivityIndicator,
  Text,
  TextInput,
  SafeAreaView,
  Alert,
} from 'react-native';
import {validateEmail, validatePassword} from '../utils/validation';
import {NavigationComponentProps} from 'react-native-navigation';
import {goToHome} from '../utils/navigation';
import {loginRequest} from '../utils/apollo';
import {H1} from '../components/H1';
import {StyledButton} from '../components/button';
import { StyledForm } from '../components/form';

export const LoginScreen = (props: NavigationComponentProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const validate = async () => {
    const emailValidation = validateEmail(email);
    const passwordValidation = validatePassword(password);
    try {
      if (emailValidation !== '') {
        return Alert.alert(emailValidation);
      }

      if (validatePassword(password) !== '') {
        return Alert.alert(passwordValidation);
      }
      setLoading(true);
      await loginRequest(email, password);
      setLoading(false);
      goToHome(props.componentId);
    } catch {
      setLoading(false);
      throw 'Não foi possivel realizar o login';
    }
  };

  return (
    <SafeAreaView>
      <H1 content="Bem vindo(a) à Taqtile!" />
      <StyledForm 
        error={false}
        title={'Email'}
        label={'Digite seu email'}
        changeText={setEmail}
        isPassword={false}
      />
      <StyledForm 
        error={false}
        title={'Senha'}
        label={'Digite sua senha'}
        changeText={setPassword}
        isPassword={true}
      />
      {!loading ? (
        <StyledButton content="Entrar" pressButon={() => validate()} />
      ) : (
        <ActivityIndicator />
      )}
    </SafeAreaView>
  );
};
