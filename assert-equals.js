function assertEquals(expected, actual) {
  if (expected === actual) {
    return true;
  } else if (typeof expected !== typeof actual) {
    return new Error(
      `Expected type ${typeof expected} but found type ${typeof actual}`
    );
  } else if (expected.length < actual.length) {
    return new Error(
      `Expected length ${expected.length} but found length ${actual.length}`
    );
  } else if (
    Array.isArray(expected) &&
    Array.isArray(actual) &&
    expected.length === actual.length
  ) {
    let expectedLetter = "";
    let actualLetter = "";
    expected.findIndex((letter, i) => {
      if (letter !== actual[i]) {
        expectedLetter = letter;
        actualLetter = actual[i];
      }
    });
    return new Error(`Expected ${expectedLetter} but found ${actualLetter}`);
  } else {
    return new Error(`Expected ${expected} but found ${actual}`);
  }
}

module.exports = assertEquals;
