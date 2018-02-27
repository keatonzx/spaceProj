var block;
var deltaSpeed = 10;

function setup() {
	createCanvas(400, 400);
	block = new Block();
	frameRate(10);
}

function draw() {
	background(51);
	block.updateBlock();
	block.showBlock();
	
	
}

function keyPressed() {
	if (keyCode === LEFT_ARROW) {
		block.direction(-1,0);

	} else if (keyCode === RIGHT_ARROW) {
		block.direction(1,0);
	  
	} else if (keyCode === UP_ARROW){
		block.direction(0,-1);

	}else if (keyCode === DOWN_ARROW){
		block.direction(0,1);

  }
}
