var ship;
var deltaSpeed = 1;


function setup() {
	createCanvas(400, 400);
	ship = new Ship(0,height/2);
}

function draw() {
	background(51);

	translate(-ship.x,0);

	ship.updateShip();
	ship.showShip(10,10);

	fill(0);
	rect(300,height-50,50,50);
	 
	for (let i = 0; i < 20; i++){
		fill(0);
		rect(300 * i,height-50,50,50);
	}
}

function keyPressed() {
	if (keyCode === RIGHT_ARROW) {
		ship.direction(1,0);
	} 
}
