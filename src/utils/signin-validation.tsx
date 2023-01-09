const regexEmail = /^[\w-\.]{3,}@([\w-]{3,}\.)+(?:com)$/;
const regexPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{7,}$/;

export const validateEmail = (email: string) => {
  if (email === '') {
    return 'Campo Email não pode ser vazio!';
  } else if (!regexEmail.test(email)) {
    return 'Formato de email inválido!';
  }
  return '';
};

export const validatePassword = (password: string) => {
  if (password === '') {
    return 'Campo Senha não pode ser vazio!';
  } else if (!regexPassword.test(password)) {
    return 'Formato de senha inválido!';
  }
  return '';
};
