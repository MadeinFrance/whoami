/**
 *
 * @format
 */

import MissingNumberLogic from '../MissingNumberLogic';

const defaultItems = 5;
const correctInput = [2, 3, 1, 0, 5];

describe('logic/MissingNumber', () => {
  it('can add numbers to debug', () => {
    expect(MissingNumberLogic.addSomeUniqueNumbers(2).length).toEqual(2);
  });

  it('should not validate the box items size', () => {
    expect(MissingNumberLogic.validateSizeBox('e')).toBeFalsy();
    expect(MissingNumberLogic.validateSizeBox(-1)).toBeFalsy();
    expect(MissingNumberLogic.validateSizeBox(11)).toBeFalsy();
  });

  it('should validate the box items size', () => {
    expect(MissingNumberLogic.validateSizeBox(1)).toBeTruthy();
  });

  it('should not validate the items', () => {
    expect(MissingNumberLogic.validateBoxNumbers(-1, defaultItems)).toBeFalsy();
    expect(MissingNumberLogic.validateBoxNumbers([], defaultItems)).toBeFalsy();
    expect(
      MissingNumberLogic.validateBoxNumbers(['1', 'sdsd'], defaultItems),
    ).toBeFalsy();
    expect(
      MissingNumberLogic.validateBoxNumbers(['1', ''], defaultItems),
    ).toBeFalsy();
    expect(
      MissingNumberLogic.validateBoxNumbers(['1', '0', '2', '3'], defaultItems),
    ).toBeFalsy();
    expect(
      MissingNumberLogic.validateBoxNumbers(['1', '0', '0', '3'], defaultItems),
    ).toBeFalsy();
    expect(
      MissingNumberLogic.validateBoxNumbers(correctInput.map(String), '1'),
    ).toBeFalsy();
  });

  it('should validate the items', () => {
    expect(
      MissingNumberLogic.validateBoxNumbers(
        correctInput.map(String),
        defaultItems,
      ),
    ).toBeTruthy();
  });

  it('can not find the missing number', () => {
    expect(MissingNumberLogic.findMissingNumber('1')).toEqual(-1);
  });

  it('find the missing number', () => {
    expect(MissingNumberLogic.findMissingNumber(correctInput)).toEqual(4);
  });
});
