import React from 'react';
import {LoginFields} from '../components/login-fields';
import {SafeAreaView, Text} from 'react-native';

export const LoginScreen = () => {
  return (
    <SafeAreaView>
      <Text>Bem vindo(a) à Taqtile!</Text>
      <LoginFields />
    </SafeAreaView>
  );
};
