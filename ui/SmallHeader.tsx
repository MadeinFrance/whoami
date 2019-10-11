/**
 *
 * @format
 */

import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

import Colors from '../themes/Colors';

const SmallHeader: (props) => React$Node = props => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={props.onPress}>
        <Text style={styles.text}>{props.text}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 15,
    right: 15,
  },
  text: {
    color: Colors.blue,
    fontWeight: '900',
  },
});

export default SmallHeader;
