var readlineSync = require('readline-sync');
var userName = readlineSync.question('What is your name? ');
const chalk = require('chalk');
console.log(chalk.red.bold(userName + ', welcome to my quiz!'));
var score = 0;
var questions = [{
  question: "Where is my hometown? ",
  answer: "Midnapore"
},
{
  question: "How old am I? ",
  answer: "21"
},
{
  question: "When is my birthday? (DD/MM) ",
  answer: "03/01"
},
{
  question: "How many members are there in my family? (enter the number) ",
  answer: "4"
},
{
  question: "Which year will I be completing my graduation in? (YYYY) ",
  answer: "2023"
},
{
  question: "Which particular classical dance form did I learn mainly since childhood? ",
  answer: "Odissi"
}]
var count = 0;

function play(question, answer){
  var userAns = readlineSync.question(question);
  if(userAns.toLowerCase() === answer.toLowerCase()){
    score = score + 1;
  }
  else{
    score = score - 1;
    count = count + 1;
  }
}
for(var i = 0; i < questions.length;i++){
  var quest = questions[i];
  play(quest.question, quest.answer);
}
console.log(chalk.cyan.bold('Your score is: ' + score));
console.log(chalk.blue('No. of wrong answers: '+count));

