import React, {useState} from 'react';
import {
  Text,
  TextInput,
  View,
  Alert,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {loginRequest} from '../utils/apollo';
import {goToHome} from '../utils/navigation';
import {validateEmail, validatePassword} from '../utils/validation';

interface LoginProps {
  componentId: string;
}

export const LoginFields = (props: LoginProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(true);

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
      {!loading ? (
        <TouchableOpacity onPress={() => validate()}>
          <Text>Entrar</Text>
        </TouchableOpacity>
      ) : (
        <ActivityIndicator />
      )}
    </View>
  );
};
