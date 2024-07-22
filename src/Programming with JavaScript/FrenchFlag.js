/* This program should draw the French flag. The
 * left third of the canvas is blue, the middle third
 * is white, and the right third is red. */
function start(){
	var blueStripe = new Rectangle(getWidth() / 3, getHeight());
	blueStripe.setColor(Color.blue);
	add(blueStripe);
	
	var redStripe = new Rectangle(getWidth() / 3 , getHeight());
	redStripe.setColor(Color.red);
	var xPos = getWidth() - getWidth() / 3;
	redStripe.setPosition(xPos, 0);
	add(redStripe);
	
}//end start