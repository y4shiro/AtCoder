function Main(input) {
  let n = parseInt(input, 10);
  let ans = n * 2 * Math.PI;

  console.log('%d', ans);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
