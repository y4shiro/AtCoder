const input = `3 4 3
1 3 3 100
1 2 2 10
2 3 2 10`;

function Main(input){
  // 文字列を格納
  input = input.trim().split('\n');
  let tmp = input[0].split(' '); 
  input.shift();
  let n = parseInt(tmp[0]);
  let m = parseInt(tmp[1]);
  let q = parseInt(tmp[2]);

  // 整数に変換
  let a = input.map(x => x.split(' ').map(x => parseInt(x)));

  console.log(n);
  console.log(m);
  console.log(q);
};

// Main(require("fs").readFileSync("/dev/stdin", "utf8"));
Main(input);
