var readlineSync = require('readline-sync');
const chalk = require('chalk');

var userName = readlineSync.question(chalk.hex('#52adf2')('May i have your name? '))
console.log('Welcome ' + userName);

var score = 0;

var qNa = [
  {
    question:'Where do i live? ',
    answer:'delhi'
  },
  {
    question:'Whose my favourite marvel character? ',
    answer:'loki'
  },
  {
    question:'whats my favourite sitcom? ',
    answer:'friends'
  }
];


for(let i = 0;i < qNa.length; i++){
  quiz(qNa[i].question,qNa[i].answer);
}

console.log(chalk.hex('#34ebe5')('Your total score is '+ score));


function quiz(ques,ans){
var userAnswer = readlineSync.question(ques);


if(userAnswer === ans){
  console.log(chalk.green('Right!'))
  score+=1;
}
else{
  console.log(chalk.red('Wrong!'))
  score-=1;
}

console.log(chalk.hex('#34ebe5')('Current Score '+ score));
console.log('-----------------------------')
}


