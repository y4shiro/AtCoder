const input=`6
382253568 723152896 37802240 379425024 404894720 471526144`;

function Main(input){
  // 文字列をsplitして配列に格納
  input = input.split("\n");
  var s = input[1].split(" ");
  // 文字列をIntに変換
  var n = parseInt(input[0]);
  var arr = s.map(e => parseInt(e));

  var count = 0;

  // 2で割って奇数が出るまで操作とカウントを続ける
  while (true) {
    var odd_flag = false;

    for (var i = 0; i < n; i++){
      if(arr[i] % 2 != 0){
        odd_flag = true;
      }

      arr[i] /= 2;
    }

    if (odd_flag == true){
      break;
    }

    count++;
  }

  console.log(count);
};

// Main(require("fs").readFileSync("/dev/stdin", "utf8"));
Main(input);
