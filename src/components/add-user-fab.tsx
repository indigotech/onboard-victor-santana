import React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
<<<<<<< HEAD:src/components/add-user-fab.tsx

interface AddUserFABProps {
  onTap: () => void;
}

export const AddUserFAB: React.FC<AddUserFABProps> = props => {
  return (
    <TouchableOpacity style={styles.touchableOpacity} onPress={props.onTap}>
=======
import {AddUserProps} from '../utils/models';
import {goToAddUser} from '../utils/navigation';

export const AddUserButton = (props: AddUserProps) => {
  return (
    <TouchableOpacity
      style={styles.touchableOpacity}
      onPress={() => goToAddUser(props.componentId, () => props.onSuccess())}>
>>>>>>> c75485a (feat: adding add user server integration):src/components/fab.tsx
      <Image
        style={styles.floatingButton}
        source={require('../assets/add_circle_FILL0_wght400_GRAD0_opsz48.png')}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  touchableOpacity: {
    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 30,
  },
  floatingButton: {
    resizeMode: 'contain',
    width: 50,
    height: 50,
  },
});
