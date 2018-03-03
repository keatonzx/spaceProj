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

	//fill(0);
	//rect(100,height-50,1,50);
	var count = 0;
	// 2min :50 seconds
	for (let i = 0; i < 2000; i++){
		fill(0);
		rect(100*i,height-50,1,50);
		//count = count + 1;
		count++;

	}
	fill(255,0,0);
	ellipse(-10,height/2,50,height);
	ellipse(500,height/2,50,50);
	ellipse(5000,height/2,50,50);
	ellipse(50000,height/2,50,50);


	checkKeyDown();
}

function checkKeyDown() {
	if (keyIsDown(RIGHT_ARROW)) {
		if(deltaSpeed < 20)
		deltaSpeed = deltaSpeed +1 *2
		//console.log(deltaSpeed);
		ship.direction(1);
	} 
	if (keyIsDown(LEFT_ARROW)) {
		
		//while(deltaSpeed > -20 && ship.x > 1)
		deltaSpeed = deltaSpeed +1 *-2
		
	} 
}
