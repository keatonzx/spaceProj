function Ship(){
	this.x = 0;
	this.xspeed = 0;
	this.dist = 0;
	this.dir = 0;
	this.loop = 0;

	this.returnSX = function(){
		return this.x;
	}
	//updates the ships x value and distance value, the x value is between 0 and widowwidth+100
	this.updateShip = function(){	
		this.x = this.x + this.xspeed*deltaSpeed;
		this.dist = this.dist + this.xspeed*deltaSpeed;
		
		this.x = constrain(this.x, -0,100000000);
		this.dist = constrain(this.dist, 0, 10000000);
	}

	//shows distance on screen
	this.showDist = function(){
		fill(255);
		text(this.dist*3474 + " KM"+windowWidth ,this.x+windowWidth/2-100 ,890);
		}

	//loops the ship to keep everything efficient
	this.loopShip = function(){
		if(this.dir > 0){
			if (this.x  >= windowWidth) {
				ship.loop++;
				this.x = 0;
			}
		}

		if(this.dir < 0 ){
			if(this.x <=0){
				ship.loop--;
				this.x = windowWidth;
			}
			if(this.dist == 0){
				ship.loop = 0;
				this.x = 0;	
			}	
		}
	}
}
