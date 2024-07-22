var POOL_BALL_RADIUS = 40;
var POOL_BALL_FONT = "30pt Arial";

function start(){
	drawPoolBall(Color.orange, 5, 100, 100);
	drawPoolBall(Color.green, 6, 50, 200);
	drawPoolBall(Color.red, 3, 150, 350);
	drawPoolBall(Color.blue, 2, 250, 140);

	// Add some more pool balls!
}


function drawPoolBall(color, num, x, y){
	var PoolBall = new Circle(POOL_BALL_RADIUS);
	PoolBall.setColor(color);
	PoolBall.setPosition(x, y);
	var PoolBallNumber = new Text(num, POOL_BALL_FONT);
	PoolBallNumber.setPosition(x - (PoolBallNumber.getWidth()/2), y + (POOL_BALL_RADIUS/3));
	PoolBallNumber.setColor(Color.white);
	add(PoolBall);
	add(PoolBallNumber);
}