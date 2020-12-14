import React from 'react';
import { Button, StyleSheet, Platform } from 'react-native';

const OtherButton = ({ title, onPress }) => {
  return <Button style={styles.btn} title={title} onPress={onPress} />;
};

const styles = StyleSheet.create({
  btn: {
    padding: 4,
    ...Platform.select({
      iso: {
        backgroundColor: '#aa9f39',
        color: 'white',
      },
      android: {
        color: '#aa9f39',
        backgroundColor: 'white',
      },
      default: {
        color: '#aa9f39',
        backgroundColor: 'white',
      },
    }),
  },
});

export default OtherButton;
