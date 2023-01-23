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
import {H1} from './H1';

export const AddUser: React.FC<AddUserProps> = props => {
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState(false);
  const [nameErrorMessage, setNameErrorMessage] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const [confirmPasswordErrorMessage, setConfirmPasswordErrorMessage] =
    useState('');
  const [phone, setPhone] = useState('');
  const [phoneError, setPhoneError] = useState(false);
  const [phoneErrorMessage, setPhoneErrorMessage] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [birthDateError, setBirthDateError] = useState(false);
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
      setEmailError(true);
      setEmailErrorMessage(emailValidation);
      return;
    } else {
      setEmailError(false);
    }

    if (passwordValidation !== '') {
      setPasswordError(true);
      setPasswordErrorMessage(passwordValidation);
      return;
    } else if (password !== confirmPassword) {
      setConfirmPasswordError(true);
      setConfirmPasswordErrorMessage('As senhas devem ser iguais!');
      return;
    } else {
      setPasswordError(false);
      setConfirmPasswordError(false);
    }

    if (phoneValidation !== '') {
      setPhoneError(true);
      setPhoneErrorMessage(phoneValidation);
      return;
    } else {
      setPhoneError(false);
    }

    if (nameValidation !== '') {
      setNameError(true);
      setNameErrorMessage(nameValidation);
      return;
    } else {
      setNameError(false);
    }

    if (birthDateValidation !== '') {
      setBirthDateError(true);
      setBirthDateErrorMessage(birthDateValidation);
      return;
    } else {
      setBirthDateError(false);
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
      <H1 content="Adicionar Usuário" />
      <StyledForm
        validate={nameError}
        title="Nome"
        label="Digite seu nome"
        changeText={setName}
        isPassword={false}
        errorMessage={nameErrorMessage}
      />
      <StyledForm
        validate={emailError}
        title="Email"
        label="Digite seu email"
        changeText={setEmail}
        isPassword={false}
        errorMessage={emailErrorMessage}
      />
      <StyledForm
        validate={passwordError}
        title="Senha"
        label="Digite sua senha"
        changeText={setPassword}
        isPassword={true}
        errorMessage={passwordErrorMessage}
      />
      <StyledForm
        validate={confirmPasswordError}
        title="Confirmar senha"
        label="Confirme sua senha"
        changeText={setConfirmPassword}
        isPassword={true}
        errorMessage={confirmPasswordErrorMessage}
      />
      <StyledForm
        validate={phoneError}
        title="Telefone"
        label="Digite seu telefone"
        changeText={setPhone}
        isPassword={false}
        errorMessage={phoneErrorMessage}
      />
      <StyledForm
        validate={birthDateError}
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
