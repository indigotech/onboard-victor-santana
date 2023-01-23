import React, {useState} from 'react';
import {ActivityIndicator, SafeAreaView} from 'react-native';
import {validateEmail, validatePassword} from '../utils/validation';
import {NavigationComponentProps} from 'react-native-navigation';
import {goToHome} from '../utils/navigation';
import {loginRequest} from '../utils/apollo';
import {H1} from '../components/H1';
import {StyledButton} from '../components/button';
import {StyledForm} from '../components/form';

export const LoginScreen = (props: NavigationComponentProps) => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const validate = async () => {
    const emailValidation = validateEmail(email);
    const passwordValidation = validatePassword(password);
    try {
      if (emailValidation !== '') {
        setEmailError(true);
        setEmailErrorMessage(emailValidation);
        return;
      } else {
        setEmailError(false);
      }

      if (validatePassword(password) !== '') {
        setPasswordError(true);
        setPasswordErrorMessage(passwordValidation);
        return;
      } else {
        setPasswordError(false);
      }
      setLoading(true);
      await loginRequest(email, password);
      setLoading(false);
      goToHome(props.componentId);
    } catch {
      setLoading(false);
      setEmailError(false);
      throw 'Não foi possivel realizar o login';
    }
  };

  return (
    <SafeAreaView>
      <H1 content="Bem vindo(a) à Taqtile!" />
      <StyledForm
        validate={emailError}
        title={'Email'}
        label={'Digite seu email'}
        changeText={setEmail}
        isPassword={false}
        errorMessage={emailErrorMessage}
      />
      <StyledForm
        validate={passwordError}
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
