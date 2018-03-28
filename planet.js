function Planet(){    
    this.drawPlanet = function(shipX,diam,r,g,b){
        fill(r,g,b);
        ellipse(shipX+windowWidth+100,height/2,diam,diam);
    }

}