let str = "aaabbbbbbcc";
let obj = {};
for (let i = 0; i < str.length; i++) {
  if (!obj[str.charAt(i)]) {
    obj[str.charAt(i)] = 1;
  } else {
    obj[str.charAt(i)]++;
  }
}
let maxValue = 0;
let maxStr = "";
for (var key in obj) {
  if (obj[key] > maxValue) {
    maxValue = obj[key];
    maxStr = key;
  }
}
console.log("出现最多的元素为：" + maxStr + "出现" + maxValue + "次");
