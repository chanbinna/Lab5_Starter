// sum.test.js
import { sum } from "../code-to-unit-test/sum";

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(5);
});

test("adds 10 + 20 to equal 30", () => {
  expect(sum(10, 20)).toBe(30);
});
