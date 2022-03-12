import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export const Fab = ({ position = 'bottomRight', title, onPress }: FabProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={
        position === 'bottomRight' ? styles.fabLocationBR : styles.fabLocationBL
      }>
      <View style={styles.fab}>
        <Text style={styles.fabText}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

interface FabProps {
  position?: 'bottomLeft' | 'bottomRight';
  title: string;

  onPress: () => void;
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
