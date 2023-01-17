import React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import {NavigationComponentProps} from 'react-native-navigation';
import {goToAddUser} from '../utils/navigation';

export const AddUserButton = (props: NavigationComponentProps) => {
  return (
    <TouchableOpacity
      style={styles.touchableOpacity}
      onPress={() => goToAddUser(props.componentId)}>
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
