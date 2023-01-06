import React from 'react';
import {Button, SafeAreaView, Text} from 'react-native';
import {LoginFields} from '../components/LoginFields';

export const LoginScreen = () => {
  return (
    <SafeAreaView>
      <Text>Bem vindo(a) à Taqtile!</Text>
      <LoginFields />
      <Button title="Entrar" />
    </SafeAreaView>
  );
};
