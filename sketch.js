var ship;
var deltaSpeed = 0;
var count = 0;

function setup() {
	createCanvas(windowWidth, windowHeight);
	ship = new Ship();
}

function draw() {
	background(51);
	
	translate(-ship.x,0);
	ship.updateShip();
	ship.showShip(10,10);
	drawScale();

	// 2min :50 seconds
	fill(150);
	

	fill(255,0,0);
	//ellipse(-10,height/2,100,height);
	noStroke();
	ellipse(0,height/2,3,3);
	ellipse(4930,height/2,50,50);
	ellipse(9216,height/2,50,50);
	ellipse(12781,height/2,10,10);
	ellipse(19327,height/2,50,50);
	ellipse(66320,height/2,50,50);
	ellipse(122061,height/2,50,50);
	ellipse(245059,height/2,50,50);
	ellipse(383560,height/2,50,50);
	ellipse(500000,height/2,50,50);




	checkKeyDown();
}
//var count = 0 ;
function checkKeyDown() {
	if (keyIsDown(RIGHT_ARROW)) {
		if(deltaSpeed < 200)
		deltaSpeed = deltaSpeed +1 *2
		//console.log(deltaSpeed);
		count++;
		ship.direction(1);
	} 
	if (keyIsDown(LEFT_ARROW)) {
		
		//while(deltaSpeed > -20 && ship.x > 1)
		deltaSpeed = deltaSpeed +1 *-2
		
	} 
}

function drawScale(){
	for (let i = 0; i < 5000; i++){
		fill(0);
		text(i,100*i,height-60);
		rect(100*i,height-50,1,50);
	}
}
