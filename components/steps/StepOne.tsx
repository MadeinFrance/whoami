/**
 *
 * @format
 */

import React from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';

import Colors from '../../themes/Colors';
import Labels from '../../Labels';

import NextButton from '../../ui/NextButton';
import ValueInput from '../../ui/ValueInput';
import ErrorMessage from '../../ui/ErrorMessage';

const StepOne: (props) => React$Node = props => (
  <>
    <Text style={styles.sectionTitle}>{Labels.Game.StepOne.title}</Text>
    <ValueInput
      onChange={props.onChange}
      onSubmitEditing={props.onSubmitEditing}
      value={props.value.toString()}
    />
    <NextButton title={Labels.Game.StepOne.actionTitle} onPress={props.next} />
    <ErrorMessage errorCode={props.errorCode} />
  </>
);

const styles = StyleSheet.create({
  sectionTitle: {
    fontWeight: 'bold',
  },
});

export default StepOne;
