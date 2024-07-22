/* Constants representing the radius of the top, middle,
 * and bottom snowball. */
var BOTTOM_RADIUS = 80;
var MID_RADIUS = 65;
var TOP_RADIUS = 30;

function start(){
	var snowmanBottom = new Circle(BOTTOM_RADIUS);
	snowmanBottom.setColor(Color.gray);
	var centerX = getWidth() / 2;
	snowmanBottom.setPosition(centerX, getHeight() - BOTTOM_RADIUS);
	add(snowmanBottom);
	
	var snowmanMiddle = new Circle(MID_RADIUS);
	snowmanMiddle.setColor(Color.gray);
	snowmanMiddle.setPosition(centerX, getHeight() - BOTTOM_RADIUS * 2 - MID_RADIUS);
	add(snowmanMiddle);
	
	var snowmanHead = new Circle(TOP_RADIUS);
	snowmanHead.setColor(Color.gray);
	snowmanHead.setPosition(centerX, getHeight() - BOTTOM_RADIUS * 2 - MID_RADIUS * 2 - TOP_RADIUS);
	add(snowmanHead);
}//end start