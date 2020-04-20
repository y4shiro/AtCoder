const input=`000`;

function Main(input){
  var count = 0;

  for(var i = 0; i < 3; i++){
    if(input[i] == 1){
      count++;
    }
  }

  console.log(count);
};

// Main(require("fs").readFileSync("/dev/stdin", "utf8"));
Main(input);
