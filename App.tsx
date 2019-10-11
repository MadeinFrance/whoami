/**
 *
 * @format
 */

import React, {useState, useEffect} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';

import Colors from './themes/Colors';

import GameStatusBar from './components/GameStatusBar';
import Header from './components/Header';
import Game from './Game';

import MissingNumberLogic from './logic/MissingNumberLogic';

// See Reviewers notes
import Icon from 'react-native-vector-icons/FontAwesome';

const defaultItems = 5;
const App: () => React$Node = () => {
  const [level, setLevel] = useState(0);
  const [items, setItems] = useState(defaultItems);
  const [boxNumbers, setBoxNumbers] = useState(0);
  const [missingNumber, setMissingNumber] = useState(0);
  const [errorCode, setErrorCode] = useState('');

  // Probably not required, just showing 1 possiblity with React Hooks
  useEffect(() => {
    if (errorCode) {
      return;
    }

    setBoxNumbers(MissingNumberLogic.addSomeUniqueNumbers(items));
  }, [items]);

  useEffect(() => {
    if (errorCode && boxNumbers.length) {
      return;
    }

    setMissingNumber(MissingNumberLogic.findMissingNumber(boxNumbers));
  }, [boxNumbers]);

  const onLevelIncrease = (newLevel): boolean => {
    if (errorCode) {
      return false;
    }
    setLevel(newLevel);
    return true;
  };

  const onReset = newLevel => {
    setLevel(0);
    if (errorCode) {
      setErrorCode('');
    }
  };

  const onSetItems = items => {
    if (!MissingNumberLogic.validateSizeBox(items)) {
      setErrorCode('INVALID_ITEMS');
      setItems(items);
      return;
    }
    setItems(items);

    if (errorCode) {
      setErrorCode('');
    }
  };

  const onBoxNumbersChange = userInput => {
    const newItems = userInput.split(',');

    if (!MissingNumberLogic.validateBoxNumbers(newItems, items)) {
      setErrorCode('MISSING_NUMBER_INVALID');
      setBoxNumbers(newItems);
      return;
    }
    setBoxNumbers(newItems);

    if (errorCode) {
      setErrorCode('');
    }
  };

  return (
    <>
      <GameStatusBar
        backgroundColor={Colors.statusBar}
        barStyle="light-content"
      />
      <SafeAreaView style={styles.container}>
        <Header />
        <View style={styles.body}>
          <Game
            onReset={onReset}
            onLevelIncrease={onLevelIncrease}
            items={items}
            setItems={onSetItems}
            level={level}
            errorCode={errorCode}
            boxNumbers={boxNumbers}
            onBoxNumbersChange={onBoxNumbersChange}
            missingNumber={missingNumber}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    flex: 1,
    backgroundColor: Colors.blue,
  },
});

export default App;
