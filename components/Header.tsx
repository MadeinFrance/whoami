/**
 *
 * @format
 */
import React from 'react';

import {StyleSheet, View, Text} from 'react-native';

import Colors from '../themes/Colors';
import Labels from '../Labels';

const Header: () => React$Node = () => {
  return (
    <View style={styles.container} >
      <Text style={styles.text}>{Labels.Header.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: Colors.white,
    zIndex: 1,
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 1.5,
    },
    shadowOpacity: .4,
    shadowRadius: 1.22,
    elevation: 10,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 15,
    marginVertical: 15,
    color: Colors.blue
  },
});

export default Header;
