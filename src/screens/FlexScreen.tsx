import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const FlexScreen = () => {
  return (
    <View style={styles.contaier}>
      <Text style={styles.box1}>Box 1</Text>
      <Text style={styles.box2}>Box 2</Text>
      <Text style={styles.box3}>Box 3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  contaier: {
    flex: 1,
    backgroundColor: '#28c4d9',
  },
  box1: {
    flex: 5,
    borderWidth: 2,
    borderColor: 'white',
    fontSize: 30,
  },
  box2: {
    flex: 3,
    borderWidth: 2,
    borderColor: 'white',
    fontSize: 30,
  },
  box3: {
    flex: 1,
    borderWidth: 2,
    borderColor: 'white',
    fontSize: 30,
  },
});
