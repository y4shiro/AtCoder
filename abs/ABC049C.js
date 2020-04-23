const input=`erasedream`;
// const input=`dreameraser`;
// const input=`dreamerer`;

function Main(input){
  // 文字列を格納
  str = input.trim();
  const LENGTH = str.length;
  let words = ['dream', 'dreamer', 'erase', 'eraser'];

  // 各文字列を反転
  let rev_str = str.split('').reverse().join('');
  let rev_words = words.map(e => e.split('').reverse().join(''));
  let ans = 'YES';

  for (let i = 0; i < LENGTH;){
    let can = false;

    for (let j = 0; j < 4; j++){
      if (rev_str.indexOf(rev_words[j]) === 0){
        can = true;
        i += rev_words[j].length;
      }
    }

    if (!can) {
      ans = 'NO';
      break;
    }
  }

  console.log(ans);
};

// Main(require("fs").readFileSync("/dev/stdin", "utf8"));
Main(input);
