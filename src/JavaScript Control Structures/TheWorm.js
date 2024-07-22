var NUM_CIRCLES = 15;
var circle;
// This graphics program should draw a worm. 
// A worm is made up of NUM_CIRCLES circles. 
// Use a for loop to draw the worm, 
// centered vertically in the screen. 
// Also, be sure that the worm is still drawn across 
// the whole canvas, even if the value of NUM_CIRCLES is changed.
function start(){
	                //Diameter of 1 circle
	var radius = getWidth() / NUM_CIRCLES / 2;
	var yPos = getHeight() / 2;
	for(var i = 0; i < NUM_CIRCLES; i++){
        circle = new Circle(radius);
        var xPos = i * radius * 2 + radius;
        circle.setPosition(xPos, yPos);
        add(circle);
	}//end for
	
}//end start