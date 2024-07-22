var SIDE_LENGTH = 100;
var square;

function start(){
	var square = new Rectangle(SIDE_LENGTH, SIDE_LENGTH);
	var centerX = getWidth() / 2;
	var centerY = getHeight() / 2;
	square.setPosition(centerX - SIDE_LENGTH / 2, centerY - SIDE_LENGTH / 2);
	square.setColor(Randomizer.nextColor());
	add(square);
}//end start