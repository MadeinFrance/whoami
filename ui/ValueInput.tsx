/**
 *
 * @format
 */

import React from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';

import Colors from '../themes/Colors';

type ValueInputProps = {
  value: string;
  onChange: string;
  onBlur: Function;
  onSubmitEditing: Function;
};

const ValueInput = (props: ValueInputProps) => (
  <View style={styles.inputContainer}>
    <TextInput
      keyboardType="number-pad"
      autoCapitalize="words"
      onChangeText={props.onChange}
      onBlur={props.onBlur}
      onSubmitEditing={e => {
        props.onSubmitEditing(e.nativeEvent.text);
      }}
      style={styles.textInput}
      underlineColorAndroid="transparent"
      value={props.value}
    />
  </View>
);

const styles = StyleSheet.create({
  inputContainer: {
    width: 100,
    marginVertical: 30,
  },
  textInput: {
    color: Colors.black,
    height: 40,
    textAlign: 'center',
    borderWidth: 1,
  },
});

export default ValueInput;
