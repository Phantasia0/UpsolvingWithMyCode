function Qsort(lt, rt, arr) {
  if (lt < rt) {
    let pos = lt;
    let pivot = arr[rt];
    for (let i = lt; i < rt; i++) {
      if (arr[i] <= pivot) {
        [arr[i], arr[pos]] = [arr[pos], arr[i]];
        pos += 1;
      }
    }
    [arr[rt], arr[pos]] = [arr[pos], arr[rt]];

    Qsort(lt, pos - 1, arr);
    Qsort(pos + 1, rt, arr);
  }
}

const arr = [45, 21, 23, 36, 15, 67, 11, 60, 20, 33];
Qsort(0, 9, arr);
console.log(arr);
