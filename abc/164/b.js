const input=`46 4 40 5`;

function Main(input){
  // 文字列を格納
  input = input.trim().split(' ');
  let t_hp = parseInt(input[0]);
  let t_at = parseInt(input[1]);
  let a_hp = parseInt(input[2]);
  let a_at = parseInt(input[3]);

  let ans = 'Yes';

  while ((t_hp > 0) && (a_hp > 0)){
    a_hp -= t_at;
    if (a_hp <= 0) {
      break;
    }
    t_hp -= a_at;
    if (t_hp <= 0) {
      ans = 'No';
      break;
    }
  }

  console.log(ans);
};

// Main(require("fs").readFileSync("/dev/stdin", "utf8"));
Main(input);
