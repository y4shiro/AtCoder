const input=`9 45000`;

function Main(input){
  // 文字列を split 後、Int に変換して格納
  input = input.trim();
  input = input.split(" ");
  const N = parseInt(input[0]);
  const YEN = parseInt(input[1]);

  let res1000 = -1;
  let res5000 = -1;
  let res10000 = -1;

  for (let a = 0; a <= N; a++){ // 10,000円札の枚数を 0 ~ N の範囲で調べる
    for (let b = 0; b + a <= N; b++){ // 5,000円札の枚数を 0 ~ (N - a) の範囲で調べる
      let c = N - a - b; // 千円札の枚数
      let total = 10000 * a + 5000 * b + 1000 * c;

      if(total == YEN) {
        res10000 = a;
        res5000 = b;
        res1000 = c;
      }
    }
  }

  console.log(N);
  console.log(YEN);
  console.log("%d %d %d", res10000, res5000, res1000);

};

// Main(require("fs").readFileSync("/dev/stdin", "utf8"));
Main(input);
