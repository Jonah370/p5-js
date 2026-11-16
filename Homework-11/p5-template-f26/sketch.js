


function setup() {
  //Setup, makes the size of the canvas and background color as well as changing the shape modes
  createCanvas(1000, 500);
  angleMode(DEGREES);
  rectMode(CENTER);
  ellipseMode(CENTER);
}

function draw() {
}


function mousePressed() {
  //Makes the background grey with no strokes
  background(30);
  noStroke();
  //Makes the droplets blue 
  fill(14,82,176);

  //The for loop here makes all 100 droplets and puts them at a random position and angle 
  //The push and pop change where I can put the origin point, translate is the new one
  for (let x = 1; x < 100; x += 1) {
    push();
    translate(random(width),random(height));
    rotate(random(-35,-45));
    rect(0,0,5,random(20,35));
    pop();
  }
  //Makes the clouds grey
  fill(82,random(80,100));
  //The for loop here puts the clouds randomly at the top of the screen
  for (let x =1; x < 30; x += 1) {
    push();
    translate(random(width),random(height/5));
    ellipse(0,0,random(200,300),random(100,200));
    pop();
  }
  //This makes the lighthouse
  push();
  translate(800,400);
  fill(255);
  rect(0,-100,30,30);
  fill(196,8,33);
  rect(0,-130,30,30);
  fill(255);
  rect(0,-160,30,30);
  fill(0,120,191,50);
  rect(0,-190,30,30);
  fill(196,8,33);
  rect(0,-210,30,10);
  fill(0);
  rect(0,-190,10,10);
  fill(255,232,0,50);
  triangle(-600,-250,0,-190,-600,-100);
  fill(0);
  circle(0,0,200);
  pop();

  //Makes the beam of light from the lighthouse
 
 
  //Makes the boat
  push();
  translate(random(25,975),335);
  fill(196,8,33);
  rect(0,-10,30,30);
  fill(91);
  arc(0,0,100,100,0,180,OPEN);
  pop();

  //This fill and rect is for the background to the water bumps
  fill(14,82,176);
  rect(500,500,1000,200);
  
  //These ellipses make up the bumps in the water
   ellipse(random(1,100),400,250,random(50,100));
   ellipse(random(100,200),400,250,random(50,100));
   ellipse(random(200,300),400,250,random(50,100));
   ellipse(random(300,400),400,250,random(50,100));
   ellipse(random(400,500),400,250,random(50,100));
   ellipse(random(500,600),400,250,random(50,100));
   ellipse(random(600,700),400,250,random(50,100));
   ellipse(random(700,800),400,250,random(50,100));
   ellipse(random(800,900),400,250,random(50,100));
   ellipse(random(900,1000),400,250,random(50,100));

}
