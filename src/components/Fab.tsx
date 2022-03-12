import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  Platform,
  View,
} from 'react-native';

export const Fab = ({ position = 'bottomRight', title, onPress }: FabProps) => {
  const ios = () => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        style={[
          styles.fabLocation,
          position === 'bottomRight' ? styles.right : styles.left,
        ]}
        onPress={onPress}>
        <View style={styles.fab}>
          <Text style={styles.fabText}>{title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const android = () => {
    return (
      <View
        style={[
          styles.fabLocation,
          position === 'bottomRight' ? styles.right : styles.left,
        ]}>
        <TouchableNativeFeedback
          onPress={onPress}
          background={TouchableNativeFeedback.Ripple('#28425b', false, 25)}>
          <View style={styles.fab}>
            <Text style={styles.fabText}>{title}</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  };

  return Platform.OS === 'ios' ? ios() : android();
};

interface FabProps {
  position?: 'bottomLeft' | 'bottomRight';
  title: string;

  onPress: () => void;
}

const styles = StyleSheet.create({
  fabLocation: {
    position: 'absolute',
    bottom: 25,
  },
  right: {
    right: 25,
  },
  left: {
    left: 25,
  },
  fab: {
    backgroundColor: '#5856d6',
    borderRadius: 100,
    justifyContent: 'center',
    height: 60,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
    width: 60,
  },
  fabText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});
