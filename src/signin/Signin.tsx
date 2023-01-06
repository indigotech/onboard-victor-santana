import React from 'react';
import {Button, SafeAreaView, Text, View} from 'react-native';
import FormInput from '../components/FormInput';

const LoginScreen = () => {
  return (
    <SafeAreaView>
      <Text>Bem vindo(a) à Taqtile!</Text>
      <View>
        <FormInput />
        <Button title="Entrar" />
      </View>
    </SafeAreaView>
  );
};
export default LoginScreen;
