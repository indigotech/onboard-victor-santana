import React, {useState} from 'react';
import {Button, Text, TextInput, View, Alert} from 'react-native';
import {validateEmail, validatePassword} from '../utils/signin-validation';

export const LoginFields = () => {
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

    return Alert.alert('Sucesso!');
  };

  return (
    <View>
      <Text>Email</Text>
      <TextInput
        placeholder="digite seu email"
        onChangeText={value => setEmail(value)}
        keyboardType="email-address"
      />
      <Text>Senha</Text>
      <TextInput
        placeholder="digite sua senha"
        onChangeText={key => setPassword(key)}
        secureTextEntry={true}
      />

      <Button title="Entrar" onPress={() => validate()} />
    </View>
  );
};
