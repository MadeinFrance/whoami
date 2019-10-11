/**
 *
 * @format
 */

const validateSizeBox = (input: string) => {
  const userInput = parseInt(input, 10);
  return userInput > 0 && userInput < 10;
};

const validateBoxNumbers = (
  boxItemsInput: Array<string>,
  requiredAmount: number,
): boolean => {
  if (!boxItemsInput.length) {
    return false;
  }

  const someAreNotIntegers = boxItemsInput.some(
    //@ts-ignore
    aNumber => !Number.isInteger(parseInt(aNumber, 10)),
  );
  const boxItemsNumbers = boxItemsInput.map(Number);
  const shouldContainZero = boxItemsNumbers.indexOf(0) !== -1;
  const shouldContainZeroOneTime =
    findAllOccurences(0, boxItemsNumbers).length === 1;

  const isInputValid =
    Array.isArray(boxItemsNumbers) &&
    boxItemsNumbers.length === parseInt(requiredAmount, 10) &&
    !someAreNotIntegers &&
    shouldContainZero &&
    shouldContainZeroOneTime;

  return isInputValid;
};

const findAllOccurences = (
  seachItem: number,
  items: Array<number>,
): Array<number> => {
  // @ts-ignore
  const occurences = items.reduce(function(
    a: Array<number>,
    e: number,
    item: number,
  ) {
    if (e === seachItem) {
      a.push(item);
    }
    return a;
  },
  []);
  return occurences;
};

/**
 * Missing number logic:
 * - We know the anticipated sum
 * - The missing one is the total minus the actual values present in Array
 */
const findMissingNumber = (items: Array<string>): number => {
  if (!Array.isArray(items)) {
    return -1;
  }

  const numberItems: Array<number> = items.map(Number);
  const n = numberItems.length;
  const anticipatedSum = (n * (n + 1)) / 2;
  // @ts-ignore
  const total = numberItems.reduce((a, b) => a + b, 0);
  return anticipatedSum - total;
};

const shuffle = (a: Array<number>) => {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

/**
 * Not required but easy testing
 */
const addSomeUniqueNumbers = (total: number) => {
  let boxNumbers = [];
  for (let index = 0; index < total; index++) {
    boxNumbers.push(index);
  }
  return shuffle(boxNumbers);
};

const MissingNumberLogic = {
  validateSizeBox,
  addSomeUniqueNumbers,
  validateBoxNumbers,
  findMissingNumber,
};

export default MissingNumberLogic;
