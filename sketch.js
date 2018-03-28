var ship;
var deltaSpeed = 0;
var counter = 0;

function setup() {
	createCanvas(windowWidth, windowHeight);
	ship = new Ship();
	planet = new Planet();

}

function draw() {
	background(0);

	translate(-ship.x,0);
	ellipse(windowWidth+50, height/2, 40,50);

	
	if(counter == 3 ){
		ellipse(windowWidth, height/2, 40,40);
	}
	ship.updateShip();
	ship.showShip(10,10);
	ship.loopShip();
	drawScale();

	console.log(windowWidth + "width");
	console.log(ship.x);
	

//	loop iterator to know what to do? 
	console.log(counter+"count");
	
	checkKeyDown();
}


function checkKeyDown() {
	if (keyIsDown(RIGHT_ARROW)) {
		ship.dir = 1;
		if(deltaSpeed < 5)
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


function drawScale(){
	
	for (let i = 0; i < 30; i++){
		fill(255,255,255);

		//text(i,100*i,height-60);

		fill(255);
		noStroke();
		rect(100*i,height-50,1,50);
		
		}
}

