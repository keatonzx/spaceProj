function Block(){
	this.x = 0;
	this.y = 0;
	this.xspeed = 1;
	this.yspeed = 0;

	this.updateBlock = function(){
		this.x = this.x + this.xspeed*deltaSpeed;
		this.y = this.y + this.yspeed*deltaSpeed;

		this.x = constrain(this.x, 0, width-deltaSpeed);
		this.y = constrain(this.y, 0, height-deltaSpeed);

	}
	this.showBlock = function(){
		fill(180,0,180);
		rect(this.x,this.y,10,10);
		}

	this.direction = function(x,y){
		this.xspeed = x;
		this.yspeed = y;
	}	
}