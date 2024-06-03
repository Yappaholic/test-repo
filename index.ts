export function capitalize(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1, s.length);
}
export function reverse(s: string) {
  return s.split("").reverse().join("");
}
export function add(x: number, y: number) {
  return x + y;
}
export function cipher(letter: string, key: number) {
  let lowercase = [97, 122];
  let uppercase = [65, 90];
  let arr = letter.split("");
  for (let i = 0; i < arr.length; i++) {
    let code = arr[i].charCodeAt(0);
    if (
      lowercase[0] < code &&
      code <= lowercase[1] &&
      code + key > lowercase[1] - 1
    ) {
      code = code + key - lowercase[1] + lowercase[0] - 1;
      arr[i] = String.fromCharCode(code);
      continue;
    } else if (
      uppercase[0] < code &&
      code <= uppercase[1] &&
      code + key > uppercase[1] - 1
    ) {
      code = code + key - uppercase[1] + uppercase[0] - 1;
      arr[i] = String.fromCharCode(code);
      continue;
    } else {
      code += key;
      arr[i] = String.fromCharCode(code);
      continue;
    }
  }
  return arr.join("");
}
export function analyze(arr: number[]) {
  let average = Math.floor(arr.reduce((a, b) => a + b) / arr.length);
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let length = arr.length;
  let result = {
    average: average,
    min: min,
    max: max,
    length: length,
  };
  return result;
}
