// variables 
var bird;
var pipes = [];
var score;
var fly;
var planeSound;
var state = 0;



function preload() {
  planeSound = loadSound('plane.mp3');
}




function setup() {
  createCanvas(600, 600);

 // Loading up plane and buildings
  bird = new Bird();
  pipes.push(new Pipe());
  score = 0;


// plane sound
  fly = loadImage("new.png")

}



function draw() {
  
  if(state===0){
    background(200,99,10);
  }

  planeSound.play();
  background(255, 100, 90);
  
  
  // Plane 
   imageMode(CENTER);
   image(fly, bird.x, bird.y,200,200);


  
// game score
  fill(200);
  noStroke();
  textSize(20);
  text("Miles: " + score, 30, 50);
  
   // instructions
  textSize(15);
  text("Instructions: The engine is failing can you keep the plane and passengers safe by",10, 560);
  text("keeping it in the air using the space bar fast and avoid the sky scrapers",10, 575);
   text("Can you make the rest of the 30MILES",10, 590);
  fill(200);
  
  
  
// Buildings   
  
  for (var i = pipes.length-1; i >= 0; i--) {
    pipes[i].show();
    pipes[i].update();

    if (pipes[i].hits(bird)) {
      score = -1;
      console.log("HIT");
    }


    if (pipes[i].offscreen()) {
      score++;
      pipes.splice(i, 1);
    }

  }


  bird.update();
  bird.show();

  if (frameCount % 100 === 0) {
    pipes.push(new Pipe());
  }


// Lose and Win state screen

if (score === -1) {
    background(0);
    textSize(50);
    text("GAME OVER!",100, 300);
    text("You Hit a Building", 60, 400);
    fill(200);
    noLoop();
 }
 

 
 if (score === 30) {
 background(0);
    textSize(50);
    text("YOU DID IT!",100, 300);
    text("YOU WIN", 60, 400);
    fill(200);
 
}}


// Key Fuction 

function keyPressed() {
  if (key == ' ') {
    bird.up();
    
  }
  
}

// references:
// https://www.youtube.com/watch?v=cXgA1d_E-jY
// https://p5js.org/reference/
// https://www.freesoundeffects.com/free-sounds/airplane-10004/