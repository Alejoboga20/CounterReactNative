import React from 'react';
import { StyleSheet, View } from 'react-native';

export const PositionScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.purpleBox} />
      <View style={styles.orangeBox} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#28c4d9',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  purpleBox: {
    backgroundColor: '#5856d6',
    borderColor: 'white',
    borderWidth: 10,
    width: 100,
    height: 100,
    bottom: -50,
  },
  orangeBox: {
    backgroundColor: 'orange',
    borderColor: 'white',
    borderWidth: 10,
    width: 100,
    height: 100,
    bottom: 100,
  },
});
