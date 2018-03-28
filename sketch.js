var ship;
var deltaSpeed = 0;
var pixelScale = 3474;
var img;

//1 pixel = 3474 km - this make the pixel the size of the moon

function preload() {
  img = loadImage('rocket.png');
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	ship = new Ship();
	planet = new Planet();
}

function draw() {
	background(0);

	//rotates the rocket image 
	push();
		translate(200, 200);
		rotate(radians(90));
		scale(0.5);
		image(img, height/2, 100);
	pop();

	translate(-ship.x,0); // keeps the rocket the centre of attention

	planet.showPlanet(2000); //shows an arbitrary planet

	ship.updateShip();
	ship.showDist();
	ship.loopShip();

	drawScale();
	checkKeyDown();
}

//checks for user input 
function checkKeyDown() {
	if (keyIsDown(RIGHT_ARROW)) {
		ship.dir = 1;
		if(deltaSpeed < 10)
			deltaSpeed = deltaSpeed +1 *2;
		ship.xspeed = 1;
	} 

	if (keyIsDown(LEFT_ARROW)) {
		ship.dir = -1;
		if(deltaSpeed <5)
			deltaSpeed = deltaSpeed +1 *(2);
		ship.xspeed = -1;
	} 
}

//draws a scale on the bottom
function drawScale(){
	for (let i = 0; i < 30; i++){
		fill(255);
		noStroke();
		rect(100*i,height-50,1,50);
		}
}

