import React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  useWindowDimensions,
} from 'react-native';

/* const { width, height } = Dimensions.get('window'); */

export const DimensionsScreen = () => {
  const { width, height } = useWindowDimensions();

  return (
    <View>
      <View style={styles.container}>
        <View style={{ ...styles.purpleBox, width: 0.2 * width }} />
        <View style={styles.orangeBox} />
      </View>
      <Text style={styles.title}>
        W: {width}, H: {height}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    width: '100%',
    height: 200,
  },
  purpleBox: {
    backgroundColor: '#5856d6',
    height: '50%',
  },
  orangeBox: {
    backgroundColor: '#f0a23b',
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
  },
});
