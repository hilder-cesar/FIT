/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default function PrimaryButton({ onPress }) {
  return (
    <TouchableOpacity style={styles.opacity} onPress={onPress}>
      <LinearGradient colors={['#FF217A', '#FF4D4D']} start={{ x: 0, y: 0 }} style={styles.button}>
        <Text style={styles.buttonText}>Confirmar</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  opacity: {
    width: '100%',
    marginTop: 30,
  },
  button: {
    backgroundColor: 'orange',
    paddingVertical: 14,
    borderRadius: 25,
  },
  buttonText: {
    fontSize: 14,
    fontFamily: 'Montserrat-Bold',
    textAlign: 'center',
    color: 'white',
    backgroundColor: 'transparent',
  },
});
