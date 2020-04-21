const input=`20 2 5`;

function findSum(n){
  let sum = 0;

  while (n > 0){
    sum += n % 10;
    n = Math.floor(n / 10);
  }

  return sum;
}

function Main(input){
  // 文字列を split 後、Int に変換して格納
  input = input.split(" ");
  const n = parseInt(input[0]);
  const a = parseInt(input[1]);
  const b = parseInt(input[2]);
  
  let total = 0;

  // 1からNまでを全探索
  for (let i = 1; i <= n; i++){
    const sum = findSum(i);

    if (a <= sum && sum <= b){
      total += i;
    }
  }

  console.log(total);
};

// Main(require("fs").readFileSync("/dev/stdin", "utf8"));
Main(input);
