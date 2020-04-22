const input=`4
20 18 2 18`;

function Main(input){
  // 文字列を split 後、Int に変換して格納
  input = input.split("\n");
  const n = parseInt(input[0]);

  let card = input[1].split(" ");
  card = card.map(e => parseInt(e));

  // 降順にソートする
  card.sort((a, b) => b - a);

  let alice = 0;
  let bob = 0;

  for (let i = 0; i < n; i++){
    if (i % 2 == 0) {
      alice += card.shift();
    } else {
      bob += card.shift();
    }
  }
  
  console.log(alice - bob);
};

// Main(require("fs").readFileSync("/dev/stdin", "utf8"));
Main(input);
