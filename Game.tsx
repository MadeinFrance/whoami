/**
 *
 * @format
 */

import React, {Component} from 'react';
import {StyleSheet, View, ScrollView, Animated} from 'react-native';

import Colors from './themes/Colors';
import Labels from './Labels';

import StepOne from './components/steps/StepOne';
import StepTwo from './components/steps/StepTwo';
import StepThree from './components/steps/StepThree';

type GameState = {
  containerWidth: number;
};

const scrollEventThrottle = 16;
const scrollViewPadding = 30;

class Game extends Component<{}, GameState> {
  state: GameState = {
    containerWidth: 0,
  };

  scrollView?: ScrollView;

  render() {
    const {containerWidth} = this.state;
    const {
      level,
      items,
      setItems,
      errorCode,
      boxNumbers,
      onBoxNumbersChange,
      missingNumber,
    } = this.props;

    const stepContainerStyle = [
      styles.stepContainer,
      {width: containerWidth - scrollViewPadding * 2},
    ];
    return (
      <View style={styles.body} onLayout={this.onTopContainerLayout}>
        <ScrollView
          scrollEnabled={false}
          contentContainerStyle={{
            paddingHorizontal: scrollViewPadding,
          }}
          scrollEventThrottle={scrollEventThrottle}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          ref={this.setScrollViewRef}>
          <View
            key="level-1"
            style={[stepContainerStyle, {marginRight: scrollViewPadding}]}>
            <StepOne
              onSubmitEditing={setItems}
              onChange={setItems}
              value={items}
              next={() => this.onNext()}
              errorCode={errorCode}
            />
          </View>
          <View
            key="level-2"
            style={[stepContainerStyle, {marginHorizontal: scrollViewPadding}]}>
            <StepTwo
              onSubmitEditing={onBoxNumbersChange}
              onChange={onBoxNumbersChange}
              value={boxNumbers}
              next={() => this.onNext()}
              reset={() => this.onReset()}
              errorCode={errorCode}
            />
          </View>
          <View key="level-3" style={stepContainerStyle}>
            <StepThree value={missingNumber} reset={() => this.onReset()} />
          </View>
        </ScrollView>
      </View>
    );
  }

  onReset = () => {
    this.props.onReset();
    this.setScrollViewIndex(0);
  };

  onNext = () => {
    const {level, onLevelIncrease} = this.props;
    const newLevel = level + 1;

    const allowed = onLevelIncrease(newLevel);

    if (allowed) {
      this.setScrollViewIndex(newLevel);
    }
  };

  setScrollViewIndex = (index: number) => {
    if (!this.scrollView) {
      return;
    }
    this.scrollView.scrollTo({
      x: index * this.state.containerWidth,
      y: 0,
      animated: true,
    });
  };

  onTopContainerLayout = (event: LayoutEvent) => {
    const {width} = event.nativeEvent.layout;
    this.setState({containerWidth: width});
  };

  setScrollViewRef = (ref?: ScrollView) => {
    this.scrollView = ref;
  };
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  stepContainer: {
    alignItems: 'center',
    backgroundColor: Colors.white,
    height: 300,
    paddingVertical: 80,
    borderRadius: 5,
  },
});

export default Game;
