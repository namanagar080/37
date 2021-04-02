var canvas,contestant;
var quiz, database,gameState=0,contestantCount=0;

function setup(){
  canvas = createCanvas(850,600);
  database=firebase.database();

  quiz=new Quiz();
  quiz.getState();
  quiz.start();
}


function draw(){
  background("pink");
drawSprites();
  
}
