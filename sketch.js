var ship;
var deltaSpeed = 0;;


function setup() {
	createCanvas(windowWidth, windowHeight);
	ship = new Ship();
}

function draw() {
	background(51);
	
	translate(-ship.x,0);

	ship.updateShip();
	ship.showShip(10,10);

	fill(0);
	rect(300,height-50,50,50);
	 
	for (let i = 0; i < 2000; i++){
		fill(0);
		rect(300 * i,height-50,50,50);
		console.log(300*i);
		//174900 pixels probably need over a million, will do math later 
	}
	
	checkKeyDown();
}

function checkKeyDown() {
	if (keyIsDown(RIGHT_ARROW)) {
		deltaSpeed = deltaSpeed +1 *2
		//console.log(deltaSpeed);
		ship.direction(1);
	} 
	if (keyIsDown(LEFT_ARROW)) {
		deltaSpeed = deltaSpeed +1 *-2
	} 
}
