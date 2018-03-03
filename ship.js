function Ship(){
	this.x = 1;
	this.xspeed = 1;

	this.updateShip = function(){
		this.x = this.x + this.xspeed*deltaSpeed;
		//this.y = this.y + this.yspeed*deltaSpeed;

		this.x = constrain(this.x, -500, 100000000);
		//this.y = constrain(this.y, 0, height-deltaSpeed);

	}
	this.showShip = function(x,y){
		fill(180,0,180);
		rect(this.x - deltaSpeed,height/2,x,y);
		}

	this.direction = function(x){
		this.xspeed = x;
		
	}	
}