import { expect, test } from "bun:test";
import { capitalize, reverse, add, cipher, analyze } from ".";

test("capitalize", () => {
  expect(capitalize("fizz")).toBe("Fizz");
});
test("reverse string", () => {
  expect(reverse("hello")).toBe("olleh");
});
test("calc add", () => {
  expect(add(2, 4)).toBe(6);
});
test("cipher 1", () => {
  expect(cipher("heLLo", 3)).toBe("khOOr");
});
test("cipher 2", () => {
  expect(cipher("xyz", 3)).toBe("abc");
});
test("analyze", () => {
  expect(analyze([1, 4, 7, 11, 2, 15])).toEqual({
    average: 6,
    min: 1,
    max: 15,
    length: 6,
  });
});
