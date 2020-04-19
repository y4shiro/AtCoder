function Main(input){
  // 文字列をsplitして配列に格納
  input = input.split("\n");
  tmp = input[1].split(" ");
  // 文字列をIntに変換
  var a = parseInt(input[0], 10);
  var b = parseInt(tmp[0], 10);
  var c = parseInt(tmp[1], 10);
  var s = input[2];

  console.log('%d %s', a+b+c, s);
};

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
