const input=`4
5 7`;

function Main(input){
  // 文字列を格納
  input = input.trim().split('\n');
  tmp = input[1].split(' ');
  let k = parseInt(input[0]);
  let a = parseInt(tmp[0]);
  let b = parseInt(tmp[1]);

  let ans = 'NG';

  for (let i = a; i <= b; i++){
    if (i % k == 0){
      ans = 'OK';
    }
  }

  console.log(ans);
};

// Main(require("fs").readFileSync("/dev/stdin", "utf8"));
Main(input);
