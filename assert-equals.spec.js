const assertEquals = require("./assert-equals");

//1. "abc"	"abc"	No error
test("abc to match abc", () => {
  expect(assertEquals("abc", "abc")).toBe(true);
});

//2. "abcef"	"abc"	Throws error with message 'Expected "abcef" but found "abc"'
test("abcef to match abc", () => {
  expect(assertEquals("abcef", "abc")).toBe(true);
});

//3. 1	1	No error
test("1 to match 1", () => {
  expect(assertEquals(1, 1)).toBe(true);
});

//4. 1	2	Throws error with message 'Expected 1 but found 2'
test("1 to match 2", () => {
  expect(assertEquals(1, 2)).toBe(true);
});

//5. 1	'1'	Throws error with message 'Expected type number but found type string'
test(`1 to match "1"`, () => {
  expect(assertEquals(1, "1")).toBe(true);
});

//6. ['a', 'b', 'c']	['a', 'b', 'c']	No error
describe("checking each array item", () => {
  test("['a', 'b', 'c'] to match ['a', 'b', 'c']", () => {
    expect(assertEquals(["a", "b", "c"][0], ["a", "b", "c"][0])).toBe(true);
  });
  test("['a', 'b', 'c'] to match ['a', 'b', 'c']", () => {
    expect(assertEquals(["a", "b", "c"][1], ["a", "b", "c"][1])).toBe(true);
  });
  test("['a', 'b', 'c'] to match ['a', 'b', 'c']", () => {
    expect(assertEquals(["a", "b", "c"][2], ["a", "b", "c"][2])).toBe(true);
  });
});

//7 ['a', 'b']	['a', 'b', 'c']	Throws error with message 'Expected length 2 but found length 3'

test("['a', 'b'] length to match ['a', 'b', 'c'] length", () => {
  expect(assertEquals(["a", "b"], ["a", "b", "c"])).toBe(true);
});

//8. ['a', 'b']	['a', 'd']	Throws error with message 'Expected "b" but found "d"'

test(`['a', 'b'] to match ['a', 'd']`, () => {
  expect(assertEquals(["a", "b"], ["a", "d"])).toBe(true);
});

// Extra tests to cover additional cases

//9. 4 + 10 9 + 16 Throws error with message 'Expected 14 but found 25'
test(`Sums to equal same amount`, () => {
  expect(assertEquals(4 + 10, 9 + 16)).toBe(true);
});

//10. True or false Throws error with message 'Expected true but found false'
test(`True or false`, () => {
  expect(assertEquals(true, false)).toBe(true);
});

//11. String comparison case sensitive Throws error with message 'Expected Hello but got hello'
test(`String comparison case sensitive`, () => {
  expect(assertEquals("Hello", "hello")).toBe(true);
});

//12. Undefined and null Throws error 'Expected type undefined but found type object'
test(`Undefined and null`, () => {
  expect(assertEquals(undefined, null)).toBe(true);
});

//13. +0 and -0 No error
test(`+0 and -0`, () => {
  expect(assertEquals(+0, -0)).toBe(true);
});

//14. {name: alex} and {name: alex} No error
const alexObj = {
  name: "alex",
};
test(`Same object`, () => {
  expect(assertEquals(alexObj, alexObj)).toBe(true);
});
