/**
 *
 * @format
 */
import React from 'react';

import {StatusBar, StyleSheet, View, Platform} from 'react-native';

import {isIphoneX} from '../utils/is-iphone-x';

interface GameStatusBarProp {
  backgroundColor: string;
}

const GameStatusBar = ({backgroundColor, ...props}: GameStatusBarProp) => (
  <View style={[styles.statusBar, {backgroundColor}]}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
);

const iosStatusBarHeight = isIphoneX() ? 40 : 20;
const STATUSBAR_HEIGHT =
  Platform.OS === 'ios' ? iosStatusBarHeight : StatusBar.currentHeight;
const styles = StyleSheet.create({
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
});

export default GameStatusBar;
