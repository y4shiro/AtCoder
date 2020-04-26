const input=`4
aaaa
a
aaa
aa`;

function Main(input){
  // 文字列を格納
  input = input.trim();
  input = input.split("\n");
  let n = parseInt(input.shift());

  let set = new Set(input);

  console.log(set.size);
};

// Main(require("fs").readFileSync("/dev/stdin", "utf8"));
Main(input);
