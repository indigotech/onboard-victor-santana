import {useMutation} from '@apollo/client';
import React, {useState} from 'react';
import {Alert, Button, Text, TextInput, View} from 'react-native';
import {createUserMutation} from '../utils/apollo';
import {GraphQLServerError} from '../utils/custom-error';
import {AddUserProps, User} from '../utils/models';
import {goBack} from '../utils/navigation';
import {
  validateBirthDate,
  validateEmail,
  validateName,
  validatePassword,
  validatePhone,
} from '../utils/validation';

export const AddUser: React.FC<AddUserProps> = props => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [role, setRole] = useState('');
  const [createUser] = useMutation(createUserMutation, {
    fetchPolicy: 'no-cache',
  });

  const createNewUser = (): User => {
    return {
      birthDate: birthDate,
      name: name,
      email: email,
      phone: phone,
      password: password,
      role: role.toLowerCase(),
    };
  };

  const validateUserData = async () => {
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
    const user = createNewUser();
    try {
      await createUser({
        variables: {
          data: user,
        },
      });
      props.onSuccess();
      goBack(props.componentId);
    } catch (error) {
      const serverError = error as GraphQLServerError;
      return Alert.alert(serverError.graphQLErrors[0].message);
    }
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
      <Text>Role</Text>
      <TextInput placeholder="role" onChangeText={setRole} />
      <Button title="Adicionar Usuário" onPress={() => validateUserData()} />
    </View>
  );
};
