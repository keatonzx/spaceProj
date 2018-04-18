function Planet(){    
    this.showPlanet = function(planet,pLoop,pDiam,pHeight,pR,pG,pB,planetName){
        if(ship.loop == pLoop)
        {
            //draws an arrow at the planet because sometimes they are very small 
            fill(255);
            triangle(windowWidth,pHeight+pDiam/pixelScale,windowWidth-5,pHeight+pDiam/pixelScale+20,windowWidth+5,pHeight+pDiam/pixelScale+20);
            stroke(255);
            line(windowWidth,pHeight+pDiam/pixelScale,windowWidth,pHeight+200);
            noStroke();

            fill(pR,pG,pB);
            ellipse(windowWidth,pHeight,pDiam/pixelScale,pDiam/pixelScale);
            textSize(32);
            text(planetName + " is about " + planet*pixelScale + " Km from the Sun",windowWidth+(pDiam/pixelScale)+50, windowHeight/2+100);

            deltaSpeed = 5; //slows down speed once you get to a planet
        }
    }
}

