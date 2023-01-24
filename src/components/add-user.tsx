import {useMutation} from '@apollo/client';
import React, {useState} from 'react';
import {Alert, View} from 'react-native';
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
import {StyledButton} from './button';
import {StyledForm} from './form';
import {H1} from './styles/header';

export const AddUser: React.FC<AddUserProps> = props => {
  const [name, setName] = useState('');
  const [nameErrorMessage, setNameErrorMessage] = useState('');
  const [email, setEmail] = useState('');
  const [emailErrorMessage, setEmailErrorMessage] = useState('');
  const [password, setPassword] = useState('');
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [confirmPasswordErrorMessage, setConfirmPasswordErrorMessage] =
    useState('');
  const [phone, setPhone] = useState('');
  const [phoneErrorMessage, setPhoneErrorMessage] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [birthDateErrorMessage, setBirthDateErrorMessage] = useState('');
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
      setEmailErrorMessage(emailValidation);
      return;
    } else {
      setEmailErrorMessage('');
    }

    if (passwordValidation !== '') {
      setPasswordErrorMessage(passwordValidation);
      return;
    } else if (password !== confirmPassword) {
      setConfirmPasswordErrorMessage('As senhas devem ser iguais!');
      return;
    } else {
      setPasswordErrorMessage('');
      setConfirmPasswordErrorMessage('');
    }

    if (phoneValidation !== '') {
      setPhoneErrorMessage(phoneValidation);
      return;
    } else {
      setPhoneErrorMessage('');
    }

    if (nameValidation !== '') {
      setNameErrorMessage(nameValidation);
      return;
    } else {
      setNameErrorMessage('');
    }

    if (birthDateValidation !== '') {
      setBirthDateErrorMessage(birthDateValidation);
      return;
    } else {
      setBirthDateErrorMessage('');
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
      <H1>Adicionar Usuário</H1>
      <StyledForm
        validate={!(nameErrorMessage.length === 0)}
        title="Nome"
        label="Digite seu nome"
        changeText={setName}
        isPassword={false}
        errorMessage={nameErrorMessage}
      />
      <StyledForm
        validate={!(emailErrorMessage.length === 0)}
        title="Email"
        label="Digite seu email"
        changeText={setEmail}
        isPassword={false}
        errorMessage={emailErrorMessage}
      />
      <StyledForm
        validate={!(passwordErrorMessage.length === 0)}
        title="Senha"
        label="Digite sua senha"
        changeText={setPassword}
        isPassword={true}
        errorMessage={passwordErrorMessage}
      />
      <StyledForm
        validate={!(confirmPasswordErrorMessage.length === 0)}
        title="Confirmar senha"
        label="Confirme sua senha"
        changeText={setConfirmPassword}
        isPassword={true}
        errorMessage={confirmPasswordErrorMessage}
      />
      <StyledForm
        validate={!(phoneErrorMessage.length === 0)}
        title="Telefone"
        label="Digite seu telefone"
        changeText={setPhone}
        isPassword={false}
        errorMessage={phoneErrorMessage}
      />
      <StyledForm
        validate={!(birthDateErrorMessage.length === 0)}
        title="Data de Nascimento"
        label="Digite sua data de nascimento"
        changeText={setBirthDate}
        isPassword={false}
        errorMessage={birthDateErrorMessage}
      />
      <StyledForm
        title="Role"
        label="User | Admin"
        changeText={setRole}
        isPassword={false}
      />
      <StyledButton
        content="Adicionar Usuário"
        pressButon={() => validateUserData()}
      />
    </View>
  );
};
