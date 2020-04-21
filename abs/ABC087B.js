const input=`30
40
50
6000`;

function Main(input){
  // 文字列をsplit後、Int に変換して格納
  input = input.split("\n");
  const a = parseInt(input[0]);
  const b = parseInt(input[1]);
  const c = parseInt(input[2]);
  const x = parseInt(input[3]);
  
  let count = 0;

  // for で全探索
  for (let i = 0; i <= a; i++){
    for (let j = 0; j <= b; j++){
      for (let k = 0; k <= c; k++){
        let sum = (i * 500) + (j * 100) + (k * 50);
        if(x == sum){
          count++;
        }
      }
    }
  }

  console.log(count);
};

// Main(require("fs").readFileSync("/dev/stdin", "utf8"));
Main(input);
