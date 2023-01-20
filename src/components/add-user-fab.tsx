import React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';

interface AddUserFABProps {
  onTap: () => void;
}

export const AddUserFAB: React.FC<AddUserFABProps> = props => {
  return (
    <TouchableOpacity style={styles.touchableOpacity} onPress={props.onTap}>
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
