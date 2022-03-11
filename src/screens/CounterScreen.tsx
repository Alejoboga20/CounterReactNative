import React, { useState } from 'react';
import { Button, Text, TouchableOpacity, View } from 'react-native';

export const CounterScreen = () => {
  const [counter, setCounter] = useState(0);

  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Text style={{ fontSize: 40, textAlign: 'center', top: -15 }}>
        Counter: {counter}
      </Text>

      <TouchableOpacity onPress={() => setCounter(counter + 1)}>
        <View style={{ backgroundColor: 'blue', borderRadius: 100 }}>
          <Text>+1</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
