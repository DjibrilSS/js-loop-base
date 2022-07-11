let arr = [
  "Джабраил",
  "Исмаил",
  "Альви",
  "Адам",
  "Ибреим",
  "Саламбек",
  "Милана",
  "Ильяс",
  "Хусейн",
  "Мохьмад",
];

let accumulator = [];

for (let i = 0; i < arr.length; i++) {
  if (arr[i][0] === "А") {
    accumulator.push(arr[i]);
  }
}
