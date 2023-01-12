import React, {useState} from 'react';
import {Button, Text, TextInput, SafeAreaView} from 'react-native';
import {validate} from '../utils/validation';
import {NavigationComponentProps} from 'react-native-navigation';

export const LoginScreen = (props: NavigationComponentProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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

      <Button
        title="Entrar"
        onPress={() => validate(email, password, props.componentId)}
      />
    </SafeAreaView>
  );
};
