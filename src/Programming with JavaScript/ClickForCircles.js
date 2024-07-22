/* This program draws a circle wherever the user
 * clicks. */
function start(){
	mouseClickMethod(drawCircle); //drawCircle is called by the Operating System
}

function drawCircle(e){ //e is the event data - x,y coordinates
	var circle = new Circle(20);
	circle.setPosition(e.getX(), e.getY());
	circle.setColor(Randomizer.nextColor());
	add(circle);
}