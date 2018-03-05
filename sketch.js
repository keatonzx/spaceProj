var ship;
var deltaSpeed = 0;
var count = 0;

function setup() {
	createCanvas(windowWidth, windowHeight);
	ship = new Ship();

}

function draw() {
	//frameRate(10);
	background(51);
	
	translate(-ship.x,0);
	ship.updateShip();
	ship.showShip(10,10);
	drawScale();
	//console.log(ship.dist);
	console.log(windowWidth);
	console.log(ship.dist);
	if(ship.dist >= 2 && ship.dist <= windowWidth){
		console.log("hello");
		drawPlanet(2);
	}else if (ship.x > 2000) {
		//ship.dist += ship.updateDist();
		console.log(ship.dist);
		ship.x = 100;
	}


	checkKeyDown();
}

function drawPlanet(shipX){
	fill(255);
	ellipse(shipX+windowWidth,height/2,50,50);
}

//var count = 0 ;
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
