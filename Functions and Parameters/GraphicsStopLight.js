var LIGHT_RADIUS = 35;
var STOPLIGHT_WIDTH = 120;
var STOPLIGHT_HEIGHT = 350;
var BUFFER = 100;
var GRAY_COLOR = "#737071";
var centerX = getWidth() / 2;
var centerY = getHeight() / 2;


function start(){
	stopLight(STOPLIGHT_WIDTH, STOPLIGHT_HEIGHT, GRAY_COLOR);
	light(LIGHT_RADIUS, Color.red, centerX, centerY - BUFFER);
	light(LIGHT_RADIUS, Color.yellow, centerX, centerY);
	light(LIGHT_RADIUS, Color.green, centerX, centerY + BUFFER);
}//end start

function stopLight(width, length, color){
    var stopLight = new Rectangle(width, length);
    stopLight.setColor(color);
    stopLight.setPosition(centerX - width / 2, centerY - length / 2);
    add(stopLight);
}//end stopLight

function light(radius, color, x, y){
    var light = new Circle(radius);
    light.setColor(color);
    light.setPosition(x, y);
    add(light);
}//end light