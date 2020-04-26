const input=`10 10`;

function Main(input){
  // 文字列を格納
  input = input.trim().split(' ');
  let s = parseInt(input[0]);
  let w = parseInt(input[1]);

  let ans = 'safe';

  if (s <= w) ans = 'unsafe';

  console.log(ans);
};

// Main(require("fs").readFileSync("/dev/stdin", "utf8"));
Main(input);
