function preload(){
};

var figureS = [];
var figureD = [];
var t = 0;
var tempo = 3000;



function setup() {

  createCanvas(windowWidth, windowHeight);
  var nFigure = 200;

  // create first object group
  for (var i = 0; i < nFigure; i++) {
       var myFigura = new figuraS(random(0, 50), random(500, height), 30);
       noStroke();
      figureS.push(myFigura);}

// create second object group
  for (var i = 0; i < nFigure; i++) {
       var myFigura1 = new figuraS(random(width-50, width), random(0, height-500), 30);
       noStroke();
       figureD.push(myFigura1); myFigura1.color = 'blue'; myFigura1.shape = 1; myFigura1.position = 1;  }
}

function draw() {
  noStroke();
  background(0);
  fill('green');
  textAlign(CENTER);
  textSize(25);
  tempo = tempo - 1;
  text('Time:',width/2-3, height/6 - 30);
  text(tempo,width/2-3, height/6 +20);
  text('Score:', width/2-3, 5*height/6 - 30);
  text(t, width/2-3, 5*height/6+20);
  fill(255);

  if (frameCount < 400) {
        text('Try to touch \n at least \n300 shapes to win',width/2-3, height/2-20);
      }
  if (tempo >= 0 && t >= 300) {
        tempo = 1;
        text('YOU WIN',width/2-3, height/2);
      }
  else if (tempo <= 0 && t < 300) {
        tempo = 1;
        text('GAME OVER',width/2-3, height/2);
      };

// draw the first object group
  for (var j = 0; j < figureS.length; j++ ) {
         figureS[j].count();
         figureS[j].move();
         figureS[j].change();
         figureS[j].display();
         if(tempo ==1 && t>=300 || tempo == 1 && t<=300) {
           tempo =1;
           figureS[j].speed = 0;
         }}

// draw the second object group
  for (var j = 0; j < figureS.length; j++ ) {
         figureD[j].count();
         figureD[j].move();
         figureD[j].change();
         figureD[j].display();
         if(tempo ==1 && t>=300 || tempo == 1 && t<=300) {
           tempo =1;
           figureD[j].speed = 0;
         }}

stroke(255);
strokeWeight(20);
line(2*width/5+6, 0, 2*width/5+6, frameCount*4);
line(3*width/5-6, height-frameCount*4, 3*width/5-6, height);

}

// create object
function figuraS(_x, _y, _diameter) {

  this.x = _x;
  this.y = _y;
  this.diameter = _diameter;
  this.speed = random(-1,5);
  this.color =  'yellow';
  this.shape = 0;
  this.position = 0;
  this.tocco = 1 ;
  var yDir = 1;
  var xDir = 1;


// function to change object properties
this.change =  function() {if(this.touch() && this.position == 0) {
                              colorMode(HSB);
                              this.color =  color(random(175, 299), 100, 100);
                              this.shape = 1;
                              this.tocco = 0;
                          }
                           else if (this.touch() && this.position == 1 ) {
                              colorMode(HSB);
                              this.color =  color(random(67, 0), 100, 100);
                              this.shape = 0;
                              this.tocco = 0;
                          } }

// function to count how many time the mouse touch the shapes
 this.count =  function() {if(this.touch() && this.tocco == 1) {
                              console.log(this.tocco);
                              this.tocco = 0;
                               t = t+1
                           }};




this.display = function() {
      fill(this.color);
      if(this.shape == 0 ) {
         ellipse (this.x, this.y, this.diameter);
        //this.color = color(random(0, 255), random(0,25), random(0,25));
      }
      else if (this.shape == 1 ) {
        rectMode(CENTER);
        rect(this.x, this.y, 20, 20)}
      }



this.touch = function() {
      var cambia =  ((this.x - mouseX) ** 2) + ((this.y - mouseY) ** 2) < 600;
      return cambia;
  };

// function to move the object elements
  this.move = function() {
      this.x += this.speed * xDir;
      this.y += this.speed * yDir;
        if(this.y > height || this.y < 0) {yDir =yDir * -1;}

        if(this.position == 0 && this.x > 2*width/5 || this.x < 0  ) {xDir =xDir * -1;}
        else if ( this.position == 1 && this.x < 3*width/5 || this.x > width) {xDir =xDir * -1;}

}
}
