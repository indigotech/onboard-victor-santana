import React, {useState} from 'react';
import {ActivityIndicator, SafeAreaView} from 'react-native';
import {validateEmail, validatePassword} from '../utils/validation';
import {NavigationComponentProps} from 'react-native-navigation';
import {goToHome} from '../utils/navigation';
import {loginRequest} from '../utils/apollo';
import {H1} from '../components/styles/header';
import {StyledForm} from '../components/form';
import {StyledButton} from '../components/button';

export const LoginScreen = (props: NavigationComponentProps) => {
  const [email, setEmail] = useState('');
  const [emailErrorMessage, setEmailErrorMessage] = useState('');
  const [password, setPassword] = useState('');
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const validate = async () => {
    const emailValidation = validateEmail(email);
    const passwordValidation = validatePassword(password);
    try {
      if (emailValidation !== '') {
        setEmailErrorMessage(emailValidation);
        return;
      } else {
        setEmailErrorMessage('');
      }

      if (validatePassword(password) !== '') {
        setPasswordErrorMessage(passwordValidation);
        return;
      } else {
        setPasswordErrorMessage('');
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
      <H1>Bem vindo(a) à Taqtile!</H1>
      <StyledForm
        title={'Email'}
        label={'Digite seu email'}
        changeText={setEmail}
        isPassword={false}
        errorMessage={emailErrorMessage}
      />
      <StyledForm
        title={'Senha'}
        label={'Digite sua senha'}
        changeText={setPassword}
        isPassword={true}
        errorMessage={passwordErrorMessage}
      />
      {!loading ? (
        <StyledButton content="Entrar" pressButon={() => validate()} />
      ) : (
        <ActivityIndicator />
      )}
    </SafeAreaView>
  );
};
