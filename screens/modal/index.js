import React, { useState } from 'react';
import { StyleSheet, View, Button, TouchableHighlight, Modal, Alert, Text } from 'react-native';

const CustomModals = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const hiddenModal = () => setIsOpenModal(false);
  const showModal = () => setIsOpenModal(true);

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isOpenModal}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}
      >
        <View style={styles.modalWrapper}>
          <View>
            <Text>Hello World!</Text>
            <TouchableHighlight style={{ ...styles.openButton, backgroundColor: '#2196F3' }} onPress={hiddenModal}>
              <Text>Hide Modal</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
      <Button width="150" color="orange" title="show modal" style={styles.btn} onPress={showModal} />
    </View>
  );
};

export default CustomModals;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    backgroundColor: '#cccc',
  },
  modalWrapper: {
    padding: 5,
    height: 150,
    backgroundColor: 'white',
  },
  btn: {
    padding: 4,
    color: 'white',
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
});
