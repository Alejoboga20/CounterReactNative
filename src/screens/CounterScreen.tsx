import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Fab } from '../components/Fab';

export const CounterScreen = () => {
  const [counter, setCounter] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Counter: {counter}</Text>

      <Fab title="+" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center' },
  title: { fontSize: 40, textAlign: 'center', top: -15 },
});
