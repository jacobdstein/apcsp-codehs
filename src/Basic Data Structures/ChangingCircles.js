var NUM_CIRCLES = 15;
var MIN_RADIUS = 10;
var MAX_RADIUS = 40;
var DELAY = 500;
var circlesList =[];
var randomColor = Randomizer.nextColor();

function start(){
	createCircles(NUM_CIRCLES);
	setTimer(changeColors, DELAY);
}//end start

function createCircles(num){
    for(var i = 0; i < NUM_CIRCLES; i++){
        var circle = new Circle(Randomizer.nextInt(MIN_RADIUS, MAX_RADIUS));
        createRandomCircle(circle);
        changeColors(circle);
        add(circle);
        circlesList.push(circle);
    }//end for
}//end createCircles

function createRandomCircle(circle){
    circle.setPosition(Randomizer.nextInt(0, getWidth()), Randomizer.nextInt(0, getHeight()));
}//end createRandomCircle

function changeColors(circle){
    circle.setColor(randomColor);
}//end changeColors