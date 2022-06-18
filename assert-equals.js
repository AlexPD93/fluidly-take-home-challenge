function assertEquals(expected, actual) {
  if (expected === actual) {
    return true;
  } else {
    return new Error(`Expected ${expected} but found ${actual}`);
  }
}

module.exports = assertEquals;
