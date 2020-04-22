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
  input = input.trim();
  input = input.split("\n");
  input.shift();

  // 重複を弾く
  let set = new Set(input);

  console.log(set.size);
};

// Main(require("fs").readFileSync("/dev/stdin", "utf8"));
Main(input);
