/**
 *
 * @format
 */

import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

import Colors from '../themes/Colors';

type NextButtonProps = {title: string; onPress: Function};

const NextButton: (props) => React$Node = props => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={props.onPress}>
        <Text style={styles.title}>{props.title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const radius = 20;
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.lightBlue,
    borderRadius: radius,
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 1.5,
    },
    shadowOpacity: 0.4,
    shadowRadius: 1.22,
    elevation: 10,
  },
  button: {
    borderRadius: radius,
    backgroundColor: Colors.lightBlue,
    width: 100,
    height: 40,
  },
  title: {
    textAlign: 'center',
    color: Colors.white,
    fontWeight: 'bold',
    paddingVertical: 11,
  },
});

export default NextButton;
