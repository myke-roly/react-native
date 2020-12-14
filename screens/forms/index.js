import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Alert, Button } from 'react-native';

const Form = ({ route }) => {
  const [email, setEmail] = useState('');

  function handleChange(e, text) {
    setEmail(e.target.value);
  }

  const createTwoButtonAlert = () =>
    Alert.alert(
      'Alert Title',
      'My Alert Msg',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ],
      { cancelable: false }
    );

  return (
    <View style={styles.form}>
      {/* <Button title="Learning" color="#454545" onPress={() => navigation.navigate('Modal')} /> */}
      <Text>Form {route.params.name}</Text>
      <TextInput
        style={styles.formInput}
        onChange={(e) => handleChange(e)}
        placeholder="Entry your name"
        keyboardType="email-address"
        value={email}
      />
      <Button title="Send Form" onPress={createTwoButtonAlert} />
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    padding: 10,
    backgroundColor: '#eee',
    borderRadius: 10,
  },
  formInput: {
    padding: 5,
    borderColor: '#333',
    borderWidth: 2,
    borderRadius: 10,
    marginTop: 5,
    marginBottom: 5,
  },
});

export default Form;
