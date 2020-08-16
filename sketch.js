var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;

function setup() {
  createCanvas(800,400,480,800);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  for(var k=0; k <=width; k=k+80){
    division.push(new Devitions(k,height-devisionHeight/2,10,divisionHeight));
  }
  for(var j=0; j<particles.length; j++){
    particles[j].display();
  }
  for(var k=0; k<divisions.length; k++){
    divisions[k].display();
  }
      if(frameCount%60===0){
				particles.push(new Particle(random(width/2-10,width/2+10),10,10));
			}
  drawSprites();
}