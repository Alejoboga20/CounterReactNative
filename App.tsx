import React from 'react';
import {View, Text} from 'react-native';

const App = () => {
  return (
    <View
      style={{
        backgroundColor: 'red',
        flex: 1,
        justifyContent: 'center',
      }}>
      <Text
        style={{
          fontSize: 45,
          textAlign: 'center',
        }}>
        Hello world
      </Text>
    </View>
  );
};

export default App;
