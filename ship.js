function Ship(){
	this.x = 1;
	this.xspeed = 1;
	this.dist = 0;

	this.updateDist= function(){
		return this.x;
	}

	this.updateShip = function(){
		console.log(this.x);
		this.x = this.x + this.xspeed*deltaSpeed;
		this.dist = this.dist + this.xspeed*deltaSpeed;
		this.x = constrain(this.x, -500,100000000);

	}

	this.showShip = function(x,y){
		fill(180,0,180);
		text(this.dist,this.x-deltaSpeed,200);
		rect(this.x - deltaSpeed,height/2,x,y);
		}

	this.direction = function(x){
		this.xspeed = x;	
	}	

	this.loopShip = function(){
		if (this.x > limit) {
			this.x = 100;
		}
	}
}