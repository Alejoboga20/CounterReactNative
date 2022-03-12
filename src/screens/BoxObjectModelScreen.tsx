import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const BoxObjectModelScreen = () => {
  return (
    <View style={styles.constainer}>
      <Text style={styles.title}>Box Object Model</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  constainer: {
    backgroundColor: 'red',
    flex: 0.5,
  },
  title: {
    borderWidth: 10,
    fontSize: 20,
  },
});
