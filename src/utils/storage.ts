import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveOnAsyncStorage = (key: string, value: string) => {
  try {
    AsyncStorage.setItem(key, value);
  } catch {
    throw 'Chave inexistente';
  }
};
