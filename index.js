var rls = require('readline-sync');

var score = 0;
var topscores = [
{
  'first':'Shivani : 5',
  'second':'Anna : 4',
  'third': 'Kanishk : 3',
}
]
var highscore=5;

var qna = [
  {
    q:"1. What is my mother tongue? \n",
    a:'tamil'
  },
  {
    q:'\n2. Which is the camp I am most excited for?\n',
    a:'neogcamp'
  },
   {
    q:'\n3. What is my favourite javascript library?\n',
    a:'reactjs'
  },  
     {
    q:'\n4. Name a book that I am currently reading?\n',
    a:"'algorithms to live by'"
  },   
     {
    q:'\n5. Where do I work right now?\n',
    a:'tcs'
  },  
]

var name = rls.question('Please enter your name : ');
var i;
var s='*'; var u='-';
for(i=0; i<60; i++){
  s=s+'*';
  u=u+'-';
}

console.log('\nQUIZ : How well do you know me. \n\n Hi',name,'!\n');
console.log('\n',s)
console.log('\nTo answer a question, simply enter the alphabet for the correct option.\n');
console.log(u,'\n');
for(var i=0; i<qna.length; i++){
  Game(qna[i].q, qna[i].a);
}

if(score>2 && score>highscore){
  console.log('Your score = ',score,". Well done, you have set a new record for the highest score! Looks like we're very close friends. ");
  // highscore=score;
}
else if(score>2 && score<highscore){
  console.log('Your score = ',score,'. Good to see, here are the top 3 scorers - \n', topscores[0].first,'\n',topscores[0].second,'\n',topscores[0].third,'\n');
}
else{
  console.log('\nYour score = ',score,'. \nHere are the top 3 scorers - \n', topscores[0].first,'\n',topscores[0].second,'\n',topscores[0].third,'\n',"\n Looks like we've lost touch! Let's catch up soon, do ping me to connect.");
}
function Game(question, answer){
  var ans = rls.question(question);
  if( ans.toLowerCase() === answer){
    score+=1;
    console.log('Correct! Score = ', score);
  }
  else{
    console.log('Wrong, the correct answer is', answer)
  }
}