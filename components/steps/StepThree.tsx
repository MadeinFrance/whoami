/**
 *
 * @format
 */

import React from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';

import Colors from '../../themes/Colors';
import Labels from '../../Labels';

import SmallHeader from '../../ui/SmallHeader';

const StepThree: (props) => React$Node = props => {
  return (
    <>
      <SmallHeader
        onPress={props.reset}
        text={Labels.Game.StepThree.navigationTitle}
      />
      <Text style={styles.sectionTitle}>{Labels.Game.StepThree.title}</Text>
      <Text style={styles.result}>{props.value.toString()}</Text>
    </>
  );
};

const styles = StyleSheet.create({
  sectionTitle: {
    fontWeight: '800',
    fontSize: 20,
  },
  result: {
    fontWeight: '800',
    marginTop: 30,
    fontSize: 30,
    color: Colors.blue,
  },
});

export default StepThree;
