function Ship(){
	this.x = 0;
	this.xspeed = 0;
	this.dist = 0;
	this.dir = 0;

	
	this.updateShip = function(){
		
		this.x = this.x + this.xspeed*deltaSpeed;
		this.dist = this.dist + this.xspeed*deltaSpeed;
		
		this.x = constrain(this.x, -0,100000000);
		this.dist = constrain(this.dist, 0, 10000000);

	}

	this.showShip = function(x,y){
		fill(180,0,180);
		text(this.dist,this.x+100 ,200);
		rect(this.x + 100 ,height/2,x,y);
		}


	this.loopShip = function(){
		if(this.dir > 0){
			if (this.x > limit) {
				this.x = 100;
			}
		}
		if(this.dir < 0){
			if(this.x < 5)
				this.x = limit;
			if(this.dist == 0)
				this.x = 0;		
		}
	}
}
