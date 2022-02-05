const counter = document.getElementById("counter");
const counter2 = document.getElementById("counter2");
const counter3 = document.getElementById("counter3");
const plus = document.getElementById("plus");
const plus2 = document.getElementById("plus2");
const plus3 = document.getElementById("plus3");
const display = document.getElementById("display");
const reSet = document.getElementById("re-set");

// number,n,mの変数宣言
let number = 0;
let l = 0;
let n = 0;
let m = 0;

// // ボタンを押したときの処理
// plus.onclick = function () {
//   // カウントを１増やす
//   number += 10;
//   //   counterのtextContentをnumberに代入
//   counter.textContent = number;
//   //   素数となる条件式による表示の変化
//   if (isPrimeNumber(number)) {
//     display.textContent = "👀❗️素数😍😍😍😍";
//   } else {
//     display.textContent = "👀　素数じゃない...";
//   }
//   if (50 < number && number <= 100) {
//     display.textContent += "...暇なの？";
//   }
//   if (number > 100) {
//     display.textContent += "...ばかなの？？";
//   }
// };
plus.onclick = function () {
  //カウントを１増やす
  l += 1;
  // 桁が増えたら、桁上げを行う。
  if (l > 9) {
    // 桁上げの処理
    l = 0;
  }
  // 何かのtextContentにカウントを入れる
  counter.textContent = l;
};
//plus2の処理
plus2.onclick = function () {
  //カウントを１増やす
  n += 1;
  // 桁が増えたら、桁上げを行う。
  if (n > 9) {
    // 桁上げの処理
    n = 0;
    //桁上げをする
    l += 1;
    counter.textContent = l;
  }
  // 何かのtextContentにカウントを入れる
  counter2.textContent = n;
};
//plus3の処理
plus3.onclick = function () {
  //カウントを１増やす
  m += 1;
  // 桁が増えたら、桁上げを行う。
  if (m > 9) {
    // 桁上げの処理
    m = 0;
    //桁上げをする
    n += 1;
    counter2.textContent = n;
  }
  // 何かのtextContentにカウントを入れる
  counter3.textContent = m;
};
//reSetの処理
reSet.onclick = function () {
  counter.textContent = "0";
  counter2.textContent = "0";
  counter3.textContent = "0";
};

// 素数となる条件式プログラム
const isPrimeNumber = function (n) {
  if (n === 1) {
    return false;
  }
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};
