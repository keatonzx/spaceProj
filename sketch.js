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

	if(ship.dist >=2 && ship.dist <windowWidth){
	//	console.log("hello");
		//drawPlanet(2);
	}
	

	if(ship.dist > 3000 && ship.dist < 5001){
		console.log("hello");
		fill(255,0,0);
		rect(windowWidth,height/2, 50,50);
	}
	//if(ship.dist > 10000 && ship.dist < 12000){
		//console.log("hello");
	//	fill(120,0,0);
		//rect(windowWidth,height/2, 50,50);
//	}
	//console.log(count+"count");


	checkKeyDown();
}

/*function drawPlanet(shipX){
	fill(255);
	ellipse(shipX+windowWidth,height/2,50,50);
}*/

function checkKeyDown() {
	if (keyIsDown(RIGHT_ARROW)) {
		if(deltaSpeed < 20)
		deltaSpeed = deltaSpeed +1 *2;
		ship.direction(1);
	} 
	if (keyIsDown(LEFT_ARROW)) {
		deltaSpeed = deltaSpeed +1 *-2;
	} 
}

function drawScale(){
	for (let i = 0; i < 30; i++){
		fill(0);
		text(i,100*i,height-60);
		rect(100*i,height-50,1,50);
	}
}
