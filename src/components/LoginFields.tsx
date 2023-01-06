import React, {useState} from 'react';
import {Button, Text, TextInput, View, Alert} from 'react-native';

export const LoginFields = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPassword, setErrorPassword] = useState('');

  const validateEmail = () => {
    let regex = /^[\w-\.]{3,}@([\w-]{3,}\.)+(?:com)$/;
    let isEmailValid = true;
    if (email === '') {
      setErrorEmail('Campo Email não pode ser vazio!');
      isEmailValid = false;
    } else if (!regex.test(email)) {
      setErrorEmail('Formato de email inválido!');
      isEmailValid = false;
    }
    return isEmailValid;
  };

  const validatePassword = () => {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{7,}$/;
    let isPasswordValid = true;
    if (password === '') {
      setErrorPassword('Campo Senha não pode ser vazio!');
      isPasswordValid = false;
    } else if (!regex.test(password)) {
      setErrorPassword('Formato de senha inválido!');
      isPasswordValid = false;
    }
    return isPasswordValid;
  };

  const validate = () => {
    console.log(validateEmail());
    if (!validateEmail()) {
      return Alert.alert(errorEmail);
    } else if (!validatePassword()) {
      return Alert.alert(errorPassword);
    } else {
      return Alert.alert('Sucesso!');
    }
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
