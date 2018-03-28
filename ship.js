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
		fill(255);
		text(this.dist + " KM" ,this.x+windowWidth/2-100 ,890);
		rect(this.x+100 ,height/2,x,y);
		}


	this.loopShip = function(){
		
		if(this.dir > 0){
			if (this.x  > windowWidth+100) {
				this.x = 0;
				counter++;

			}
		}
		if(this.dir < 0 && ship.dist != 0){
			if(this.x <=1){
				this.x = windowWidth;
				counter--;
			}
				
			if(this.dist == 0)
				this.x = 0;	
		}
	}
}
