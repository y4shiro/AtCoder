let input = `314 15
9 26 5 35 8 9 79 3 23 8 46 2 6 43 3`;

// function Main(input) {
function Main() {
  // 文字列をsplitして配列に格納
  input = input.split("\n");
  tmp1 = input[0].split(" ");
  tmp2 = input[1].split(" ");

  let n = parseInt(tmp1[0], 10);
  let m = parseInt(tmp1[1], 10);
  let kadai = tmp2.map(e => parseInt(e));
  let total = kadai.reduce(function(a, x){ return a + x;});
  let days_left = n - total;

  // console.log(input);
  // console.log('%d', n);
  // console.log(total);
  // console.log(days_left);

  if (days_left >= 0){
    console.log(days_left);
  } else {
    console.log(-1);
  }

}
// Main(require("fs").readFileSync("/dev/stdin", "utf8"));
Main();
