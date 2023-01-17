const regexEmail = /.+[@].+\.com/;
const regexPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{7,}$/;
const regexBirthDate = /(^\d{4}\/\d{2}\/\d{2}$)|(^\d{4}\-\d{2}\-\d{2}$)/;

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

export const validatePhone = (phone: string) => {
  if (phone === '') {
    return 'Campo telefone não pode ser vazio!';
  } else if (phone.length < 11) {
    return 'Formato de telefone inválido';
  }
  return '';
};

export const validateName = (name: string) => {
  if (name === '') {
    return 'Campo nome não pode ser vazio!';
  }
  return '';
};

export const validateBirthDate = (birthDate: string) => {
  const today = new Date();
  const verifyBirthDate = new Date(birthDate);
  const minDate = new Date('1905-01-01');

  if (!regexBirthDate.test(birthDate)) {
    return 'Formato de data inválido!';
  }

  if (today < verifyBirthDate) {
    return 'Data de nascimento no futuro';
  }

  if (verifyBirthDate < minDate) {
    return 'Data de nascimento muito antiga!';
  }

  return '';
};
