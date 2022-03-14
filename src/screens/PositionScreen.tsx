import React from 'react';
import { StyleSheet, View } from 'react-native';

export const PositionScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.purpleBox} />
      <View style={styles.orangeBox} />
      <View style={styles.greenBox} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#28c4d9',
    height: 400,
    width: 400,
  },
  purpleBox: {
    backgroundColor: '#5856d6',
    borderColor: 'white',
    borderWidth: 10,
    height: 100,
    position: 'absolute',
    top: 0,
    width: 100,
  },
  orangeBox: {
    backgroundColor: 'orange',
    borderColor: 'white',
    borderWidth: 10,
    bottom: 0,
    height: 100,
    position: 'absolute',
    right: 0,
    width: 100,
  },
  greenBox: {
    backgroundColor: 'green',
    borderColor: 'white',
    borderWidth: 10,
    bottom: 150,
    height: 100,
    position: 'absolute',
    left: 150,
    width: 100,
  },
});
