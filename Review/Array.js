const arr = [];
const arr2 = [1, 2, 3, 4];
const arr3 = Array.from({ length: 100 }, (_, i) => i);
const arr4 = Array.from({ length: 10 });
const arr5 = Array.from(Array(5), () => []);
const arr6 = Array.from(Array(5), () => Array(5).fill(false));
const arr7 = Array.from("foo");
const arr8 = Array.from([1, 2, 3], (x) => x + 1);

arr.push(4);
arr.push(5, 6, 7, 8, 9);
arr.splice(3, 0, 128);
arr.splice(3, 1);
arr.length;
arr.pop();
arr.forEach((item, idx, array) => {
  //console.log(item, idx);
});

arr.unshift(3);
arr.shift();
arr.at(-1); // arr[arr.length-1]
const arr9 = arr.concat(arr3);
arr.every((value) => value < 40);
const arr10 = arr.filter((value) => value > 6);
const va = arr.find((value) => value > 7);
arr.findIndex((value) => value > 7);
arr.findLast((value) => value > 7);
arr.findLastIndex((value) => value > 7);
arr.flat();
arr.flat(2);

const brr = ["it's Sunny in", "", "California"];
const brr2 = brr.map((value) => value.split(" "));
const brr3 = brr.flatMap((value) => value.split(" "));
const bIdx = brr3.indexOf("in");
const bstr = brr.join("-");
const brr4 = brr.map((value) => value + "KK");
const sum = arr.reduce((acc, cur) => acc + cur * cur);
arr.reverse();
const crr = arr.slice(0, 2);
const cstr = arr.toString();

const copy = [...arr];
const copy2 = Array.from(arr);
const copy3 = arr.slice();

const deepCopy = JSON.parse(JSON.stringify(arr));

function compareFn(a, b) {
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }

  return 0;
}

arr.sort((a, b) => a - b);
arr.sort((a, b) => b - a);

// songArray.sort((prev, cur) => {
//   if (prev[2] === cur[2]) {
//     return prev[1] - cur[1] > 0 ? 1 : -1;
//   }
//   return cur[2] - prev[2];
// });

const items = [
  { name: "Edward", value: 21 },
  { name: "Sharpe", value: 37 },
  { name: "And", value: 45 },
  { name: "The", value: -12 },
  { name: "Magnetic", value: 13 },
  { name: "Zeros", value: 37 },
];

items.sort((a, b) => a.value - b.value);

items.sort((a, b) => {
  const nameA = a.name.toUpperCase();
  const nameB = b.name.toUpperCase();

  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  return 0;
});

const data = ["delta", "alpha", "charlie", "bravo"];

const mapped = data.map((v, i) => {
  return { i, value: v.toUpperCase() };
});

mapped.sort((a, b) => {
  if (a.value > b.value) {
    return 1;
  }
  if (a.value < b.value) {
    return -1;
  }
  return 0;
});

const result = mapped.map((v) => data[v.i]);

console.log(result);
