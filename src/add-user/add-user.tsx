import React, {useState} from 'react';
import {Alert, Button, Text, TextInput, View} from 'react-native';
import {
  validateBirthDate,
  validateEmail,
  validateName,
  validatePassword,
  validatePhone,
} from '../utils/validation';

<<<<<<< HEAD
export const AddUserScreen: React.FC = () => {
=======
export const AddUserScreen = () => {
>>>>>>> e622675 (feat: adding fields validation)
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [birthDate, setBirthDate] = useState('');

  const validateUserData = () => {
    const emailValidation = validateEmail(email);
    const passwordValidation = validatePassword(password);
    const phoneValidation = validatePhone(phone);
    const nameValidation = validateName(name);
    const birthDateValidation = validateBirthDate(birthDate);
    if (emailValidation !== '') {
      return Alert.alert(emailValidation);
    }

    if (passwordValidation !== '') {
      return Alert.alert(passwordValidation);
    } else if (password !== confirmPassword) {
      return Alert.alert('As senhas devem ser iguais!');
    }

    if (phoneValidation !== '') {
      return Alert.alert(phoneValidation);
    }

    if (nameValidation !== '') {
      return Alert.alert(nameValidation);
    }

    if (birthDateValidation !== '') {
      return Alert.alert(birthDateValidation);
    }

    return Alert.alert('Sucesso!');
  };

  return (
    <View>
      <Text>Adicionar Usuário</Text>
      <Text>Nome</Text>
      <TextInput placeholder="nome" onChangeText={setName} />
      <Text>Email</Text>
      <TextInput placeholder="email" onChangeText={setEmail} />
      <Text>Senha</Text>
      <TextInput
        placeholder="senha"
        onChangeText={setPassword}
        secureTextEntry={true}
      />
      <Text>Confirmar Senha</Text>
      <TextInput
        placeholder="senha"
        onChangeText={setConfirmPassword}
        secureTextEntry={true}
      />
      <Text>Telefone</Text>
      <TextInput placeholder="telefone" onChangeText={setPhone} />
      <Text>Data de Nascimento</Text>
      <TextInput placeholder="data de nascimento" onChangeText={setBirthDate} />
      <Button title="Adicionar Usuário" onPress={() => validateUserData()} />
    </View>
  );
};
