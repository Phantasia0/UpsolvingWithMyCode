function Dsort(lt, rt, arr) {
  if (lt < rt) {
    let mid = Math.floor((lt + rt) / 2);
    Dsort(lt, mid, arr);
    Dsort(mid + 1, rt, arr);
    let p1 = lt;
    let p2 = mid + 1;
    let tmp = [];
    while (p1 <= mid && p2 <= rt) {
      if (arr[p1] < arr[p2]) {
        tmp.push(arr[p1]);
        p1 += 1;
      } else {
        tmp.push(arr[p2]);
        p2 += 1;
      }
    }
    if (p1 <= mid) {
      tmp = [...tmp, ...arr.slice(p1, mid + 1)];
    }
    if (p2 <= rt) {
      tmp = [...tmp, ...arr.slice(p2, rt + 1)];
    }

    for (let i = 0; i < tmp.length; i++) {
      arr[lt + i] = tmp[i];
    }
  }
}

arr = [23, 11, 45, 36, 15, 67, 33, 21];
console.log(arr);

Dsort(0, 7, arr);
console.log(arr);
