import React, {useState} from 'react';
import {Button, Text, TextInput, View, Alert} from 'react-native';
import {loginRequest} from '../utils/apollo';
import {validateEmail, validatePassword} from '../utils/validation';

interface LoginProps {
  componentId: string;
}

export const LoginFields = (props: LoginProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const validate = () => {
    const emailValidation = validateEmail(email);
    const passwordValidation = validatePassword(password);
    if (emailValidation !== '') {
      return Alert.alert(emailValidation);
    }

    if (validatePassword(password) !== '') {
      return Alert.alert(passwordValidation);
    }

    loginRequest(email, password, props.componentId);
  };

  return (
    <View>
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

      <Button title="Entrar" onPress={() => validate()} />
    </View>
  );
};
