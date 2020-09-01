function getSubArr(arr, min, max) {
  let a = 0;
  let b = 0;
  for (var i of arr) {
    if (min <= i && i <= max) {
      a++;
    } else {
      for (var j = 1; j <= a; j++) {
        b += j;
      }
      a = 0;
    }
  }
  for (var j = 1; j <= a; j++) {
    b += j;
  }
  return b;
}
