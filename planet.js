function Planet(){    
    this.showPlanet = function(planet,pLoop,pDiam,pHeight,pR,pG,pB,planetName){
        if(ship.loop == pLoop)
        {
            fill(255);
            triangle(windowWidth,pHeight+pDiam/pixelScale,windowWidth-5,pHeight+pDiam/pixelScale+20,windowWidth+5,pHeight+pDiam/pixelScale+20);//windowWidth-5,pHeight+20,windowWidth+5,pHeight+20);
           
            stroke(255);
            line(windowWidth,pHeight+pDiam/pixelScale,windowWidth,pHeight+200);
            noStroke();

            fill(pR,pG,pB);
            ellipse(windowWidth,pHeight,pDiam/pixelScale,pDiam/pixelScale);
            textSize(32);
            text(planetName + " is about " + planet*pixelScale + " KM from the Sun",windowWidth+(pDiam/pixelScale)+50, 500);

            deltaSpeed = 5;
        }
    }
}

