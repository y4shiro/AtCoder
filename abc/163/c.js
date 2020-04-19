// let input = `5
// 1 1 2 2`;

let input = `10
1 1 1 1 1 1 1 1 1`;

// let input = `7
// 1 2 3 4 5 6`;

// function Main(input) {
function Main() {
  // 文字列をsplitして配列に格納
  input = input.split("\n");
  tmp1 = input[0].split(" ");
  tmp2 = input[1].split(" ");

  let n = parseInt(tmp1[0], 10);
  let staff = tmp2.map(e => parseInt(e));

  console.log(staff);

  let dict = {};
  for (let key of staff){
    dict[key] = staff.filter(function(x){return x==key}).length;
  }
  console.log(dict);

  for (let i = 1; i <= n; i++){
    console.log(staff.filter(function(x){return x==i}).length);
  }
}
// Main(require("fs").readFileSync("/dev/stdin", "utf8"));
Main();
