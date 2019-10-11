/**
 *
 * @format
 */

import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

import Colors from '../themes/Colors';
import ErrorCodes from '../logic/ErrorCodes';

const ErrorMessage: (props) => React$Node = props => {
  const {message} = ErrorCodes[props.errorCode] || {};

  return message ? (
    <View style={styles.container}>
      <Text style={styles.message}>{message}</Text>
    </View>
  ) : null;
};

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
  },
  message: {
    textAlign: 'center',
    color: Colors.red,
  },
});

export default ErrorMessage;
