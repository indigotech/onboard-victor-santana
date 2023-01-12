import React, {useState} from 'react';
import {
  TouchableOpacity,
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
      <Text>Bem vindo(a) à Taqtile!</Text>
      <Text>Email</Text>
      <TextInput
        placeholder="digite seu email"
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <Text>Senha</Text>
      <TextInput
        placeholder="digite sua senha"
        onChangeText={setPassword}
        secureTextEntry={true}
      />

      {!loading ? (
        <TouchableOpacity onPress={() => validate()}>
          <Text>Entrar</Text>
        </TouchableOpacity>
      ) : (
        <ActivityIndicator />
      )}
    </SafeAreaView>
  );
};
