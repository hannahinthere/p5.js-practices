var x=0;
var tx;

function setup() { 
  createCanvas(600, 600);
  background(255);
} 

function draw() { 
  
  drawBack();
  
  push();
  
  translate(width/2, height/2);

  for (x=0;x<10;x++) {
    
    tx=100*noise(0.01*frameCount);
    push();
    smooth();
    rotate(TWO_PI * x /10);
    scale(2,2);
    translate(tx,0);
    fill(196,151,153);
    stroke(54,57,59);
    triangle(10,10,15,5,20,10);
    noSmooth();
    
    pop();
  
  }
  
  translate();
  pop();
  
  
}

function drawBack() {

  
  push();
  
  translate(width/2,height/2);
  var a = 0.0;
  var inc = TWO_PI/25.0;
  for (var i = 0; i < 155; i++) {
    stroke(191,191,191,10);
    if (frameCount<170) {
    rotate(noise(0.02*frameCount)/ 2);
    line(i*4, 50, i*4, 50+sin(a)*30.0);
    a = a + inc;
  }}
  
  pop();
  
}