// const input=`erasedream`;
// const input=`dreameraser`;
const input=`dreamerer`;

function Main(input){
  // 文字列を格納
  str = input.trim();
  let words = ['dream', 'dreamer', 'erase', 'eraser'];

  // 各文字列を反転
  let rev_str = str.split('').reverse().join('');
  let rev_words = words.map(e => e.split('').reverse().join(''));
  let ans = 'NO';

  let wordLength = 0;
  while (true) {
    let findWord = rev_words.find(e => rev_str.startsWith(e, wordLength));
    if (!findWord) {
      break;
    }
    wordLength += findWord.length;
  }

  if (wordLength === rev_str.length) {
    ans = 'YES';
  }

  console.log(ans);
};

// Main(require("fs").readFileSync("/dev/stdin", "utf8"));
Main(input);
