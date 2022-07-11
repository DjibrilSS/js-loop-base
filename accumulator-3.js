let arr = [
  "python",
  "JavaScript",
  "c#",
  "c",
  "c++",
  "java",
  "ruby",
  "html",
  "css",
  "php",
];

let accumulator = [];

for (let i = 0; i < arr.length; i++) {
  if (arr[i].length > 3) {
    accumulator.push(arr[i]);
  }
}
