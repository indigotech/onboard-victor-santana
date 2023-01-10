import AsyncStorage from '@react-native-async-storage/async-storage';

export const asyncStorage = (key: string, value: string) => {
  try {
    AsyncStorage.setItem(key, value);
  } catch {
    throw 'Chave inexistente';
  }
};
