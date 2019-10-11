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
import SmallHeader from '../../ui/SmallHeader';
import ErrorMessage from '../../ui/ErrorMessage';

const StepTwo: (props) => React$Node = props => {
  return (
    <>
      <SmallHeader
        onPress={props.reset}
        text={Labels.Game.StepTwo.navigationTitle}
      />
      <Text style={styles.sectionTitle}>{Labels.Game.StepTwo.title}</Text>
      <ValueInput
        onChange={props.onChange}
        onSubmitEditing={props.onSubmitEditing}
        value={props.value.toString()}
      />
      <NextButton
        title={Labels.Game.StepTwo.actionTitle}
        onPress={props.next}
      />
      <ErrorMessage errorCode={props.errorCode} />
    </>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    width: 100,
    marginVertical: 30,
  },
  textInput: {
    color: Colors.black,
    height: 30,
    textAlign: 'center',
    borderWidth: 1,
  },
  sectionTitle: {
    fontWeight: 'bold',
  },
});

export default StepTwo;
