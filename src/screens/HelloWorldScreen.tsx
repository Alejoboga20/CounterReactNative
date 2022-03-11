import React from 'react';
import { View, Text } from 'react-native';

export const HelloWorldScreen = () => {
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
        Hello world Screen
      </Text>
    </View>
  );
};
