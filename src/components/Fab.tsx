import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export const Fab = ({ title }: FabProps) => {
  return (
    <TouchableOpacity
      onPress={() => console.log('touch')}
      style={styles.fabLocationBR}>
      <View style={styles.fab}>
        <Text style={styles.fabText}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

interface FabProps {
  title: string;
}

const styles = StyleSheet.create({
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
