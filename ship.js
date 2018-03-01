function Ship(x,y){
	this.x = x;
	this.y = y;
	this.xspeed = 0;
	this.yspeed = 0;

	this.updateShip = function(){
		this.x = this.x + this.xspeed*deltaSpeed;
		this.y = this.y + this.yspeed*deltaSpeed;

		//this.x = constrain(this.x, 0, width-deltaSpeed);
		//this.y = constrain(this.y, 0, height-deltaSpeed);

	}
	this.showShip = function(x,y){
		fill(180,0,180);
		rect(this.x,this.y,x,y);
		}

	this.direction = function(x,y){
		this.xspeed = x;
		this.yspeed = y;
	}	
}