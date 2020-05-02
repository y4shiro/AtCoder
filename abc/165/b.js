const input = `1000000000000000000`;

function Main(input){
  // 文字列を格納
  input = input.trim().split('\n');
  let x = parseFloat(input);
  let i = parseFloat(100);
  let count = 0;

  while (i < x) {
    i *= 1.01;
    i = Math.floor(i);
    count++;
  }

  console.log(count);
};

// Main(require("fs").readFileSync("/dev/stdin", "utf8"));
Main(input);
