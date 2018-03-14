var ship;
var deltaSpeed = 0;
var limit = 2000;

function setup() {
	createCanvas(windowWidth, windowHeight);
	ship = new Ship();
	planet = new Planet();
}

function draw() {
	background(51);

	translate(-ship.x,0);

	ship.updateShip();
	ship.showShip(10,10);
	ship.loopShip();
	drawScale();

	planet.drawPlanet(2,100,255,0,0);

	

	if(ship.dist > 3000 && ship.dist < 5001){
		fill(255,0,0);
		rect(windowWidth,height/2, 50,50);
	}
	
	checkKeyDown();
}


function checkKeyDown() {
	if (keyIsDown(RIGHT_ARROW)) {
		ship.dir = 1;
		if(deltaSpeed < 20)
			deltaSpeed = deltaSpeed +1 *2;
		ship.xspeed = 1;
	} 
	
	if (keyIsDown(LEFT_ARROW)) {
		ship.dir = -1;
		if(deltaSpeed <20)
			deltaSpeed = deltaSpeed +1 *(2);
		ship.xspeed = -1;
	} 
}


function drawScale(){
	for (let i = 0; i < 30; i++){
		fill(0);
		text(i,100*i,height-60);
		rect(100*i,height-50,1,50);
	}
}

