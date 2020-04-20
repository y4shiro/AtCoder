const input=`1 21`;

function Main(input){
  // 文字列をsplitして配列に格納
  input = input.split(" ");
  // 文字列をIntに変換
  var a = parseInt(input[0], 10);
  var b = parseInt(input[1], 10);

  console.log(a);
  console.log(b);

  if ((a*b) % 2 == 0){
    console.log("Even");
  } else {
    console.log("Odd");
  }
};

// Main(require("fs").readFileSync("/dev/stdin", "utf8"));
Main(input);
