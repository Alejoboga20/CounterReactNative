import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export const CounterScreen = () => {
  const [counter, setCounter] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Counter: {counter}</Text>

      <TouchableOpacity
        onPress={() => setCounter(counter + 1)}
        style={styles.fabLocationBR}>
        <View style={styles.fab}>
          <Text style={styles.fabText}>+</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => setCounter(counter - 1)}
        style={styles.fabLocationBL}>
        <View style={styles.fab}>
          <Text style={styles.fabText}>-</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center' },
  title: { fontSize: 40, textAlign: 'center', top: -15 },
  fabLocationBR: {
    position: 'absolute',
    bottom: 25,
    right: 25,
  },
  fabLocationBL: {
    position: 'absolute',
    bottom: 25,
    left: 25,
  },
  fab: {
    backgroundColor: '#5856d6',
    borderRadius: 100,
    justifyContent: 'center',
    height: 60,
    width: 60,
  },
  fabText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});
