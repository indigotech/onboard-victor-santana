import React from 'react';
import {LoginFields} from '../components/login-fields';
import {SafeAreaView, Text} from 'react-native';
import {NavigationComponentProps} from 'react-native-navigation';

export const LoginScreen = (props: NavigationComponentProps) => {
  console.log(props);
  return (
    <SafeAreaView>
      <Text>Bem vindo(a) à Taqtile!</Text>
      <LoginFields componentId={props.componentId} />
    </SafeAreaView>
  );
};
