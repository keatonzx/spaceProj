function Planet(){    
    //draws a planet
    this.showPlanet = function(planet){
        if(ship.dist >= planet-((windowWidth+100)-ship.x) && ship.dist <= planet+ship.x){
            fill(255,0,0);
            ellipse(windowWidth,100,100,100);
        }
    }
}

