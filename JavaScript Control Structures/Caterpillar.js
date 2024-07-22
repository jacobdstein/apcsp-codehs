var NUM_CIRCLES = 15;

// This graphics program should draw a caterpillar. A caterpillar has NUM_CIRCLES
// circles. Every other circle is a different color, the even circles are red, and
// the odd circles are green. Use a for loop to draw the caterpillar, centered 
// vertically in the screen.
function start(){
    var radius = (getWidth() / NUM_CIRCLES) / 2;
    var yPos = getHeight() / 2;
	for(var i = 0; i < NUM_CIRCLES; i++){
	    var circle = new Circle(radius);
	    var xPos = i * radius * 2 + radius
	    circle.setPosition(xPos, yPos);
	    if (i % 2 == 0){
	        circle.setColor(Color.red);
	    } else{
	        circle.setColor(Color.green);
	    }//end if
	    add(circle);
	}//end for
}//end start