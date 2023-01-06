import React from 'react';
import {Text, TextInput, View} from 'react-native';

const FormInput = () => {
  return (
    <View>
      <Text>Email</Text>
      <TextInput placeholder="digite seu email" />
      <Text>Senha</Text>
      <TextInput placeholder="digite sua senha" />
    </View>
  );
};
export default FormInput;
