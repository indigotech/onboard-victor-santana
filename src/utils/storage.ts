import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveOnAsyncStorage = async (key: string, value: string) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch {
    throw 'Chave inexistente';
  }
};
