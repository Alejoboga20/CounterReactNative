import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export const CounterScreen = () => {
  const [counter, setCounter] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Counter: {counter}</Text>

      <TouchableOpacity onPress={() => setCounter(counter + 1)}>
        <View style={styles.buttonIncrement}>
          <Text>+1</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center' },
  title: { fontSize: 40, textAlign: 'center', top: -15 },
  buttonIncrement: { backgroundColor: 'blue', borderRadius: 100 },
});
