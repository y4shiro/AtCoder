const input=`7
50
30
50
100
50
80
30`;

function Main(input){
  // 文字列を split 後、Int に変換して格納
  input = input.split("\n");
  const n = parseInt(input.shift());
  let mochi = input.map(e => parseInt(e));

  // 重複を弾く
  let set = new Set(mochi);
  mochi = [...set];

  // 降順にソートする
  mochi.sort((a, b) => b - a);

  console.log(mochi.length);
};

// Main(require("fs").readFileSync("/dev/stdin", "utf8"));
Main(input);
