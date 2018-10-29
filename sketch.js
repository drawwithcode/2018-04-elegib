var myData;
var myImage;
var sposta = 0;
var match = 0;
var click = 0;
var button = 0;
var cambiaPagina = 0;
var imInterstellar;
var imFightclub;
var imMatrix;
var imPsycho;
var imDeparted;
var imPulpfiction;
var imInseption;
var imPianist;
var imForrestgump;
var imGladietor;
var imMemento;
var imSchindler;
var arrowHover;
var arrow;



function preload() {
  myData = loadJSON('assets/top-rated-movies-01.json');
  imInterstellar = loadImage ('./assets/interstellar.jpg ')
  imFightclub = loadImage ('./assets/fightclub.jpg ')
  imMatrix = loadImage ('./assets/matrix.jpg ')
    imPsycho = loadImage ('./assets/psycho.jpg ')
      imDeparted = loadImage ('./assets/departed.jpg ')
    imPulpfiction = loadImage ('./assets/pulpfiction.jpg ')
            imInception = loadImage ('./assets/inception.jpg ')
            imPianist = loadImage ('./assets/pianist.jpg ')
            imForrestgump = loadImage ('./assets/forrestgump.jpg ')
              imGladietor = loadImage ('./assets/gladietor.jpg ')
                imMemento = loadImage ('./assets/memento.jpg ')
                  imSchindler = loadImage ('./assets/schindler.jpg ')
                    arrowHover = loadImage ('./assets/arrowhover.png ')
                    arrow = loadImage ('./assets/arrow.png ')

	// put preload code here
}

var movies = [];
var poster = []


function setup() {
	createCanvas(windowWidth, windowHeight);

  for(var i = 0; i < myData.films.length; i++ ){

    var movie = myData.films[i]; // la var è uguale al file peopl in space, di quello prendo l'array paople e dell'array prendo gli elementi

    var x = 240+i*height/6 - 150;
    var y = 590
    var l = movie.title;

    var newMovie = new Movie(x,y,100,l);
    movies.push(newMovie);
    newMovie.c = i
  }
}


function draw() {
	background('#e2e0cf');
  textAlign(CENTER);
  textSize(25);
  if(frameCount < 300){
      fill(0,0,0,200)
      rect(width/2, height/2,width, height)
      fill(255);
      text('Drag the film\'\s titles into the corresponding film poster box.\nPut the mouse over the posters to get information about the plot of the corresponding film.', width/2, 450)
  }
  if( sposta == 1) {cursor(HAND);} else {
    cursor(ARROW);
  }
    fill(0);
    textSize(14);
 // pagina 1
  if(button == 0 && mouseX > 95 && mouseX < 295 && mouseY > 50 && mouseY < 290) {
    var testo1 = myData.films[11]
    text(testo1.storyline, width/2, 400)}
  else if(button == 0 && mouseX > 325 && mouseX < 525 && mouseY > 50 && mouseY < 290) {
    var testo1 = myData.films[6]
    text(testo1.storyline, width/2, 400)}
  else if(button == 0 && mouseX > 555 && mouseX < 755 && mouseY > 50 && mouseY < 290) {
    var testo1 = myData.films[2]
  text(testo1.storyline, width/2, 400)}
  else if(button == 0 && mouseX > 785 && mouseX < 985 && mouseY > 50 && mouseY < 290) {
    var testo1 = myData.films[5]
  text(testo1.storyline, width/2, 400)}
  else if(button == 0 && mouseX > 1015 && mouseX < 1215 && mouseY > 50 && mouseY < 290) {
    var testo1 = myData.films[8]
  text(testo1.storyline, width/2, 400)}
  else if(button == 0 && mouseX > 1245 && mouseX < 1445 && mouseY > 50 && mouseY < 290) {
    var testo1 = myData.films[10]
  text(testo1.storyline, width/2, 400)};

//pagina 2


  if(button == 1 && mouseX > 95 && mouseX < 295 && mouseY > 50 && mouseY < 290) {
    var testo1 = myData.films[0]
    text(testo1.storyline, width/2, 400)}
  else if(button == 1 && mouseX > 325 && mouseX < 525 && mouseY > 50 && mouseY < 290) {
    var testo1 = myData.films[1]
    text(testo1.storyline, width/2, 400)}
  else if(button == 1 && mouseX > 555 && mouseX < 755 && mouseY > 50 && mouseY < 290) {
    var testo1 = myData.films[4]
  text(testo1.storyline, width/2, 400)}
  else if(button == 1 && mouseX > 785 && mouseX < 985 && mouseY > 50 && mouseY < 290) {
    var testo1 = myData.films[9]
  text(testo1.storyline, width/2, 400)}
  else if(button == 1 && mouseX > 1015 && mouseX < 1215 && mouseY > 50 && mouseY < 290) {
    var testo1 = myData.films[3]
  text(testo1.storyline, width/2, 400)}
  else if(button == 1 && mouseX > 1245 && mouseX < 1445 && mouseY > 50 && mouseY < 290) {
    var testo1 = myData.films[7]
  text(testo1.storyline, width/2, 400)}

  textSize(12);
  noFill()

	for(var j = 0; j < movies.length; j++) {
    movies[j].move();
    movies[j].display();
}

  var eX = width/2 - 40;
  var eY = 630;

  if (mouseX > eX && mouseX < eX + 64 && mouseY > eY && mouseY < eY + 67 && button == 0) {
    click = 1} else {
    click = 0}

   if(mouseX > eX && mouseX < eX + 64 && mouseY > eY && mouseY < eY + 67 && button == 0) {
     image(arrowHover, eX, eY, 64, 67);
     cursor(HAND);
   } else if(cambiaPagina == 0){
     image(arrow, eX, eY, 64, 67);
   }

  if( button == 0 ) {
    rectMode(CORNER);
    noFill()
    rect (95, 290, 200, 40);
    image(imMemento, 95,50, 200, 240);
    //interstellar
    rect (325, 290, 200, 40);
    image(imInterstellar, 325.5,50, 200, 240);
    //fight club
    rect (555, 290, 200, 40);
    image(imFightclub, 555.5,50, 200, 240);
    //matrix
    rect (785, 290, 200, 40);
    image(imMatrix, 785.5,50, 200, 240);
    //Psycho
    rect (1015, 290, 200, 40);
    image(imPsycho, 1015.5,50, 200, 240);
    //the departed
    rect (1245, 290, 200, 40);
    image(imDeparted, 1245.5,50, 200, 240);
    }

 else if( button == 1) {
    noFill()
    rectMode(CORNER);
    rect (95, 290, 200, 40);
    image(imSchindler, 95,50, 200, 240);
    //gladietor
    rect (1245, 290, 200, 40);
    image(imGladietor, 1245.5,50, 200, 240)
    //forrestgump
    rect (1015, 290, 200, 40);
    image(imForrestgump, 1015.5,50, 200, 240);
    //pianist
    rect (785, 290, 200, 40);
    image(imPianist, 785.5,50, 200, 240);
    //inception
    rect (555, 290, 200, 40);
    image(imInception, 555.5,50, 200, 240);
    //pulp fiction
    rect (325, 290, 200, 40);
    image(imPulpfiction, 325.5,50, 200, 240);}
    rectMode(CENTER)
}

function Movie(_x, _y, _diameter, _label) {
	// Properties defined by constructor
	this.size = _diameter;
	this.x = _x;
	this.y = _y;
  this.testo = _label; // ettichetta per aggiungere il text ad ogni oggetto
  this.c = 0;
  this.color = '#e0dbaa';
  this.match = 0;
  noFill()
	// Hardcoded properties
	this.speed = 2;
  this.touch = function() {
        var cambia =  ((this.x - mouseX) ** 2) + ((this.y - mouseY) ** 2) < 1900;
        return cambia;
    };

  this.move = function ()  {
        if(cambiaPagina == 0) {
        // memento rect (95, 290, 200, 40);
        if (this.touch() && this.c ==  11 &&   this.x < 95 || this.x > 295 || this.y <290 || this.y >330) {this.match = 0} else if(this.c == 11 && this.x >95 && this.x < 295 && this.y > 290 && this.y < 330) {this.match = 1; };
        // Interstellar rect (325, 290, 200, 40);
        if (this.touch() && this.c ==  6 &&   this.x < 325 || this.x > 525 || this.y <290 || this.y >330) {this.match = 0} else if(this.c == 6 && this.x >325 && this.x < 525 && this.y > 290 && this.y < 330) {this.match = 1};
        // fight club  rect (555, 290, 200, 40);
        if (this.touch() && this.c ==  2 &&   this.x < 555 || this.x > 755 || this.y <290 || this.y >330) {this.match = 0} else if(this.c == 2 && this.x >555 && this.x < 755 && this.y > 290 && this.y < 330) {this.match = 1};
        // matrix rect (785, 290, 200, 40);
        if (this.touch() && this.c ==  5 &&   this.x < 785 || this.x > 985 || this.y <290 || this.y >330) {this.match = 0} else if(this.c == 5 && this.x >785 && this.x < 985 && this.y > 290 && this.y < 330) {this.match = 1};
        // psyco rect (1015, 290, 200, 40);
        if (this.touch() && this.c ==  8 &&   this.x < 1015 || this.x > 1215 || this.y <290 || this.y >330) {this.match = 0} else if(this.c == 8 && this.x >1015 && this.x < 1215 && this.y > 290 && this.y < 330) {this.match = 1};
        //the departed rect (1245, 290, 200, 40);
        if (this.touch() && this.c ==  10 &&   this.x < 1245 || this.x > 1445 || this.y <290 || this.y >330) {this.match = 0} else if(this.c == 10 && this.x >1245 && this.x < 1445 && this.y > 290 && this.y < 330) {this.match = 1};}
        else if (cambiaPagina == 1) {this.x = _x; this.y = _y;  if(this.touch()) {cambiaPagina = 2}}

   if(cambiaPagina == 2) {
        //schindler
        if (this.touch() && this.c ==  0 &&   this.x < 95 || this.x > 295 || this.y <290 || this.y >330) {this.match = 0} else if(this.c == 0 && this.x >95 && this.x < 295 && this.y > 290 && this.y < 330) {this.match = 1};
        if (this.touch() && this.c ==  1 &&   this.x < 325 || this.x > 525 || this.y <290 || this.y >330) {this.match = 0} else if(this.c == 1 && this.x >325 && this.x < 525 && this.y > 290 && this.y < 330) {this.match = 1};
        //inception
        if (this.touch() && this.c ==  4 &&   this.x < 555 || this.x > 755 || this.y <290 || this.y >330) {this.match = 0} else if(this.c == 4 && this.x >555 && this.x < 755 && this.y > 290 && this.y < 330) {this.match = 1};
        // pianist
        if (this.touch() && this.c ==  9 &&   this.x < 785 || this.x > 985 || this.y <290 || this.y >330) {this.match = 0} else if(this.c == 9 && this.x >785 && this.x < 985 && this.y > 290 && this.y < 330) {this.match = 1};
        // forrestgump
        if (this.touch() && this.c ==  3 &&   this.x < 1015 || this.x > 1215 || this.y <290 || this.y >330) {this.match = 0} else if(this.c == 3 && this.x >1015 && this.x < 1215 && this.y > 290 && this.y < 330) {this.match = 1};
        // gladietor
        if (this.touch() && this.c ==  7 &&   this.x < 1245 || this.x > 1445 || this.y <290 || this.y >330) {this.match = 0} else if(this.c == 7 && this.x >1245 && this.x < 1445 && this.y > 290 && this.y < 330) {this.match = 1};
   }
  if(sposta == 1 && this.touch()) {this.x = mouseX; this.y = mouseY; fill(this.color)}
  else if (sposta == 0 && this.match == 0) {this.x = _x; this.y = _y}
}


	this.display = function() {
    if (this.touch()) {fill(this.color); cursor(HAND);};
    rectMode(CENTER);
		rect(this.x, this.y, this.size, this.size - 75);
    fill('black');
    textAlign(CENTER);
    text(this.testo, this.x, this.y+4);
    noFill();
  	}
    }

function mouseDragged() {sposta = 1; }
function mouseReleased() {sposta = 0; }
function mousePressed() {if(click == 1){button = 1; cambiaPagina = 1} }
